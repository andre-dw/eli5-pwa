<template>
<div class="container-fluid new-posts">
	<div class="row">
		<div class="container">
			<div class="row" v-for="(post, index) in showPosts">
				<div class="col-xs-12 col-sm-4" v-if="index === 0">
					<h2>Latest blogs</h2>
				</div>
				<div class="hidden-xs col-sm-4" v-else></div>
				<div class="col-xs-12 col-sm-8">
					<div class="post-preview" data-aos="fade-left">
						<p class="date">{{ post.date | moment('MMMM DD') }}</p>
						<h3 v-html="post.title.rendered"></h3>
						<nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug } }">
							Read more<img src="//cdn.prod1.eli5.io/img/icons/purple/arrow-right.svg" alt="arrow right" />
						</nuxt-link>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-8 col-sm-offset-4 link">
					<nuxt-link :to="{ name: 'blog' }">
						See all posts<img src="//cdn.prod1.eli5.io/img/icons/purple/arrow-right.svg" alt="arrow right" />
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import { Axios } from '~/plugins/axios'
import slice from 'lodash/slice'
export default {
	data () {
		return {
			posts: [],
			AOS: null
		}
	},
	computed: {
		showPosts () {
			return slice(this.posts, 0, 3)
		}
	},
	mounted () {
		this.AOS = window.AOS
		this.fetchData()
	},
	methods: {
		fetchData () {
			Axios.get('https://blog.eli5.io/wp-json/wp/v2/posts?per_page=3').then((response) => {
        this.posts = response.data
				this.$nextTick(() => {
					this.AOS.refresh()
				})
      }, (response) => {
        console.error('error')
      })
    },
	}
}
</script>