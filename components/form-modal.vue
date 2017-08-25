<template>
	<article class="row new-project">
		<section class="new-project-content container">
			<header class="col-xs-12 new-project-header">
				<button class="close-button" @click="closeModal"><img src="~/assets/img/icons/close.svg"></button>
				<h1>{{ form.head.title }}</h1>
				<h2>{{ form.head.subTitle }}</h2>
			</header>

			<!-- Error/Success messages -->
			<transition name="fade" mode="in-out">
				<error-message :error="message.error" v-if="hasMyObject"></error-message>
			</transition>
			<!-- <transition name="fade" mode="in-out">
				<success-message :success="message.success" v-if="success"></success-message>
			</transition> -->

			<form class="col-xs-12 col-sm-12" id="contact_form" ref="contactForm">
				<p class="col-sm-12 col-md-4" :class="{ 'error': errors.name }">
					<label for="name">
						{{ form.name.label }}
						<input type="text" name="name" id="name" :placeholder="form.name.placeholder" v-model="formData.name" @keydown="deleteKey('name')" required>
						<span v-if="errors.name" v-for="(error, index) in errors.name">{{ error }}</span>
					</label>
				</p>
				<p class="col-sm-12 col-md-4" :class="{ 'error': errors.email }">
					<label for="email">
						{{ form.email.label }}
						<input type="email" name="email" id="email" :placeholder="form.email.placeholder" v-model="formData.email" @keydown="deleteKey('email')" required>
						<span v-if="errors.email" v-for="(error, index) in errors.email">{{ error }}</span>
					</label>
				</p>
				<p class="col-sm-12 col-md-4">
					<label for="phonenumber">
						{{ form.phonenumber.label }}
						<input type="text" name="phonenumber" id="phonenumber" :placeholder="form.phonenumber.placeholder" v-model="formData.phonenumber">
					</label>
				</p>
				<p class="col-sm-12" v-if="form.description" :class="{ 'error': errors.description }">
					<label for="description">
						{{ form.description.label }}
						<textarea name="description" id="description" :placeholder="form.description.placeholder" v-model="formData.description" @keydown="deleteKey('description')" required></textarea>
						<span v-if="errors.description" v-for="(error, index) in errors.description">{{ error }}</span>
					</label>
				</p>
				<p class="col-sm-12" v-if="form.question" :class="{ 'error': errors.question }">
					<label for="question">
						{{ form.question.label }}
						<textarea name="question" id="question" :placeholder="form.question.placeholder" v-model="formData.question" @keydown="deleteKey('question')" required></textarea>
						<span v-if="errors.question" v-for="(error, index) in errors.question">{{ error }}</span>
					</label>
				</p>
				<p class="col-xs-12">
					<button type="submit" @click.stop.prevent="sendForm" :class="{ 'disabled': loading, 'disabled': hasMyObject }">{{ form.submit }} <img v-if="!loading" src="~/assets/img/icons/purple/arrow-right.svg" alt="arrow"><div id="loader" v-if="loading"></div></button>
				</p>
			</form>
		</section>
	</article>
</template>

<script>
//Api
import { Api } from '~/plugins/axios'

//Errors
import errorMessage from './messages/error'
// import successMessage from './../messages/success'

export default {
	props: {
		data: {
			type: Object,
			required: false
		},
		type: {
			type: String,
			required: true
		}
	},
	data () {
		return {
			form: {},
			formData: {
				name: '',
				email: '',
				phonenumber: '',
				description: '',
				question: '',
				type: ''
			},
			errors: {},
			message: {
				error: {
					title: 'Oops, ',
					content: ' some info is missing...'
				},
				success: {
					title: 'Success!',
					content: 'Your request has been sent. You\'ll hear from us very soon'
				}
			},
			loading: false,
			success: false
		}
	},
	components: {
		errorMessage,
		// successMessage
	},
	watch: {
		success (val) {
			if(val) {
				setTimeout(() => {
					this.success = !val
				}, 5000)
			}
		}
	},
	computed: {
		canSend () {
			if(this.type) {
				return true
			}
			return false
		},
		hasMyObject () {
			return Object.keys(this.errors).length
		}
	},
	created () {
		this.form = this.data

		if(this.type) {
			this.formData.type = this.type
		}
	},
	methods: {
		deleteKey (key) {
			this.$delete(this.errors, key)
		},
		sendForm () {
			this.loading = true
			if(this.canSend) {
				Api.post('api/contact', this.formData).then(response => {
					this.success = response.data.success
					this.loading = false
					this.clearForm()
				}, error => {
					this.errors = error
					this.loading = false
				})
			}
		},
		closeModal () {
			this.$events.fire('closeNewProject')
		},
		clearForm () {
			this.formData.name = '',
			this.formData.email = '',
			this.formData.phonenumber = '',
			this.formData.description = '',
			this.formData.question = '',
			this.formData.type = ''
		}
	}
}
</script>