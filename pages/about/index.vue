<template>
<main id="about" class="background_grey">
  <slot></slot>
  <top-header :image="about.image">
    <!-- SLOT -->
    <h1 v-html="about.title" data-aos="fade-up"></h1>
    <p v-html="about.content" data-aos="fade-up"></p>
  </top-header>
  <!-- Check for navigation to change color -->
  <div id="scroll-indicator"></div>
  <div class="container-fluid background_grey padding_big what-we-do-section">
    <div class="container padding_big">
      <div class="col-xxs-12 col-xs-12 col-sm-10 col-sm-offset-1 col-md-offset-2 col-md-8">
        <h2 v-html="what_we_do.title" data-aos="fade-up"></h2>
        <template v-for="(text, index) in what_we_do.paragraphs">
          <p v-html="text" data-aos="fade-up"></p>
          <img data-aos="fade-up" v-if="index == 0 && isMobile" :src="what_we_do.img.mobile" :alt="what_we_do.img.alt" />
          <img data-aos="fade-up" v-else-if="index == (what_we_do.paragraphs.length - 1) && !isMobile" :src="what_we_do.img.desktop"  :alt="what_we_do.img.alt" />
        </template>
      </div>
    </div>
  </div>
  <div class="container-fluid background_grey padding_big about-section">
    <div class="container padding_big">
      <div class="col-xxs-12 col-xs-12 col-sm-10 col-sm-offset-1 col-md-offset-2 col-md-8">
        <h2 v-html="we_are.title" data-aos="fade-up"></h2>
        <p v-for="text in we_are.paragraphs" v-html="text" data-aos="fade-up"></p>
      </div>
    </div>
  </div>
  <team></team>

  <clients></clients>

  <instafeed></instafeed>

  <div class="container-fluid contact-section">
    <div class="row">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6">
            <h2>{{ contact.title }}</h2>
            <p>{{ contact.description }}</p>
            <ul>
              <li v-for="{ id, type, name, email } in contact.people">
                <h4>{{ type }}</h4>
                <a :href="'mailto:' + email">{{ email }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
</template>

<script>
import topHeader from './partials/header.vue'
import team from './../../components/team.vue'
import clients from './../../components/clients.vue'
import instafeed from './../../components/instafeed.vue'

export default {
  components: {
    team,
    clients,
    topHeader,
    instafeed,
  },
  data () {
    return {
      scroll: {
        top: 'meet the team',
        bottom: 'to the top!'
      },
      about: {
          title: 'We are a design driven tech team that solves problems. Fast.',
          content: 'Whereas big agencies may string you along on their year long ”journey”, we actually prioritise your product. Our lean and agile approach allows us to validate and build digital products within a few months. <br /><br />This is precisely where we make the difference. We are a team of ten designers, engineers, strategists, and growth hackers. We leave those endless meetings and research overkill to the big boring status quo, and we actually get to work.',
          image: '//cdn.prod1.eli5.io/img/pages/about/header.jpg'
      },
      what_we_do: {
        title: 'A lean approach that solves big problems.',
        paragraphs: [
          'Whether we are building a complete new product from scratch, or improving an existing product, we think before we build. That doesn’t mean that we do months of research before we actually start building. For our full product creation cycle we use a combination of Google Ventures’ Sprint method and Scrum.',
          'Sprint allows us to define and validate the product within a week, whereas Scrum is lightweight process framework for agile development that maximizes the productivity to get the job done in an efficient and high quality way.',
          'Our product creation cycle allows our multidisciplinary team to deliver rock solid, scalable, and viable digital products, saving our clients both time and money.',
        ],
        img: {
          desktop: '//cdn.prod1.eli5.io/img/pages/about/desktop/process.png',
          mobile: '//cdn.prod1.eli5.io/img/pages/about/mobile/process.png',
          alt: 'Approach'
        }
      },
      we_are: {
        title: 'Digital natives with a shared passion for making products that matter.',
        paragraphs: [
          'At Eli5 we believe that when you put your heart and soul into everything you do, great results will be the outcome. We’re passionate about health, mobility, community platforms, artificial intelligence, web- and mobile, chatbots, voice user interfaces, and having tons of fun together building the future of digital.'
        ]
      },
      contact: {
        title: 'Get in touch with us',
        description: 'If it’s about building an entirely new solution, improving your existing one, or giving your organisation a fresh new perspective on things, we can help you out.',
        people: [
          { id: 0, type: 'Design lead', name: 'Federico Gatto', email: 'federico@eli5.io' },
          { id: 1, type: 'Technical lead', name: 'Kishan Chamman', email: 'kishan@eli5.io' },
          // { id: 2, type: 'Training', name: 'Rinke Riezebos', email: 'rinke@eli5.io' },
          { id: 3, type: 'New projects', name: 'Laura Dechesne', email: 'laura@eli5.io' },
        ]
      },
      AOS: null
    }
  },
  watch: {
    scrolling () {
      if(this.scrolling) {
        disableScroll()
      } else {
        enableScroll()
      }
    }
  },
  computed: {
    isMobile () {
      return this.$store.getters.isMobile
    }
  },
  mounted () {
    this.$events.emit('whiteNav')
    this.AOS = window.AOS
    setTimeout(() => {
      this.AOS.refresh()
    }, 500)
  }
}
</script>
