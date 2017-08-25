<template>
	<div>
		<transition name="fade">
	    <form-modal v-if="project" :data="newProject" :type="'description'"></form-modal>
	  </transition>
	  <transition name="fade">
	    <form-modal v-if="hi" :data="question" :type="'question'"></form-modal>
	  </transition>
	  <!-- <transition name="fade">
	    <comming-party v-if="comming"></comming-party>
	  </transition>
	  <transition name="fade">
	    <reason-party v-if="reason"></reason-party>
	  </transition>
	  <transition name="fade">
	    <no-party v-if="sorry"></no-party>
	  </transition> -->
	</div>
</template>

<script>
// Vue components
import formModal from './form-modal.vue'
// import commingParty from './pages/party/partials/comming'
// import noParty from './pages/party/partials/not-comming'
// import reasonParty from './pages/party/partials/reason'

export default {
	components: {
		formModal,
		// commingParty,
		// noParty,
		// reasonParty
	},
	data () {
		return {
			project: false,
	    hi: false,
	    newProject: {},
	    question: {},
	    comming: false,
	    reason: false,
	    sorry: false
		}
	},
	mounted () {
		this.$events.listen('toggleProject', data => {
      this.project = data.project
      this.newProject = data
      this.disableScroll()
    })
    this.$events.listen('toggleQuestion', data => {
      this.hi = data.hi
      this.question = data
      this.disableScroll()
    })

    this.$events.listen('closeNewProject', () => {
      this.project = false
      this.hi = false
      this.enableScroll()
    })

    this.$events.listen('comming', () => {
      this.comming = !this.comming
    })

    this.$events.listen('reason', () => {
      this.reason = !this.reason
    })

    this.$events.listen('sorry', () => {
      this.sorry = !this.sorry
    })
	},
	methods: {
		disableScroll () {
      let x = window.scrollX
      let y = window.scrollY
      window.onscroll = function(){window.scrollTo(x, y)}
    },
    enableScroll () {
      window.onscroll = function(){};
    }
	}
}
</script>