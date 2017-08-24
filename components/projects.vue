<template>
  <div class="container projects">
    <div class="row project" v-for="(project, index) in projects" >
      <div class="col-xs-12 col-sm-6 project-image-wrapper" :data-aos="getImageAnimation(index)">
        <div class="project-image" :class="{ 'even': isEven(index) }" :style="{ backgroundImage: 'url(' + project.header.preview_image + ')' }"></div>
      </div>
      <div class="col-xs-12 col-sm-6 project-details-wrapper">
        <div class="project-details" :class="{ 'even': isEven(index) }" :data-aos="getTextAnimation(index)">
          <h2>{{ project.header.title }}</h2>
          <p class="category">{{ project.header.category }}</p>
          <p>{{ project.header.sub_title }}</p>
          <nuxt-link :to="{ name: 'work-slug', params: { slug: project.slug } }">See project<img src="//cdn.prod1.eli5.io/img/icons/purple/arrow-right.svg" alt="arrow right"></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    highlighted: {
      default: false
    }
  },
  computed: {
    projects () {
      return this.$store.getters['projects/projects'](this.highlighted)
    },
    isMobile () {
      return this.$store.getters.isMobile
    }
  },
  methods: {
    getTextAnimation (n) {
      if (this.isEven(n) && !this.isMobile) {
        return 'fade-left'
      } else {
        return 'fade-right'
      }
    },
    getImageAnimation (n) {
      if (this.isEven(n) && !this.isMobile) {
        return 'fade-right'
      } else {
        return 'fade-left'
      }
    },
    isEven (n) {
      n = Number(n);
      return n === 0 || !!(n && !(n%2));
    }
  }
}
</script>