<template>
 <main id="blog_page" class="content background_stars grey">
 	<div class="container blog-intro">
	 	<section class="col-xxs-12 col-sm-offset-2 col-sm-8 post">
	 		<h1 v-html="title"></h1>
	 		<p v-html="text"></p>
	 	</section>
 	</div>
	<section class="container padding_big post_wrapper">
		<post v-for="post in firstPosts" :post="post" :key="post.id"></post>
		<post v-for="post in extraPosts" :post="post" :key="post.id"></post>
	</section>
	<div ref="infinite"></div>
</main>
</template>

<script>
// Plugin Component
import { Axios } from '~/plugins/axios'
import drop from 'lodash/drop'
import slice from 'lodash/slice'
import debounce from 'lodash/debounce'

// Componentså
import post from './../../components/post.vue'
export default {
  mixins:[
    require("vue-mixins/onWindowScroll"),
  ],
	components: {
		post,
	},
	data () {
		return {
			title: 'We love to write about challenges we encounter, our experiences, or things we are just excited about.',
			text: 'When we overcome a technical challenge in a project, we are happy to share the solution with our peers. If we visit an inspiring talk somewhere, we are excited to put these thoughts on digital paper. When there is a new advance in tech, we’ll let you know right here.',
			posts: [],
			extra: 3,
			initPost: 3,
			complete: false,
		}
	},
  computed: {
		firstPosts () {
			return slice(this.posts, 0, this.initPost)
		},
		extraPosts () {
			let posts = drop(this.posts, 3)
			return slice(posts, 0, this.extra)
		},
  },
	created () {
    this.fetchData()
  },
  mounted () {
		this.onWindowScroll(() => {
			this.watchScroll()
		})
  },
	methods: {
		watchScroll: debounce(function () {
			if(this.checkViewport(this.$refs.infinite)) {
				this.onInfinite()
			}
		}, 500),
    fetchData () {
      Axios.get('https://blog.eli5.io/wp-json/wp/v2/posts').then((response) => {
        this.posts = response.data
      }, (response) => {
        console.error('error')
      })
    },
		onInfinite() {
			// Check if all posts are loaded
			if (this.posts && (this.extra + this.initPost) >= this.posts.length && !this.complete) {
				this.complete = true
				return
			}
			// Set extra post
      setTimeout(() => {
        this.extra = this.extra + 3
      }, 200)
    },
    checkViewport (el, offset) {
      offset = offset ? offset : 0
      if(el) {
        let rect = el.getBoundingClientRect()
        return rect.bottom > 0
          && rect.right > 0
          && (rect.top + offset) < (window.innerHeight || document.documentElement.clientHeight)
          && rect.left < (window.innerWidth || document.documentElement.clientWidth)
      } else {
        return false
      }
    }
	}
}
</script>