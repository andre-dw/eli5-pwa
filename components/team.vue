<template>
<div id="team" class="container-fluid background_grey">
	<template v-if="!isMobile">
		<div class="container max-width-container">
			<figure class="col-xs-12 col-sm-4 col-md-4" data-aos="fade-up" v-for="{ id, image, name, title } in team" :key="id">
				<img :src="image" :alt="name" />
				<figcaption>
					<h4 v-text="name"></h4>
				</figcaption>
			</figure>
		</div>
	</template>
	<template v-else>
		<div class="container-fluid" >
			<figure class="col-xs-12 col-sm-6 col-md-3 placeholder" >
				<img :src="placeholder.image" :alt="placeholder.name" />
				<figcaption>
					<h4 v-text="placeholder.name"></h4>
				</figcaption>
			</figure>
			<v-touch v-on:swipeleft="next" v-on:swiperight="prev" v-bind:swipe-options="{ direction: 'horizontal' }">
				<figure class="col-xs-12 col-sm-4 col-md-3" 
								v-for="({ id, image, name }, index) in team"
								:key="id"
								:style="{ transform: 'translateX(' + ((index - mobile.current) * 100) + '%)' }"
					>
					<img :src="image" :alt="name" />
					<figcaption :class="{ 'hidden-fig': index != mobile.current }">
						<h4 v-text="name"></h4>
					</figcaption>
				</figure>
			</v-touch>
		</div>
	</template>
	<div class="navigation" v-if="isMobile">
		<button @click="prev" :class="{ 'disabled': mobile.current == 0 }">
			<img src="//cdn.prod1.eli5.io/img/icons/black/arrow-left.svg" alt="arrow left">
		</button>
		<button @click="next" :class="{ 'disabled': mobile.current >= total }">
			<img src="//cdn.prod1.eli5.io/img/icons/black/arrow-right.svg" alt="arrow right">
		</button>
	</div>
</div>
</template>

<script>
import size from 'lodash/size'
export default {
	data () {
		return {
			team: [
				{
					id: 0,
					image: '//cdn.prod1.eli5.io/img/components/team/Andre-De-Waard.jpg',
					name: 'André de Waard',
					title: 'Lead Front-end Development',
				},
				{
					id: 1,
					image: '//cdn.prod1.eli5.io/img/components/team/Laura-Dechesne.jpg',
					name: 'Laura Dechesne',
					title: 'New business',
				},
				{
					id: 2,
					image: '//cdn.prod1.eli5.io/img/components/team/Federico-Gatto.jpg',
					name: 'Federico Gatto',
					title: 'UX UI Designer',
				},
				{
					id: 3,
					image: '//cdn.prod1.eli5.io/img/components/team/Wesley-Botman.jpg',
					name: 'Wesley Botman',
					title: 'Lead Design',
				},
				{
					id: 4,
					image: '//cdn.prod1.eli5.io/img/components/team/Kishan-Chamman.jpg',
					name: 'Kishan Chamman',
					title: 'Lead Back-end Development',
				},
				{
					id: 5,
					image: '//cdn.prod1.eli5.io/img/components/team/Rinke-Riezebos.jpg',
					name: 'Rinke Riezebos',
					title: 'Lead Back-end Development',
				},
				{
					id: 6,
					image: '//cdn.prod1.eli5.io/img/components/team/Sem-Bakkum.jpg',
					name: 'Sem Bakkum',
					title: 'Frontend Developer',
				},
				{
					id: 7,
					image: '//cdn.prod1.eli5.io/img/components/team/Lauren-Macpherson.jpg',
					name: 'Lauren Macpherson',
					title: 'Content manager',
				},
				{
					id: 8,
					image: '//cdn.prod1.eli5.io/img/components/team/Jelle-Bot.jpg',
					name: 'Jelle Bot',
					title: 'UI and Motion Graphic designer',
				}
			],
			mobile: {
				current: 0
			}
		}
	},
	computed: {
		placeholder () {
			return this.team[0]
		},
		isMobile () {
			return this.$store.getters.isMobile
		},
		total () {
			return size(this.team) - 1
		}
	},
	methods: {
		next () {
			if(this.mobile.current < this.total) {
				this.mobile.current++
			}
		},
		prev () {
			if(this.mobile.current > 0) {
				this.mobile.current--
			}
		},
	}
}
</script>