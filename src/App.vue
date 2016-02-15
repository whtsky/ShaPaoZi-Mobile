<template>
  <div class="mdl-layout__container">
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title logo">ShaPaoZi</span>
          <div class="mdl-layout-spacer"></div>
          <mdl-textfield id='search'
            expandable='search' v-bind:value.sync='search_text'
            @keyup.enter="search">
          </mdl-textfield>
        </div>
      </header>
      <main class="mdl-layout__content">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    search_text: {default: ''}
  },
  methods: {
    search () {
      if (this.search_text !== '') {
        this.$router.go({ name: 'search', params: { text: this.search_text }})
      }
    }
  }
}
</script>

<style>
.mdl-layout__header-row {
  padding-left: 16px;
}

.mdl-layout__content {
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(238, 238, 238);
}

.mdl-card__supporting-text {
  color: rgba(0, 0, 0, .7);
}

.logo {
  font-family: 'Alegreya Sans SC';
}

.mdl-layout-title {
  font-size: 22px;
}

</style>
