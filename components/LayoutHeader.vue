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
    margin-right: 15vw;
    margin-bottom: 30px;
    font-size: 5rem;
    color: #aaa;
    font-weight: 600;
    text-align: right;
  }

  .header .link-btn {
    text-align: left;
    color: #aaa;
    font-size: 2.5rem;
    margin-left: 15vw;
  }

  @media screen and (max-width: 768px) {
    .header {
      height: 30vh;
    }
    .header .header-title {
      margin-right: 6vw;
      margin-bottom: 20px;
      font-size: 2.8rem;
    }

    .header .link-btn {
      font-size: 1.8rem;
      margin-left: 8vw;
    }
  }
</style>