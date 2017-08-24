<template>
	<article class="col-xxs-12 col-sm-offset-2 col-sm-8 post" v-if="post">
		<nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug }}">
	    <figure ref="figure">
	      <img :src="post.main_image" :alt="post.post_title"/>
	    </figure>
	    <div class="post-meta">
				<h2 v-html="post.title.rendered"></h2>
				<span class="author">By {{ post.author.display_name }}</span>
				<nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug }}">
					read<img src="//cdn.prod1.eli5.io/img/icons/black/arrow-right.svg" alt="arrow right" />
				</nuxt-link>
			</div>
		</nuxt-link>
	</article>
</template>

<script>
export default {
	props: ['post'],
	computed: {
		isMobile () {
			return this.$store.getters.isMobile
		}
	},
	mounted () {
		this.setAnimation()
	},
  beforeDestroyed () {
    this.removeAnimation()
  },
	methods: {
		getImage (name) {
			switch(name) {
		    case 'Kishan':
	        return '//cdn.prod1.eli5.io/img/people/Kishan.jpg'
	      case 'Fabian':
	        return '//cdn.prod1.eli5.io/img/people/Fabian.jpg'
	      case 'Wesley':
	        return '//cdn.prod1.eli5.io/img/people/Wesley.jpg'
	      case 'Andre':
	        return '//cdn.prod1.eli5.io/img/people/Andre.jpg'
	      case 'Federico':
	        return '//cdn.prod1.eli5.io/img/people/Federico.jpg'
	      case 'Jelle':
	        return '//cdn.prod1.eli5.io/img/people/Jelle.jpg'
	      case 'Sem':
	        return '//cdn.prod1.eli5.io/img/people/Sem.jpg'
	      case 'Rinke':
	        return '//cdn.prod1.eli5.io/img/people/Rinke.jpg'
	     	case 'admin':
	        return '//cdn.prod1.eli5.io/img/people/Wesley.jpg'
		    default:
	        return '//cdn.prod1.eli5.io/img/people/Wesley.jpg'
			}
		},
    setAnimation () {
      if(!this.isMobile) {
        setTimeout(() => {
        	VanillaTilt.init(this.$refs.figure, tiltOptions);
        }, 500)
      }
    },
    removeAnimation () {
	   	VanillaTilt.destroy(this.$refs.figure);
    }
	}
}
</script>