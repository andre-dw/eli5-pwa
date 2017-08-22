<template>
  <div>
    <navigation></navigation>
    <app><nuxt /></app>
  </div>
</template>

<script>
  import app from './../components/app.vue'
  import navigation from './../components/navigation.vue'
  export default {
    components: {
      app,
      navigation
    }
  }
</script>
