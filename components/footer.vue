<template>
<footer class="container-fluid top">

	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-4">
				<h3>It’s time to uncomplicate things.</h3>
				<address>
					Eli5 BV<br />
					Weteringschans 106<br />
					1017XS Amsterdam<br />
					+31 20 261 25 27<br />
					hello@eli5.io<br />
				</address>
			</div>
		</div>
		<div class="row">
			<nav class="col-xs-12">
				<div class="social col-xs-12 col-sm-4">
					<a href="https://www.linkedin.com/company/eli5" target="_blank" rel="noopener"><img src="//cdn.prod1.eli5.io/img/social/black/linkedin.svg" alt="Linkedin Logo" /></a>
					<a href="https://www.instagram.com/eli5_amsterdam/" target="_blank" rel="noopener"><img src="//cdn.prod1.eli5.io/img/social/black/instagram.svg" alt="Instagram Logo" /></a>
			<!-- <a href="https://dribbble.com/Eli5"><img src="//cdn.prod1.eli5.io/img/Dribble.svg" alt="Dribble Logo" /></a> -->
				</div>
				<div class="links col-xs-12 col-sm-8">
					<ul>
						<li>
							<nuxt-link :to="{ name: 'work' }" >
								our work
								<span></span>
							</nuxt-link>
						</li>
<!-- 							<li>
								<nuxt-link :to="{ name: 'services' }" >
									What we do
									<span></span>
								</nuxt-link>
							</li> -->
							<li>
								<nuxt-link :to="{ name: 'about' }" >
									About us
									<span></span>
								</nuxt-link>
							</li>
							<li>
								<nuxt-link :to="{ name: 'blog' }" >
									Blog
									<span></span>
								</nuxt-link>
							</li>
							<li>
								<nuxt-link :to="{ name: 'careers' }" >
									Careers
									<span></span>
								</nuxt-link>
							</li>
					</ul>
				</div>
			</nav>
		</div>
	</div>
	<slot></slot>
</footer>
</template>

<script>
import animateLink from './link.vue'
export default {
	components: {
		animateLink
	}
}
</script>