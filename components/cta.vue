<template>
	<div class="cta-wrapper container-fluid">
		<article class="cta row">
			<section class="container cta-content">
				<header class="col-xs-12 cta-header">
					<h1>{{ head.title }}</h1>
					<h2>{{  head.subTitle }}</h2>
				</header>
				<template v-if="!isMobile">
					<div class="content-wrapper col-xs-12 col-sm-12 col-md-4" v-for="(cta, index) in options">
						<div class="content">
							<img :src="cta.icon" :alt="cta.alt">
							<p>{{ cta.content }}</p>
							<button v-if="index != 2" @click="toggleModal(index)">
								{{ cta.link }}
								<img src="//cdn.prod1.eli5.io/img/icons/purple/arrow-right.svg" alt="arrow">
							</button>
							<nuxt-link v-else :to="{ name: 'careers' }"  exact>
								{{ cta.link }}
								<img src="//cdn.prod1.eli5.io/img/icons/purple/arrow-right.svg" alt="arrow">
							</nuxt-link>
						</div>
					</div>
				</template>
				<template v-if="isMobile">
					<div class="content-wrapper col-xs-12 col-sm-12 col-md-4" v-for="(cta, index) in options">
						<div class="content-mobile">
							<button v-if="index != 2" @click="toggleModal(index)">
								<img class="icon" :src="cta.icon" :alt="cta.alt">
								{{ cta.contentMobile }}
								<img src="//cdn.prod1.eli5.io/img/icons/purple/arrow-right.svg" alt="arrow" class="arrow">
							</button>
							<nuxt-link v-else :to="{ name: 'careers' }"  exact>
								<img class="icon" :src="cta.icon" :alt="cta.alt">
								{{ cta.contentMobile }}
								<img src="//cdn.prod1.eli5.io/img/icons/purple/arrow-right.svg" alt="arrow" class="arrow">
							</nuxt-link>
						</div>
					</div>
				</template>
			</section>
		</article>
	</div>
</template>

<script>
export default {
	data () {
		return {
			head: {
				title: 'Hey!',
				subTitle: 'What can we do for you?'
			},
			options: [
				{
					icon: '/img/icons/rocket.png',
					alt: 'rocket',
					content: 'Got an idea? Everyone has one dream business project they’ve always wanted to try out. And we love a challenge...',
					contentMobile: 'Tell us about your idea',
					link: 'Tell us your idea'
				},
				{
					icon: '/img/icons/girl.png',
					alt: 'girl',
					content: 'Or maybe you just want to know if ‘Terminator’ could actually happen? We’re happy to answer any tech questions',
					contentMobile: 'Ask our tech wizards a question',
					link: 'Ask us anything'
				},
				{
					icon: '/img/icons/computer_guy.png',
					alt: 'computer guy',
					content: 'Careers? We’re always seeking talented people who like to drink beers on a Friday',
					contentMobile: 'Work with us',
					link: 'We’d love to know more about you'
				}
			],
			newProject: {
				head: {
					title: 'Tell us more about your idea',
					subTitle: 'And let\'s make it happen!'
				},
        name: {
          label: 'Your Name',
          placeholder: 'Introduce yourself'
        },
        email: {
          label: 'Your Email',
          placeholder: 'So we can reply to you'
        },
        phonenumber: {
          label: 'Your phone number (not mandatory)',
          placeholder: 'So we can reach you '
        },
        description: {
          label: 'Tell us about your project',
          placeholder: 'Unleash your creativity, maybe you’re the new Zuckerberg…'
        },
        submit: 'Let\'s go!'
      },
      question: {
      	head: {
      		title: 'Our tech wizards are here to help',
					subTitle: 'What would you like to know?'
      	},
      	name: {
          label: 'Your Name',
          placeholder: 'Introduce yourself'
        },
        email: {
          label: 'Your Email',
          placeholder: 'So we can reply to you'
        },
        phonenumber: {
          label: 'Your phone number (not mandatory)',
          placeholder: 'So we can reach you '
        },
        question: {
          label: 'What do you want to ask us?',
          placeholder: 'The geekier the better...'
        },
        submit: 'Let\'s go!'
      }
		}
	},
	computed: {
    isMobile () {
      return this.$store.getters.isMobile
    }
  },
	methods: {
		toggleModal (index) {
			if(index == 0) {
				this.newProject.project = true
				this.$events.fire('toggleProject', this.newProject)
			} else {
				this.question.hi = true
				this.$events.fire('toggleQuestion', this.question)
			}
		}
	}
}
</script>