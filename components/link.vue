<template>
	<li class="link" @mouseenter="line = true" :class="{ 'animate': line }">
		<slot></slot>
	</li>
</template>

<script>
export default {
	data () {
		return {
			line: false
		}
	},
	watch: {
		line (val) {
			if (val) {
				setTimeout(() => {
					this.line = false
				}, 600)
			}
		}
	}
}
</script>