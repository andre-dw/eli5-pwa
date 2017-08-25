<template>
<main class="content">
  <template v-if="!loading">
    <div class="blog">
      <main id="post_page" class="content" :class="{ 'night': night }">
        <label class="switch">
          <img v-if="night" class="day" src="~/assets/img/icons/wheater/sun.svg" alt="Day time">
          <img v-if="!night" class="night" src="~/assets/img/icons/wheater/moon.svg" alt="Night time">
          <input ref="toggle" type="checkbox" @change="layoutSwitcher">
          <span class="slider round"></span>
        </label>
        <nuxt-link class="back_link" :class="{ 'hidden-link': hideScroll }" :to="{ name: 'blog' }">
          <img src="//cdn.prod1.eli5.io/img/icons/black/arrow-left.svg" alt="arrow left" />
          blog
        </nuxt-link>
        <social-share></social-share>
        <slot></slot>
        <div class="container">
          <div class="row">
            <article id="article" class="col-xxs-12 col-xs-12 col-sm-10 col-sm-offset-1 col-md-offset-2 col-md-8 ">
              <h1 v-html="post.title.rendered"></h1>
              <span>{{ post.date | moment('DD-MM-YYYY') }}</span>
            </article>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <article id="article" class="col-xxs-12 col-xs-12 col-sm-12 col-md-offset-1 col-md-10 ">
              <div class="content">
                <img :src="post.main_image" :alt="post.post_title">
              </div>
            </article>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <article id="article" class="col-xxs-12 col-xs-12 col-sm-10 col-sm-offset-1 col-md-offset-2 col-md-8 ">
              <div class="content post-data" v-html="post.content.rendered"></div>
            </article>
          </div>
        </div>
        <!-- <div class="container">
          <div class="row">
            <div class="col-xxs-12 col-xs-12 col-sm-10 col-md-8 col-sm-offset-2">
              <hgroup class="author">
                <span class="image">
                  <img :src="getImage(post.author.first_name)" :alt="post.author.display_name" />
                </span>
                <span class="data">
                  <h4>{{ post.author.display_name }}</h4>
                  <p>{{ post.author.description }}</p>
                </span>
              </hgroup>
            </div>
          </div>
        </div> -->
        <div class="container visible-xs back-link">
          <div class="row">
            <div class="col-xs-12">
              <nuxt-link :to="{ name: 'blog' }">
                <img src="//cdn.prod1.eli5.io/img/icons/black/arrow-left.svg" alt="arrow left" />
                blog
              </nuxt-link>
            </div>
          </div>
        </div>
      </main>
      <!-- <related-blogs></related-blogs> -->
    </div>
  </template>
  <template v-if="error">
    <not-found></not-found>
  </template>
</main>
</template>

<script>
// Plugins
import { Axios } from '~/plugins/axios'
import size from 'lodash/size'
import forEach from 'lodash/forEach'
import SunCalc from 'suncalc'

// Components
import notFound from './../404/index.vue'
import socialShare from './../../components/social-share.vue'
import relatedBlogs from './../../components/related-blogs.vue'

