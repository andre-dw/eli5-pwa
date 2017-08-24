<template>
<div class="container-fluid background_grey padding_big clients">
	<section class="container ">
		<h2 class="clients-title col-xxs-12 col-xs-12 col-sm-10 col-sm-offset-1 col-md-offset-3 col-md-7" data-aos="fade-up" v-html="title"></h2>
		<figure v-for="client in visibleClients"
		        class="col-xxs-6 col-xs-6 col-sm-4 client"
		        data-aos="fade-up"
		        :key="client.id"
		>
			<img :src="client.logo" :alt="client.alt">
		</figure>
		<div class="clearfix"></div>
	</section>
  </div>
</template>

<script>

export default {
	data () {
		return {
			title: 'We work with companies we believe in, <br />and who believe in our method.',
			clients: [
				{
					id: 0,
					logo: '//cdn.prod1.eli5.io/img/components/clients/black/geberit.png',
					alt: 'Geberit'
				},
				{
					id: 1,
					logo: '//cdn.prod1.eli5.io/img/components/clients/black/monty.png',
					alt: 'Monty'
				},
				{
					id: 2,
					logo: '//cdn.prod1.eli5.io/img/components/clients/black/dunlop.png',
					alt: 'Dunlop'
				},
				{
					id: 3,
					logo: '//cdn.prod1.eli5.io/img/components/clients/black/nxp.png',
					alt: 'Npx'
				},
				{
					id: 4,
					logo: '//cdn.prod1.eli5.io/img/components/clients/black/mobypark.png',
					alt: 'Mobypark'
				},
				{
					id: 5,
					logo: '//cdn.prod1.eli5.io/img/components/clients/black/iemand.png',
					alt: 'Iemand.nl'
				},
				{
					id: 6,
					logo: '//cdn.prod1.eli5.io/img/components/clients/black/prid.png',
					alt: 'Public relations in design'
				},
				{
					id: 7,
					logo: '//cdn.prod1.eli5.io/img/components/clients/black/rai.png',
					alt: 'Rai Amsterdam'
				},
				{
					id: 8,
					logo: '//cdn.prod1.eli5.io/img/components/clients/black/sls.png',
					alt: 'Stichting lezen en schrijven'
				}
			],
			clientsMobile: [
				{
					id: 0,
					logo: '//cdn.prod1.eli5.io/img/components/clients/mobile/geberit.png',
					alt: 'Geberit'
				},
				{
					id: 1,
					logo: '//cdn.prod1.eli5.io/img/components/clients/mobile/monty.png',
					alt: 'Monty'
				},
				{
					id: 2,
					logo: '//cdn.prod1.eli5.io/img/components/clients/mobile/nxp.png',
					alt: 'NXP'
				},
				{
					id: 3,
					logo: '//cdn.prod1.eli5.io/img/components/clients/mobile/iemand.png',
					alt: 'iemand.nl'
				},
				{
					id: 4,
					logo: '//cdn.prod1.eli5.io/img/components/clients/mobile/dunlop.png',
					alt: 'Dunlop'
				},
				{
					id: 5,
					logo: '//cdn.prod1.eli5.io/img/components/clients/mobile/mobypark.png',
					alt: 'Mobypark'
				},
				{
					id: 6,
					logo: '//cdn.prod1.eli5.io/img/components/clients/mobile/sls.png',
					alt: 'Stichting lezen en schrijven'
				},
				{
					id: 7,
					logo: '//cdn.prod1.eli5.io/img/components/clients/mobile/jlg.png',
					alt: 'JLG Real Estate'
				}
			]
		}
	},
	computed: {
		visibleClients () {
			if(this.isMobile) {
				return this.clientsMobile
			} else {
				return this.clients
			}
		},
    isMobile () {
        return this.$store.getters.isMobile
    }
	}
}
</script>
