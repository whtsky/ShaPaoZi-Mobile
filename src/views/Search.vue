<template>
  <div id="results"
       v-infinite-scroll="loadNextPage()"
       infinite-scroll-disabled="loadingDisabled"
       infinite-scroll-distance="1000">
    <result-card :result="item" v-for="item in results" track-by="infohash"></result-card>
  </div>
  <mdl-spinner v-if="loading"></mdl-spinner>
  <div id="mdl-toast" class="mdl-js-snackbar mdl-snackbar">
    <div class="mdl-snackbar__text"></div>
    <button class="mdl-snackbar__action" type="button"></button>
  </div>
</template>

<style>
</style>

<script>
import ResultCard from '../components/ResultCard.vue'

export default {
  data () {
    return {
      results: [],
      page: 0,
      max_page: 0,
      loading: true,
      loadingDisabled: false
    }
  },
  route: {
    canReuse: false,
    activate () {
      window.document.title = 'Search: ' + this.$route.params.text + ' | ShaPaoZi.me'
    }
  },
  methods: {
    loadNextPage () {
      if (this.loadingDisabled) {
        return
      }
      this.loading = true
      this.loadingDisabled = true
      this.page++
      this.$http.get('search/' + this.$route.params.text + '/page/' + this.page).then(function (response) {

        this.results = this.results.concat(response.data.results)
        this.max_page = response.data.max_page
        this.loading = false
        if (this.page >= this.max_page) {
          this.loadingDisabled = true
        } else {
          this.loadingDisabled = false
        }
      }, function (response) {

        // error callback
      })
    }
  },
  components: {
    ResultCard
  }
}
</script>
