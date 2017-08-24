<template>
<div id="feed"  class="container-fluid">
  <div class="container">
    <div class="row">
        <div class="col-xs-12 details">
          <h2 v-html="title"></h2>
          <button @click="prev" :class="{ 'disabled': current == 0 }">
            <img src="//cdn.prod1.eli5.io/img/icons/black/arrow-left.svg" alt="arrow left" />
          </button>
          <button @click="next" :class="{ 'disabled': current >= totalPosts }">
            <img src="//cdn.prod1.eli5.io/img/icons/black/arrow-right.svg" alt="arrow left" />
          </button>
        </div>
      </div>
      <div class="col-xs-12 col-sm-9">
        <div class="row posts">
          <v-touch v-on:swipeleft="next" v-on:swiperight="prev" v-bind:swipe-options="{ direction: 'horizontal' }">
            <div class="col-xs-10 col-sm-10 col-md-8 post placeholder">
              <img :src="placeholder.img" :alt="placeholder.alt" ref="photo" />
            </div>
            <div class="col-xs-10 col-sm-10 col-md-8 post"
                  v-for="(post, index) in posts"
                  :style="{ transform: 'translateX(' + ((index - current) * 100) + '%)' }"
                  :key="post.id"
                >
                <img :src="post.img" :alt="post.alt" ref="photo" />
            </div>
          </v-touch>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import size from 'lodash/size'
export default {
  mixins:[
    require("vue-mixins/onWindowResize")
  ],
  data () {
    return {
      current: 0,
      title: 'Pixels, code, post-it’s, <img src="//cdn.prod1.eli5.io/img/icons/beer.png" alt="Beer" />, and <img src="//cdn.prod1.eli5.io/img/icons/party.png" alt="Party" />. ',
      posts: [
        { id: 0, img: '//cdn.prod1.eli5.io/img/components/feed/0.jpg', alt: 'Team' },
        { id: 1, img: '//cdn.prod1.eli5.io/img/components/feed/1.jpg', alt: 'Sally meeting' },
        { id: 2, img: '//cdn.prod1.eli5.io/img/components/feed/2.jpg', alt: 'Group photo' },
        { id: 3, img: '//cdn.prod1.eli5.io/img/components/feed/3.jpg', alt: 'Andre programming' },
        { id: 4, img: '//cdn.prod1.eli5.io/img/components/feed/4.jpg', alt: 'Buddy' },
        { id: 5, img: '//cdn.prod1.eli5.io/img/components/feed/5.jpg', alt: 'Hacker games' },
        { id: 6, img: '//cdn.prod1.eli5.io/img/components/feed/6.jpg', alt: 'Meeting Federico and Wesley' },
        { id: 7, img: '//cdn.prod1.eli5.io/img/components/feed/7.jpg', alt: 'Fifa: Jelle vs Kishan' },
        { id: 8, img: '//cdn.prod1.eli5.io/img/components/feed/8.jpg', alt: 'Kishan BBQ' },
      ]
    }
  },
  computed: {
    isMobile () {
      return this.$store.getters.isMobile
    },
    totalPosts () {
      return size(this.posts) - 1
    },
    placeholder () {
      return this.posts[0]
    }
  },
  methods: {
    next () {
      if(this.current < this.totalPosts) {
        this.current++
      }
    },
    prev () {
      if(this.current > 0) {
        this.current--
      }
    }
  }
}
</script>