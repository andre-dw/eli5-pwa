<template>
	<div id="blog_preview" class="container-fluid">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-4 details">
					<h2>Other reads for you</h2>
					<button @click="prev" :class="{ 'disabled': current == 0 }">
						<img src="//cdn.prod1.eli5.io/img/icons/white/arrow-left.svg" alt="arrow left" />
					</button>
					<button @click="next" :class="{ 'disabled': current >= totalPosts }">
						<img src="//cdn.prod1.eli5.io/img/icons/white/arrow-right.svg" alt="arrow left" />
					</button>
				</div>
			</div>
			<div class="row card-wrapper">
				<a :href="post.url" class="card col-xs-12 col-sm-6" v-for="(post, index) in posts"  :key="post.id" :style="{ transform: 'translateX(' + getOffset(index) + '%)' }">
					<div class="image" :style="{ backgroundImage: 'url(' + post.main_image + ')' }" ref="card"></div>
					<h4 v-text="post.post_title"></h4>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import { Api } from '~/plugins/axios'
import size from 'lodash/size'
import forEach from 'lodash/forEach'
export default {
  mixins:[
    require("vue-mixins/getViewportSize")
  ],
	data () {
		return {
			current: 0,
			posts: []
		}
	},
	computed: {
		totalPosts () {
			return size(this.posts) - 1
		}
	},
	created () {
		this.fetchData()
	},
	methods: {
		fetchData () {

      Api.get(`/api/related-posts/${this.$route.params.slug}`).then((response) => {
        this.setData(response.data)
      }, (response) => {
        console.error('error')
      })
		},
		getOffset (index) {
			if(this.getViewportSize().width > 768) {
 				return (index - this.current) * 100
			} else {
				if(((index - this.current) * 100) == 0) {
					return ((index - this.current) * 100)
				} else {
					return ((index - this.current) * 110)
				}
			}
		},
		setData (posts) {
			this.posts = posts
			this.setAnimation()
		},
		next () {
			if(this.current < this.totalPosts) {
				this.current++
			}
		},
		prev () {
			if(this.current > 0) {
				this.current--
			}
		},
		setAnimation () {
      if(!this.isMobile) {
        setTimeout(() => {
        	let els = this.$refs.card
          forEach(els, (el) => {
            VanillaTilt.init(el, tiltOptions);
          })
        }, 500)
      }
    }
	}
}
</script>