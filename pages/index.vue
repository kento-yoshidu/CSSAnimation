<template>
  <div class="container">
    <layout-header />

    <main class="main">
      <section class="top-section" style="margin-top: 50px">
        <p class="section-title">CSSで表現できるアニメーションです。何か思いついたら更新します。</p>
        <p class="section-title">各ボックスをクリックすると詳細ページへ飛びます。</p>
      </section>

      <section class="section">
        <div class="wrapper">
          <a class="boxes ani1" href="/01/">
            <p>#1 Slide up</p>
            <div class="mask">
              <p class="hoverme">Slide Up</p>
              <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
            </div>
          </a>

          <a class="boxes ani2" href="/02/">
            <p>#2 Beating heart</p>
            <i class="fas fa-heart"></i>
          </a>
          <a class="boxes ani2" href="/02/">
            <p>#2 Beating heart</p>
            <i class="fas fa-heart"></i>
          </a>
          <a class="boxes ani2" href="/02/">
            <p>#2 Beating heart</p>
            <i class="fas fa-heart"></i>
          </a>
          <a class="boxes ani2" href="/02/">
            <p>#2 Beating heart</p>
            <i class="fas fa-heart"></i>
          </a>
          
          <div class="boxes">
          </div>
        </div>
      </section>
    </main>
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

.top-section {
  min-height: 10vh;
  width: 80%;
  margin: 0 auto;
}

.top-section p {
  color: #444;
  font-size: 1.8rem;
  font-weight: 900;
  letter-spacing: 1px;
  line-height: 1.5;
  text-indent: .8rem;
  margin-bottom: 10px;
}

.wrapper {
  margin: 30px auto 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  border: 1px solid #888;
}

.boxes {
  width: 20vw;
  height: 20vw;
  border: 1.5px solid #ddd;
  border-radius: 2px;
  transition: .3s;
}

@media screen and (max-width: 768px) {
  .boxes {
    width: 30vw;
    height: 30vw;
    margin-bottom: 10px;
  }
}

.ani1 {
  position: relative;
  overflow-y: hidden;
}

.ani1 > p {
  position: absolute;
  top: 35%;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  color: #222;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
}

.ani1 .mask {
  position: absolute;
  top: 75%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(50, 50, 50);
  color: #fff;
  letter-spacing: 3px;
  text-align: center;
  transition: .3s;
}

.ani1 .mask .hoverme {
  color: #fff;
  font-size: 3rem;
  line-height: 25%;
  font-weight: 500;
  line-height: 5vw;
}

.ani1 .mask > p {
  margin: 0 auto;
  width: 90%;
  color: #fff;
  font-size: 1.8rem;
}

.ani1:hover .mask {
  top: 0;
}
</style>
