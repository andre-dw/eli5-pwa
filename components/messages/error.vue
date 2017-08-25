<template>
	<div class="col-xs-12 col-sm-12 error-message-wrapper">
		<section class="error-message-container">
			<img src="~/assets/img/icons/messages/general.svg" alt="error">
			<h2 class="error-message-title" v-html="error.title"></h2>
			<p class="error-message-content" v-html="error.content"></p>
		</section>
	</div>
</template>

<script>

export default {
	props: ['error'],
	data () {
		return {
			message: {}
		}
	},
	created () {
		this.message = this.error
	}
}
</script>