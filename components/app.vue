<template>
	<div id="web">
		<navigation></navigation>
		<slot></slot>
		<foot></foot>
    <foot-bottom></foot-bottom>
	</div>
</template>

<script>
// Plugin
import throttle from 'lodash/throttle'
import forEach from 'lodash/forEach'
// Components
import foot from './../components/footer.vue'
import footBottom from './../components/footer_bottom.vue'
import navigation from './../components/navigation.vue'
export default {
	mixins:[
    require("vue-mixins/onWindowScroll"),
    require("vue-mixins/onWindowResize"),
  ],
	data () {
		return {
			AOS: null,
			footer: null,
      hideScroll: false,
      aos: {}
		}
	},
  components: {
    navigation,
    footBottom,
    foot
  },
  computed: {
    key () {
      return this.$route.fullPath
    }
  },
  mounted () {
  	this.AOS = window.AOS

  	if(!window.matchMedia('(prefers-reduced-motion)').matches) {
      AOS.init({
        once: true,
        duration: 600,
      });
    }

    this.$store.dispatch('checkMobile')
    this.onWindowScroll(() => {
      this.watchScroll()
    })

    this.onWindowResize(() => {
      this.$store.dispatch('checkMobile')
    })

    this.footer = document.getElementsByTagName('footer')[0]
  },
  methods: {
    watchScroll: throttle(function () {
      this.hideScroll = this.checkViewport(this.footer, -100)
    }, 100),
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
    disableScroll () {
      let x = window.scrollX
      let y = window.scrollY
      window.onscroll = function(){window.scrollTo(x, y)}
    },
    enableScroll () {
      window.onscroll = function(){};
    }
  }
}
</script>