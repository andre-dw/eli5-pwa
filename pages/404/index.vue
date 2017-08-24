<template>
<div id="not-found" class="background_stars" v-once>
	<div class="stars"></div>
	<div class="stars"></div>
	<div class="stars"></div>
	<header>
		<div class="content">
			<h1 v-text="title"></h1>
			<h2 v-text="subTitle"></h2>
			<img src="//cdn.prod1.eli5.io/img/fifa.gif" alt="fifa" />
		</div>
	</header>
</div>
</template>

<script>
export default {
	data () {
		return {
			title: '404',
			subTitle: 'page not found!'
		}
	},
	head: {
    title: {
      inner: '404 page not found.'
    },
    // Meta tags
    meta: [
      { name: 'application-name', content: 'Eli5' },
      { name: 'description', content: 'We create cutting edge digital experiences by combining strategy, technology and design.', id: 'desc' } // id to replace intead of create element
    ],
  },
  mounted () {
		this.$events.emit('endTransition')
		this.$events.emit('blackNav')
	},
  destroyed () {
    // this.$events.emit('whiteNav')
  }
}
</script>