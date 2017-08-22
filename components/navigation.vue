<template>
	<div class="headroom" ref="navigation">
		<nav class="navigation" :class="{ 'navigation--scrolled': scrolled }">
			<nuxt-link to="/" class="logo">
				<svg viewBox="0 0 366 156" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				  <title>Eli 5</title>
		      <g id="Logo-1" transform="translate(0.073171, 0.951220)">
		          <polygon id="Fill-1" points="136.061838 154.661247 166.171471 154.661247 166.171471 0.120719389 136.061838 0.120719389"></polygon>
		          <polygon id="Fill-2" points="198.609263 154.783198 228.718896 154.783198 228.718896 46.9179601 198.609263 46.9179601"></polygon>
		          <path d="M213.664819,0.000246366099 C205.316704,0.000246366099 198.549027,6.76792313 198.549027,15.1160384 C198.549027,23.4641537 205.316704,30.2318305 213.664819,30.2318305 C222.011702,30.2318305 228.780611,23.4641537 228.780611,15.1160384 C228.780611,6.76792313 222.011702,0.000246366099 213.664819,0.000246366099" id="Fill-3"></path>
		          <polygon id="Fill-5" points="0 0.121212121 0 124.552106 0 154.661739 87.6706085 154.661739 87.6706085 154.661739 103.362897 154.661739 103.362897 124.552106 30.1096329 124.552106 30.1096329 92.5072678 103.362897 92.5072678 103.362897 62.3964031 30.1096329 62.3964031 30.1096329 30.230845 103.362897 30.230845 103.362897 0.121212121 30.1096329 0.121212121"></polygon>
		          <path d="M348.879897,30.2528948 L364.573417,30.2528948 L364.573417,0.143261887 L348.879897,0.143261887 L291.320153,0.143261887 L261.21052,0.143261887 L261.21052,30.2528948 L291.320153,30.2528948 L348.879897,30.2528948 Z M318.275437,61.2706332 C318.126386,61.2706332 317.979798,61.286647 317.829515,61.2878788 L317.829515,61.2706332 L291.320522,61.2706332 L291.320522,30.2531412 L261.210889,30.2531412 L261.210889,61.2706332 L261.189948,61.2706332 L261.189948,91.5317812 L274.52205,91.5317812 L317.829515,91.5317812 L318.138704,91.5317812 C318.184282,91.5305494 318.22986,91.5243902 318.275437,91.5243902 C318.323479,91.5243902 318.367825,91.5305494 318.414634,91.5317812 L318.728751,91.5317812 L318.728751,91.547795 C327.63119,91.7892338 334.778271,99.0656566 334.778271,108.027223 C334.778271,116.987559 327.63119,124.265213 318.728751,124.506652 L318.728751,124.522666 L318.420793,124.522666 C318.372752,124.522666 318.324711,124.530057 318.275437,124.530057 L274.52205,124.522666 C274.523282,124.522666 274.523282,124.522666 274.523282,124.523898 L261.189948,124.522666 L261.189948,154.783814 L317.829515,154.783814 L317.829515,154.765336 C317.979798,154.766568 318.126386,154.782582 318.275437,154.782582 C344.0983,154.782582 365.032028,133.848854 365.032028,108.027223 C365.032028,82.2043607 344.0983,61.2706332 318.275437,61.2706332 Z" id="Combined-Shape"></path>
		      </g>
				</svg>
			</nuxt-link>
			<template v-if="!isMobile">
				<transition mode="out-in" name="contact">
					<ul v-if="!contact" key="menu">
						<animate-link>
							<nuxt-link :to="{ name: 'work' }"  exact>
								our work
								<span></span>
							</nuxt-link>
						</animate-link>
						<animate-link>
							<nuxt-link :to="{ name: 'about' }"  exact>
								About us
								<span></span>
							</nuxt-link>
						</animate-link>
						<animate-link>
							<nuxt-link :to="{ name: 'blog' }"  exact>
								Blog
								<span></span>
							</nuxt-link>
						</animate-link>
						<animate-link>
							<nuxt-link :to="{ name: 'careers' }"  exact>
								Careers
								<span></span>
							</nuxt-link>
						</animate-link>
						<animate-link>
							<a href="" @click.stop.prevent="openContact" :class="{ 'active': contact }">
								Contact
								<span></span>
							</a>
						</animate-link>
					</ul>
					<ul v-else key="contact">
						<animate-link>
							<a href="tel:+31202612527">
								call us on +31 20 261 25 27
								<span></span>
							</a>
						</animate-link>
						<animate-link>
							<a href="mailto:hello@eli5.io">
								email on hello@eli5.io
								<span></span>
							</a>
						</animate-link>
						<animate-link>
							<a href="" @click.stop.prevent="closeContact" :class="{ 'active': !contact }">
								menu
								<span></span>
							</a>
						</animate-link>
					</ul>
				</transition>
			</template>
		</nav>
	</div>
</template>

<script>
// Plugins
import throttle from 'lodash/throttle'
// Components
import animateLink from './link.vue'

export default {
	mixins:[
    require("vue-mixins/onWindowScroll")
  ],
	data () {
		return {
			fixed: false,
			contact: false,
			mobileOpen: false,
			headroom: null,
			scrolled: false,
			Headroom: null
		}
	},
	components: {
		animateLink
	},
	mounted () {
		this.Headroom = window.headroom
		this.setHeadroom()
		this.watchScroll()
	},
	computed: {
    isMobile () {
      return this.$store.getters.isMobile
    }
  },
	methods: {
		setHeadroom () {
			var Headroom = this.Headroom
			this.headroom = new Headroom(this.$refs.navigation, {
		  	offset: 100,
		  	tolerance: 5,
		  	classes: {
		    	initial: 'animated',
		    	pinned: 'slideDown',
		    	unpinned: 'slideUp'
		  	}
			});
			this.headroom.init();
		},
		goToHome () {
			this.$router.push({ name: '/', query: { black: true } })
		},
		watchScroll () {
			this.checkScrollOffset()
		},
		checkScrollOffset () {
			if (document.getElementById('scroll-indicator')) {
				if(!this.isMobile) {
					if (document.getElementById('scroll-indicator').getBoundingClientRect().top <= 0) {
						this.scrolled = true
					} else {
						this.scrolled = false
					}
				} else {
					if (window.pageYOffset > 250) {
						this.scrolled = true
					} else {
						this.scrolled = false
					}
				}
			} else {
				this.scrolled = true
			}
		},
		openContact () {
			this.contact = true
		},
		closeContact () {
			this.contact = false
		},
		// Mobile
		toggleMobileMenu () {
			this.mobileOpen = !this.mobileOpen
		}
	}
}
</script>