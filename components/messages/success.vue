<template>
	<div class="col-xs-12 col-sm-12 success-message-wrapper">
		<section class="success-message-container">
			<img src="~/assets/img/icons/messages/succes.svg" alt="success">
			<h2 class="success-message-title">{{ message.title }}</h2>
			<p class="success-message-content">{{ message.content }}</p>
		</section>
	</div>
</template>

<script>

export default {
	props: ['success'],
	data () {
		return {
			message: {}
		}
	},
	created () {
		this.message = this.success
	}
}
</script>