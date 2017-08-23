<template>
<aside id="social" ref="wrapper" :class="{ 'hide-social': hide }">
	<div class="social-buttons" >
			<button @click="twitter()"><img src="//cdn.prod1.eli5.io/img/social/outline/twitter.svg" alt="twitter" /></button>
			<button @click="facebook()"><img src="//cdn.prod1.eli5.io/img/social/outline/facebook.svg" alt="Facebook" /></button>
			<button @click="linkedin()"><img src="//cdn.prod1.eli5.io/img/social/outline/linkedin.svg" alt="Linkedin" /></button>
	</div>
</aside>
</template>

<script>
export default {
  mixins:[
    require("vue-mixins/onWindowScroll"),
  ],
  props: ['title', 'content'],
  data () {
    return {
    	// Social data
      url: '',
      links: {
        facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
        twitter: 'https://twitter.com/intent/tweet?&via=',
        linkedin: 'https://www.linkedin.com/shareArticle?mini=true&url='
      },
      hide: false
    }
  },
  computed: {
    isMobile () {
      return this.$store.getters.isMobile
    }
  },
  mounted () {
    // Set scroll listeren
    this.url = window.location.href
    this.onWindowScroll(() => {
      this.watchScroll()
    })
  },
  methods: {
    watchScroll () {

      // Check for footer to hide scroller
      let footers = document.getElementsByTagName('footer')
      this.hide = this.checkViewport(footers[0], -100)

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
    },
  	// Share methods
    facebook () {
      let url = window.open()
      url.opener = null
      url.open(this.links.facebook + this.url, '_blank')
    },
    linkedin () {
      let url = window.open()
      url.opener = null
      url.open(this.links.linkedin + this.url, '_blank')
    },
    twitter () {
      let url = window.open()
      url.opener = null
      url.open(this.links.twitter + this.url, '_blank')
    }
  }
}
</script>