export default {
  async asyncData ({ params, error, payload, redirect, isServer, isClient }) {
    const data = await Axios.get('https://blog.eli5.io/wp-json/wp/v2/posts?slug=' + params.slug)
    return { post: data.data[0] }
  },
  mixins:[
    require("vue-mixins/onWindowScroll")
  ],
  components: {
    notFound,
    socialShare,
    relatedBlogs
  },
	data () {
		return {
      post: {
        author: {}
      },
      loading: true,
      error: false,
      highlighted: false,
      interval: null,
      hideScroll: false,
      footer: null,
      location: '',
      night: false
		}
	},
  watch: {
    '$route': 'fetchData'
  },
  computed: {
    isMobile () {
      return this.$store.getters.isMobile
    },
    isNight () {
      return (new Date() >= SunCalc.getTimes(new Date(), 52.132633, 5.291266).sunset && new Date() <= SunCalc.getTimes(new Date(), 52.132633, 5.291266).sunrise)
    }
  },
  head () {
    return {
      meta: [
        { name: 'application-name', content: 'Eli5' },
        // { name: 'description', content:  this.post.seo_title, id: 'desc' },
        // OG
        { name: 'og:type', content: "Blog" },
        { name: 'og:site_name', content: "Eli5" },
        // { name: 'og:image', content: this.post.main_image },
        { name: 'og:url', content: this.location },
        // { name: 'og:description', content: this.post.seo_description },
        // { name: 'article:author', content: this.post.author.display_name },
        // { name: 'og:title', content: this.post.seo_title + '| Eli5' },
        // Title
        { name: 'twitter:site', content: "Eli5" },
        // { name: 'twitter:image', content: this.post.main_image },
        // { name: 'twitter:title', content: this.post.seo_title }
      ]
    }
  },
  mounted () {
    this.location = window.location.href
    this.$events.emit('whiteNav')

    this.onWindowScroll(() => {
      this.watchScroll()
    })
    this.loading = false
    this.footer = document.getElementById('blog_preview')
    this.$nextTick(() => {
      this.nightTime()
    })
  },
  methods: {
    layoutSwitcher () {
      let toggle = this.$refs.toggle
      if (toggle.checked === true) {
        this.night = true
        if (typeof(Storage) !== "undefined") {
          localStorage.setItem("layout", this.night)
        }
      } else {
        this.night = false
        if (typeof(Storage) !== "undefined") {
          localStorage.setItem("layout", this.night)
        }
      }
    },
    getLayout () {
      if (typeof(Storage) !== "undefined") {
        let layout = JSON.parse(localStorage.getItem("layout"))
        let toggle = this.$refs.toggle
        if (layout === true) {
          this.night = true
          toggle.checked = true
        } else {
          this.night = false
          toggle.checked = false
        }
      }
    },
    nightTime () {
      if (typeof(Storage) !== "undefined") {
        let toggle = this.$refs.toggle
        let layout = JSON.parse(localStorage.getItem("layout"))
        if (this.isNight && layout === null) {
          this.night = true
          toggle.checked = true
        } else if (!this.isNight && layout === true) {
          this.night = true
          toggle.checked = true
        } else {
          this.night = false
          toggle.checked = false
        }
      }
    },
    watchScroll () {
      this.hideScroll = this.checkViewport(this.footer, -100)
    },
    prepareHighlight() {
      this.interval = setInterval(() => {
        if(this.highlighted) {
          clearInterval(this.interval)
        } else {
          this.highlight()
        }
      }, 50)
    },
    highlight () {
      let els = document.getElementsByClassName('EnlighterJSRAW')
      forEach(els, (el) => {
        if ((el.dataset.enlighterLanguage === 'raw' || el.tagName == 'CODE') && el.enlight) {
          this.highlighted = true
          el.enlight({
            language: el.dataset.enlighterLanguage,
            theme: 'git',
            renderer: 'Inline',
            indent: 2,
            infoButton: false
          });
        } else if (el.enlight) {
          this.highlighted = true
          el.enlight({
            language: el.dataset.enlighterLanguage,
            theme: 'git',
            renderer: 'Block',
            indent: 2,
            infoButton: false
          });
        }
      });
    },
    // fetchData () {
    //   this.loading = true
    //   Axios.get('https://blog.eli5.io/wp-json/wp/v2/posts?slug=' + this.$route.params.slug).then((response) => {
    //     this.setData(response)
    //   }, (response) => {
    //     console.error(response)
    //     this.error = true
    //   })
    // },
    // setData (response) {
    //   // If post is found
    //   if (size(response.data) > 0) {
    //     this.post = response.data
    //     this.$emit('updateHead')

    //     this.loading = false
    //     this.$nextTick(() => {
    //       this.$events.emit('endTransition')
    //       this.$emit('updateHead')
    //       this.prepareHighlight()
    //       this.$events.emit('whiteNav')
    //       this.getLayout()
    //       this.nightTime()
    //     })
    //   } else {
    //     this.error = true
    //   }
    // },
    getImage (name) {
      switch(name) {
        case 'Kishan':
          return '//cdn.prod1.eli5.io/img/author/Kishan.jpg'
        case 'Fabian':
          return '//cdn.prod1.eli5.io/img/author/Fabian.jpg'
        case 'Wesley':
          return '//cdn.prod1.eli5.io/img/author/Wesley.jpg'
        case 'Andre':
          return '//cdn.prod1.eli5.io/img/author/Andre.jpg'
        case 'Federico':
          return '//cdn.prod1.eli5.io/img/author/Federico.jpg'
        case 'Jelle':
          return '//cdn.prod1.eli5.io/img/author/Jelle.jpg'
        case 'Sem':
          return '//cdn.prod1.eli5.io/img/author/Sem.jpg'
        case 'Rinke':
          return '//cdn.prod1.eli5.io/img/author/Rinke.jpg'
        case 'Louis':
          return '//cdn.prod1.eli5.io/img/author/Louis.jpg'
        case 'Laura':
          return '//cdn.prod1.eli5.io/img/author/Laura.jpg'
        case 'Sofie':
          return '//cdn.prod1.eli5.io/img/author/Sofie.jpg'
        case 'admin':
          return '//cdn.prod1.eli5.io/img/author/Wesley.jpg'
        default:
          return '//cdn.prod1.eli5.io/img/author/Wesley.jpg'
      }
    },
    nl2br (str, is_xhtml) {
        let breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
    },
    checkViewport (el, offset) {
      offset = offset ? offset : 0
      if(el) {
        let rect = el.getBoundingClientRect()
        return rect.bottom > 0
          && rect.right > 0
          && (rect.top + offset) < (window.innerHeight || document.documentElement.clientHeight)
          && rect.left < (window.innerWidth || document.documentElement.clientWidth)
      } else {
        return false
      }
    }
  },
}
</script>