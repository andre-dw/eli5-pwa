<template>
<header class="container-fluid scroll-section">
	<div class="row">
		<div class="col-xs-12 col-sm-7 fixed-image"  :style="{ backgroundImage: 'url(' + image + ')' }"></div>
		<div class="col-xs-12 col-sm-5">
			<div class="section">
				<slot></slot>
			</div>
		</div>
	</div>
</header>
</template>

<script>
export default {
	props: ['image']
}
</script>