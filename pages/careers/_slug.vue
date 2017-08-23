<template>
<main>
  <template v-if="!loading">
    <div id="career_section" class="background_stars grey section">
      <nuxt-link class="back_link" :class="{ 'hidden-link': hideScroll }" :to="{ name: 'careers' }">
        <img src="//cdn.prod1.eli5.io/img/icons/black/arrow-left.svg" alt="arrow left" />
        jobs
      </nuxt-link>
      <div class="container padding_big">
        <div class="row">
          <div class="col-xxs-12 col-xs-12 col-sm-10 col-sm-offset-1 col-md-offset-2 col-md-8">
            <h1 v-text="career.title"></h1>
          </div>
          <div class="col-xxs-12 col-xs-12 col-sm-12 col-md-offset-1 col-md-10 gif">
            <img :src="career.gif" :alt="career.title" />
          </div>
          <div class="col-xxs-12 col-xs-12 col-sm-10 col-sm-offset-1 col-md-offset-2 col-md-8 career-data">
            <p v-html="career.text"></p>
            <template v-for="section in career.sections">
              <h2 v-text="section.title"></h2>
              <ul>
                <li v-for="list_item in section.list">
                  {{ list_item }}
                </li>
              </ul>
            </template>
            <p v-if="career.last_text">{{ career.last_text }}</p>
            <h2 v-text="apply.title"></h2>
            <p>{{ apply.text }} <a :href="'mailto:' + apply.email + '?SUBJECT=' + career.title">{{ apply.email }}</a></p>
          </div>
        </div>
        <div class="row back-link visible-xs">
          <div class="col-xs-12">
            <nuxt-link :to="{ name: 'careers' }">
              <img src="//cdn.prod1.eli5.io/img/icons/black/arrow-left.svg" alt="arrow left" />
              jobs
            </nuxt-link>
          </div>
        </div>
      </div>
      <slot></slot>
    </div>
  </template>
  <template v-if="error">
    <not-found></not-found>
  </template>
</main>
</template>

<script>
// Components
import size from 'lodash/size'
import notFound from './../404/index.vue'

export default {
  mixins:[
    require("vue-mixins/onWindowScroll")
  ],
  components: {
    notFound
  },
  data () {
    return {
      career: {},
      error: false,
      loading: true,
      hideScroll: false,
      footer: null,
      apply: {
        title: 'Apply now',
        text: 'Send an email with your CV and motivation to',
        email: 'hello@eli5.io'
      }
    }
  },
  head: {
    // Meta tags
    meta () {
      return [
        { name: 'application-name', content: 'Eli5' },
        { name: 'description', content:  this.career.title, id: 'desc' },
        // OG
        { name: 'og:type', content: "Career" },
        { name: 'og:site_name', content: "Eli5" },
        { name: 'og:image', content: this.career.gif },
        { name: 'og:url', content: window.location.href },
        { name: 'og:description', content: this.career.title },
        { name: 'og:title', content: "Meet Eli5. Your digital production company, based in Amsterdam." },
        // Title
        { name: 'twitter:site', content: "Eli5" },
        { name: 'twitter:image', content: this.career.gif },
        { name: 'twitter:title', content: this.career.title }
      ]
    }
  },
  computed: {
    isMobile () {
      return this.$store.getters.isMobile
    },
  },
  watch: {
    '$route': 'setData'
  },
  mounted () {
    this.setData()
    this.$events.emit('whiteNav')
    this.onWindowScroll(() => {
      this.watchScroll()
    })
    this.$events.emit('endTransition')
    this.footer = document.getElementsByTagName('footer')[0]
  },
  methods: {
    watchScroll () {
      this.hideScroll = this.checkViewport(this.footer, -100)
    },
    setData () {
      this.loading = true
      let career = this.$store.getters['careers/bySlug'](this.$route.params.slug)
      if(size(career) >= 1) {
        this.error = false
        this.loading = false
        this.career = career
      } else {
        this.error = true
      }
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
  }
}
</script>
