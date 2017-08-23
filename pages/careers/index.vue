<template>
<main>
  <div id="careers_section" class="background_grey section">
    <div class="container padding_big">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2">
          <h1 v-html="content.title"></h1>
          <p v-html="content.content"></p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2">
          <ul>
            <li v-for="career in careers" >
              <nuxt-link :to="{ name: 'careers-slug', params: { slug: career.slug }}">
                {{ career.title }}<span v-if="career.joke">{{ career.joke }}</span>

                <img :src="career.gif" alt="career.title" class="gif" v-if="career.gif"/>

                <img src="//cdn.prod1.eli5.io/img/icons/black/arrow-right.svg" alt="arrow right" class="black"/>
                <img src="//cdn.prod1.eli5.io/img/icons/white/arrow-right.svg" alt="arrow right" class="white"/>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <instafeed></instafeed>
</main>
</template>

<script>
import instafeed from './../../components/instafeed.vue'
export default {
  components: {
    instafeed
  },
  data () {
    return {
      content: {
        title: 'We’re looking for talent to build amazing things with.',
        content: 'We’re a design driven tech team that solves problems. Fast. We don’t do hierarchy, everyone’s ideas are on equal footing. Eli5 is situated in the city center of Amsterdam and was founded in 2012. Since then we\'re on a roll, working our way towards digital awesomeness. With a wide range of specialized knowledge and skills, we’re able to fulfill the many wishes of our clients. <br /><br />We’re always interested to talk to new people. At the moment we’re specifically looking for talent who feel called for the positions below to join our team in Amsterdam.'
      },
    }
  },
  computed: {
    isMobile () {
      return this.$store.getters.isMobile
    },
    careers () {
    	return this.$store.getters['careers/careers']
    }
  },
  mounted () {
  	this.$events.emit('whiteNav')
  	this.$events.emit('endTransition')
  },
  methods: {
  }
}
</script>
