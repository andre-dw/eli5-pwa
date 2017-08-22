<template>
<footer class="bottom">
  <div class="container">
  	<div class="col-xxs-6 col-xs-6 col-sm-6 col-md-2">
  		<h4>Topics</h4>
  		<nuxt-link v-for="topic in firstTopics" :to="{ name: 'landing', params: { slug: topic.post_name}}" :key="topic.id">{{ topic.footer_title }}</nuxt-link>
  	</div>
  	<div class="col-xxs-6 col-xs-6 col-sm-6 col-md-2">
  		<h4 class="opacity0">Topics</h4>
  		<nuxt-link v-for="topic in secondTopics" :to="{ name: 'landing', params: { slug: topic.post_name}}" :key="topic.id">{{ topic.footer_title }}</nuxt-link>
  	</div>
  	<div class="clearfix visible-xs visible-sm"></div>
  	<div class="col-xxs-6 col-xs-6 col-sm-6 col-md-2">
  		<h4>Work @ Eli5</h4>
  		<nuxt-link v-for="career in careers" :to="{ name: 'careers', params: { slug: career.slug }}" :key="career.slug">{{ career.title }}</nuxt-link>
  	</div>
  	<div class="col-xxs-6 col-xs-6 col-sm-6 col-md-2">
      <h4>Partners &amp; products</h4>
      <a href="https://www.theofficeservice.com" rel="noopener" title="The Office Service" target="_blank">The Office Service</a>
      <a href="https://www.mobypark.com" rel="noopener" title="Mobypark" target="_blank">Mobypark</a>
      <a href="https://www.rewear.co" rel="noopener" title="Rewear" target="_blank">Rewear</a>
      <a href="http://wundershift.com" rel="noopener" title="Wundershift" target="_blank">Wundershift</a>
      <a href="http://www.monty-amsterdam.nl" rel="noopener" title="Monty Amsterdam" target="_blank">Monty</a>
  	</div>
  </div>
</footer>
</template>

<script>
// import { Api } from '~/plugins/axios'
import chunk from 'lodash/chunk'
import size from 'lodash/size'
export default {
	data () {
		return {
			topics: [],
			partners: []
		}
	},
	computed: {
    careers () {
    	return this.$store.getters['careers/careers']
    },
    firstTopics () {
      if(size(this.topics) > 1) {
        return chunk(this.topics, Math.round(this.topics.length / 2))[0]
      } else {
        return this.topics
      }
    },
    secondTopics () {
      if(size(this.topics) > 1) {
        return chunk(this.topics, Math.round(this.topics.length / 2))[1]
      } else {
        return []
      }
    }
  },
  created () {
    // this.fetchData()
  },
  methods: {
    fetchData () {
      Api.get('/api/landing-posts').then((response) => {
        this.topics = response.data
      }, (response) => {
        console.error(response)
      })
    },
  }
}
</script>