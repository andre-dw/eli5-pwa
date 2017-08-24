<template>
<main id="project" >
	<header class="container-fluid" :style="{ backgroundImage: 'url(' + project.header.image + ')' }">
		<div class="row">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-4 project-content">
						<h1>{{ project.header.title }}</h1>
						<h2>{{ project.header.sub_title }}</h2>
					</div>
					<div class="device-image">
						<img :src="project.header.device_image">
					</div>
				</div>
			</div>
		</div>
		<router-link :to="{ name: 'work' }" class="back_link" :class="{ 'hidden-link': hideScroll }">
			<img src="//cdn.prod1.eli5.io/img/icons/white/arrow-left.svg" alt="Arrow left" />
			projects
		</router-link>
	</header>

  <!-- Check for navigation to change color -->
  <!-- <div id="scroll-indicator"></div> -->
	<article class="container-fluid">
		<slot></slot>
		<!-- Description -->
		<div class="container padding_medium intro">
			<div class="row">
				<div class="col-xs-12 col-sm-6 list hidden-xs">
					<div class="">
						<h4 data-aos="fade-up">{{ project.intro.list.title }}</h4>
						<ul>
							<li v-for="item in project.intro.list.items" data-aos="fade-up">{{ item }}</li>
						</ul>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6">
					<h2 data-aos="fade-up">{{ project.intro.title }}</h2>
					<p data-aos="fade-up" v-html="project.intro.description"></p>
				</div>
			</div>
		</div>

		<!-- Sections -->
		<div class="container">
			<section v-for="section in project.sections" :key="section.id" class="row padding_small">

				<!-- Text sections -->
				<template v-if="section.type == 'text'">
					<div class="col-xs-12 col-sm-6">
						<h3 data-aos="fade-up">{{ section.title }}</h3>
						<p data-aos="fade-up">{{ section.text }}</p>
					</div>
				</template>

				<!-- Image section -->
				<template v-else>
					<div class="col-xs-12">
						<img :src="section.image" :alt="section.alt" data-aos="fade-up" />
					</div>
				</template>
			</section>
		</div>
		<div class="container made-by">
			<div class="row">
				<div class="col-xs-12 col-sm-8 col-sm-offset-2">
					<h3>{{ madeBy.title }}</h3>
					<p v-html="madeBy.text"></p>
					<router-link :to="{ name: 'work' }" class="link">
						<img src="//cdn.prod1.eli5.io/img/icons/black/arrow-left.svg" alt="Arrow left" />
						projects
					</router-link>
				</div>
			</div>
		</div>
	</article>
</main>
</template>

<script>
import jump from 'jump.js'
import size from 'lodash/size'
import { store } from './../../store'

import { Api } from '~/plugins/axios'

export default {
  mixins:[
    require("vue-mixins/onWindowScroll")
  ],
  asyncData (context) {
  	const project = context.store.getters['projects/bySlug'](context.params.slug)
  	context
  	if (project) {
  		return { project: project }
  	} else {
  		context.redirect('/work')
  	}
  },
	data () {
		return {
			AOS: null,
			project: {},
			hideScroll: false,
      footer: null,
			madeBy: {
				title: 'Made with love by Eli5',
				text: 'When you put your heart and soul into everything you do, great results will be the outcome. <br />Want to get a project started? Send an email to <a href="mailto:hello@eli5.io">hello@eli5.io</a> or give us a call on <a href="tel:+31202612527">+31 20 261 2527</a>.',
				link_text: 'Projects'
			}
		}
	},
	created () {
    this.onWindowScroll(() => {
      this.watchScroll()
    })
  },
  mounted () {
  	this.AOS = window.AOS
  	this.$events.emit('endTransition')
    this.footer = document.getElementsByTagName('footer')[0]

    setTimeout(() => {
    	this.$events.$emit('watchScroll')
    }, 100)

    setTimeout(() => {
      AOS.refresh()
    }, 500)
  },
	beforeDestroy () {
		this.$events.off('goToHome', this.scrollUp)
	},
	methods: {
    watchScroll () {
      this.hideScroll = this.checkViewport(this.footer, -100)
    },
		scrollUp () {
			this.$router.push({ name: 'work' })
		},
		goBack () {
			this.$router.push({ name: 'work' })
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