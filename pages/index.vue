<template>
  <div class="container">
    <layout-header />

    <a href="/01/">01</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LayoutHeader from '~/components/LayoutHeader.vue'

export default Vue.extend({
  components: { LayoutHeader },})
</script>

<style scoped>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>
