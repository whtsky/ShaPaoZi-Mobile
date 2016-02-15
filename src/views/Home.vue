<template>
   <strong class="logo">ShaPaoZi.me</strong>
   <p>点右上角的按钮开始搜索啦</p>
</template>

<script>
  export default {
    route: {
      activate () {
        window.document.title = 'Index | ShaPaoZi.me'
      }
    },
    components: {
    }
  }
</script>

<style scoped>
.logo {
  margin-top: 30vh;
  display: block;
  text-align: center;
  font-size: 12vw;
  line-height: 15vw;
}

p {
  color: rgba(5, 5, 5, .7);
  text-align: center;
}
</style>
