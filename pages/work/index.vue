<template>
<main id="projects" class="content ">
  <!-- Slot -->
  <slot></slot>
  <!-- Project preview -->
  <projects-overview></projects-overview>
</main>
</template>

<script>
import forEach from 'lodash/forEach'
import throttle from 'lodash/throttle'

import projectsOverview from './../../components/projects'
export default {
  components: {
    projectsOverview
  },
  mixins:[
    require("vue-mixins/onWindowScroll")
  ],
  data () {
    return {
    	AOS: null,
      // Projects
      projects: [],
      current: -1,
    }
  },
  computed: {
    isMobile () {
      return this.$store.getters.isMobile
    }
  },
  created () {
    this.projects = this.$store.getters['projects/projects'](false)
  },
  mounted () {
    this.AOS = window.AOS
    setTimeout(() => {
      this.AOS.refresh()
    }, 500)
    this.$events.emit('whiteNav')
  }
}
</script>
