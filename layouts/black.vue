<template>
  <div>
    <navigation></navigation>
    <app class="black"><nuxt /></app>
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

<style lang="scss">

  @import './../assets/sass/web/modules/variables';

  .black {
    #post_page {
      background-color: #11151c;

      .back_link {
        color: #f5f7e6;
      }

      #article {
        h1, h2, h3, h4, h5, h6, span, p, b, a, li, strong {
          color: #f5f7e6;
        }
      }
    }
  }

</style>