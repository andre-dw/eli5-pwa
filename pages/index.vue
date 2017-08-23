<template>
<main id="home" class="content ">
  <slot></slot>
  <header class="header">
    <div class="content">
      <h1>A design driven tech team</h1>
      <h2><vue-typer :text="subjects" :shuttle="true" erase-style="select-all"></vue-typer></h2>
      <nuxt-link :to="{ name: 'about' }">
        Learn more about us
        <img src="//cdn.prod1.eli5.io/img/icons/purple/arrow-right.svg" alt="arrow right" />
      </nuxt-link>
    </div>
  </header>

  <!-- Projects -->
  <div class="container projects">
    <div class="row">
      <div class="col-xs-12">
        <h2>Recent projects</h2>
      </div>
    </div>
  </div>
  <projects-overview :highlighted="true" ></projects-overview>
  <div class="container projects">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-4 link">
        <nuxt-link :to="{ name: 'work' }">
          See all projects<img src="//cdn.prod1.eli5.io/img/icons/purple/arrow-right.svg" alt="arrow right" />
        </nuxt-link>
      </div>
    </div>
  </div>

  <!-- Blog posts -->
  <new-posts></new-posts>

  <!-- Events -->
  <!-- <events></events> -->

  <!-- Cta overview -->
  <cta-overview></cta-overview>
</main>
</template>

<script>
import projectsOverview from './../components/projects.vue'
import newPosts from './../components/new-posts.vue'
import ctaOverview from './../components/cta.vue'

export default {
  components: {
    projectsOverview,
    newPosts,
    ctaOverview
  },
	// layout (context) {
	// 	console.log(context.route.query)
	// 	if (context.route.query && context.route.query.theme === 'black') {
	// 		return 'black'
	// 	}
	// 	return 'default'
 //  },
  data () {
  	return {
  		AOS: null,
  		events: [],
      subjects: [
        'that solves problems. Fast.',
        'that thinks before build.',
        'that embraces new technologies.',
        'that loves pindakaas. Seriously.',
      ],
  	}
  },
  computed: {
    isMobile () {
      return this.$store.getters.isMobile
    }
  },
  mounted () {
  	this.AOS = window.AOS
  	setTimeout(() => {
      AOS.refresh()
    }, 500)
  }
}
</script>