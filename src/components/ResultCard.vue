<template>
  <div class="card">
    <header>
      <h5>{{ result.title }}</h5>
    </header>
    <ul>
      <li>首次发现: {{ result.first_seen | timeago }}</li>
      <li>下载量: {{ result.seen }}</li>
      <li>大小: {{ result.length | bytesToSize }}</li>
      <li>文件数: {{ result.file_count }}</li>
    </ul>
    <mdl-spinner v-if="loading"></mdl-spinner>
    <template v-if="loaded">
      <h6>文件列表</h6>
      <ul>
        <li v-else v-for="file in files">{{ file.path.join("/") }} ( {{ file.length | bytesToSize }} )</li>
      </ul>
    </template>
    <footer>
      <a
        @click="copyMagnetURL"
        class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
        <i class="material-icons" v-if="copied">done</i>
        复制磁力链接
      </a>
      <a
        @click="loadDetail" v-show="needLoading"
        class="mdl-button mdl-button--accent mdl-js-button mdl-js-ripple-effect">
        查看文件列表
      </a>
    </footer>
  </div>
</template>

<style>
.card {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 85vw;
  word-wrap: break-word;
  background-color: #f8f8f8;
  padding: 5px 10px;
  box-shadow: 1px 2px 2px #ccc;
}

.card > header {
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0,0,0,.1);
}

.card > footer {
  padding-top: 10px;
  border-top: 1px solid rgba(0,0,0,.1);
}

.card footer .material-icons {
  font-size: 16px;
}
</style>

<script>
export default {
  props: ['result'],
  data () {
    return {
      loading: false,
      loaded: false,
      files: []
    }
  },
  computed: {
    magnetURL: function () {
      return 'magnet:?xt=urn:btih:' + this.result.infohash
    },
    needLoading: function () {
      return !(this.loading || this.loaded)
    }
  },
  methods: {
    copyMagnetURL () {
      window.cordova.plugins.clipboard.copy(this.magnetURL)
      let snackbarContainer = document.querySelector('#mdl-toast')
      snackbarContainer.MaterialSnackbar.showSnackbar({
        message: '已复制磁力链接：' + this.magnetURL
      })
    },
    loadDetail () {
      if (!this.needLoading) {
        return
      }
      this.loading = true

      this.$http.get('infohash/' + this.result.infohash).then(function (response) {
        var files
        if (response.data.files) {
          files = response.data.files
        } else {
          files = [
            {
              length: this.result.length,
              path: [response.data.filename]
            }
          ]
        }
        this.$set('files', files)
        this.results = response.data
        this.loading = false
        this.loaded = true
      }, function (response) {

        // error callback
      })
    }
  }
}
</script>
