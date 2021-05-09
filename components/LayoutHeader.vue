<template>
<header class="header">
  <h1 class="header-title">CSS Animation & Tips</h1>

  <p v-if="!root">
    <a href="/" class="link-btn">HOME</a>
  </p>
</header>
</template>

<script>
export default {
  name: 'LayoutHeader',
  props: {
    root: {
      type: Boolean,
      default: true 
    }
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    height: 25vh;
    margin-bottom: 5vh;
  }

  .header .header-title {
    font-size: 5rem;
    color: #aaa;
    font-weight: 600;
    text-align: right;
    margin-right: 15vw;
  }

  .header .link-btn {
    text-align: left;
    color: #aaa;
    font-size: 2.5rem;
    margin-left: 15vw;
  }
</style>