<template>
  <div>
    <app><nuxt/></app>
  </div>
</template>

<script>
// Component
import app from './../components/app.vue'

export default {
	transition: 'test',
  components: {
    app
  }
}
</script>