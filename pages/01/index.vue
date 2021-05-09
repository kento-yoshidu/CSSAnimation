<template>
  <div class="container">
    <layout-header
      :root="false"
    />

    <main class="main">
      <section class="top-section">
        <h2 class="top-title">#1 Slide Up</h2>

        <div class="box">
          <div class="mask">
            <p class="hoverme">Slide Up</p>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
          </div>
        </div>
      
        <p>こんにちは。</p>
        <p>CSS-Animationと題しましたこのコンテンツ、第一回目はカーソルを合わせた時にスライドアップしてくるボックスです。仕組みが分かってしまえばすごく簡単です。</p>
        <p>positionの使い方に慣れるのにぴったりだと思い、第一回目の題材に持ってきました。</p>
      </section>

      <section class="section" id="sec1">
        <h2 class="section-title">boxクラスとmaskクラスを用意する</h2>

        <p>外枠としてboxクラス、浮かび上がってくる部分としてmaskクラスを用意します。</p>
        <p>maskクラスの中には適当な文字列を入れてあげてください。</p>

<pre v-highlightjs>
<code class="html">&lt;div class="box"&gt;
  ここがboxクラスです
  &lt;div class="mask"&gt;
    &lt;p class="slideUp"&gt;Slide Up&lt;/p&gt;
    &lt;p class="text"&gt;Lorem dolor ...略&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code>
</pre>

    <p>cssは、まずは最低限ということで以下のように記述してみます。</p>

<pre v-highlightjs>
<code>* {
  margin: 0;
  padding: 0;
}

.box {
  height: 30vw;
  width: 30vw;
  border: 1px solid #aaa;
}

.mask {
  width: 100%;
  height: 100%;
  background-color: #445;
  color: #fff;
}</code>
</pre>

  <p>boxクラスは<span class="il">width</span>、<span class="il">height</span>を指定してください（<a href="https://qiita.com/shouchida/items/205fed63b886681661bd#height-%E3%81%AB%E7%9B%B8%E5%AF%BE%E5%80%A4%E3%81%8C%E6%8C%87%E5%AE%9A%E3%81%95%E3%82%8C%E3%81%9F%E5%A0%B4%E5%90%88%E3%81%AE%E9%AB%98%E3%81%95%E3%81%AE%E7%AE%97%E5%87%BA" target="_blank"><span class="il">height</span>は%指定はできません</a>ので、pxやvh、vwを使用してください）。また、maskクラスはboxクラスと同じ大きさになるようにしてください。</p>
  <p>CSSを適用させると以下のように表示されるはずです。</p>

  <p><img src="~/assets/img/01/01.jpg" class="img"></p>

  </section>

  <section class="section" id="sec2">
  <h2 class="section-title">maskクラスの位置を決定する</h2>
  <p>次にboxクラスを基準とし、maskクラスの位置を決定します。使用するCSSプロパティは<strong>position</strong>です。</p>

  <p>基準となる(=親要素)boxクラスに<span class="il">position: relative;</span>、子要素に<span class="il">position: absolute;</span>を指定します。</p>
  <p>そして、親要素を基準として、どれくらい子要素をずらすかを、top、bottom、left、rightプロパティで指定します。以下の例では<span class="il">top: 70%;</span>、<span class="il">left 10px;</span>を指定しています。</p> 

<pre v-highlightjs>
<code class="css">(略)

.box {
  position: relative;
  height: 30vw;
  width: 30vw;
  border: 1px solid #aaa;
}

.mask {
  position: absolute;
  top: 70%;
  left: 10px;
  width: 100%;
  height: 100%;
  background-color: #445;
  color: #fff;
}</code>
</pre>

<p><img src="~/assets/img/01/02.JPG" class="img"></p>

  <p>何が起こったかを説明します。<span class="il">top: 70%</span>によって、親要素であるboxクラスの上から70%分、maskクラスが下にずれます。この70%はboxクラスの高さの70%です(maskクラス自身の高さの70%ではありません。)。boxクラスは30vhなので、21vh下にずれることになりますね。</p>
  <p>同じく<span class="il">left: 10px;</span>によって、boxクラスの左から10px、maskクラスが右にずれます。これは絶対値なので分かりやすいですね。</p>
  <p>そしてこれを、「hoverした時に<span class="il">top: 0;</span>にしてあげる」CSSを書けばこのアニメーションは完成です。</p>
</section>

  <section class="section">
    <h2 class="section-title">hover擬似クラスを指定する</h2>
    <p>まず、ここまでのCSSの内容を整理しておきます。maskクラスに指定した<span class="il">left: 10px;</span>は、例として挙げただけなので不要です、消してください。</p>

<pre v-highlightjs>
<code>(略)

.box {
  position: relative;
  height: 30vw;
  width: 30vw;
  border: 1px solid #aaa;
}

.mask {
  position: absolute;
  top: 70%;
  width: 100%;
  height: 100%;
  background-color: #445;
  color: #fff;
}</code>
</pre>

  <p>今回はmaskクラスにカーソルを乗せた時の動作を記述するので、以下のようにhover擬似要素を指定します。</p>
      
<pre v-highlightjs>
<code class="css">(略)

.mask {
  position: absolute;
  top: 70%;
  width: 100%;
  height: 100%;
  background-color: #445;
  color: #fff;
}

.mask:hover {
  top: 0;
}
</code>
</pre>

  <p>これでカーソルを乗せた時、top: 0;の位置まで移動するようにできました。</p>
  <p><img src="~/assets/img/01/01.gif" class="img"></p>

  <p>続けて、親要素であるboxクラスからはみ出している部分を隠すために、<span class="il">overflow-y: hidden;</span>を適用します。</p>

<pre v-highlightjs>
<code>（略）

.box {
  position: relative;
  height: 30vw;
  width: 30vw;
  border: 1px solid #aaa;
  overflow-y: hidden;
}

（略）</code>
</pre>

  <p><img src="~/assets/img/01/02.gif" class="img"></p>
  <p>あとはアニメーションを付ければ完成です。</p>

  </section>

  <section class="section">
    <h2 class="section-title">CSSトランジションでアニメーションを適用する</h2>
    <p>CSS トランジションとは何なのでしょうか？<a href="https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions" target="_blank">MDNによると</a>、「CSS トランジションは、 CSS プロパティが変化する際のアニメーションの速度を操作する手段を提供します。プロパティの変更を直ちに有効にするのではなく、プロパティの変更を一定期間にわたって発生させることを可能にします。」とあります。</p>
    <p>もうちょっとかみ砕いて言うと、状態の変化をアニメーションとして表現することができる機能であるということです。今回で言う「状態の変化」とは、<span class="il">top: 70%;</span>から<span class="il">top: 0;</span>への変化ですね。</p>
    <p>CSS トランジションは、その名の通り<strong>transitionプロパティ</strong>を使用して適用します。</p>

    <section class="sub-section">
      <h3 class="sub-title">`transition-duration`</h3>
      <p>`transition-duration`プロパティで、状態の変化にかかる時間を指定することができます。</p>
      <p>maskクラスに記述します。hover擬似要素ではありません。変化に0.5秒かけるとすると、以下のように記述します。</p>
<pre v-highlightjs>
<code>(略)

.mask {
  position: absolute;
  top: 70%;
  width: 100%;
  height: 100%;
  background-color: #445;
  color: #fff;
  transition-diration: 0.5s;
}

.mask:hover {
  top: 0;
}
</code>
</pre>
    </section>
  </section>

  <section class="section">
    <h2 class="section-title">positionプロパティって何なの?</h2>

    <p>以下はアニメーションというよりpositionプロパティの話になります。</p>
    <p>さて、ここでpositionプロパティについて説明します。positionプロパティはそのボックスの配置方法を決めるもので、相対位置(relative)か絶対位置(absolute or fixed)かを指定できます。</p>

    <p>まずは絶対配置から説明します。子要素であるmaskクラスにabosoluteを指定しましたが、これでmaskクラスは絶対位置を基準として配置場所が決定されることになります。これはどういうことかというと、「ある基準点（絶対位置）を定めて、配置位置を決めますよ」という意味です。</p>
    <p>「じゃあその基準点はどこになるの？」という所ですが、absoluteが指定されている場合、親要素をたどっていき、position: static;以外（relative、absolute、fixed）が指定されている要素を基準点とします。もしどこにも記述がなければ、ブラウザ(html要素)が基準点になります。</p>
    <p>今回は親要素であるboxクラスに`position: relative;`を指定しているので、boxクラスが基準になります。つまり下図で言うと、赤枠で囲っている部分からどれだけずらして配置する？を指定することになります。</p>
    <p><img src="~/assets/img/01/03.JPG" class="img"></p>

    <section class="sub-section">
      <h3 class="sub-title">じゃあ相対位置って?</h3>
      <p>さくっと説明しましたが、「なんだよ、じゃあ相対位置ってなんだよ。全部relativeを指定したらどうなるんだよ」などの疑問が沸くかもしれません。</p>
      <p>ではmaskクラスにrelativeを指定してみましょう。相対位置・・・という言葉はわかりにくいので、「positionを指定していない時に配置される位置を基準にする」という言い方に変えてみるとどうでしょう。</p>
      <p>positionを指定しない場合(つまり、通常の状態ですね)は以下のような配置になっていましたね。この時のmaskクラスの位置が基準になります。</p>
      <p><img src="~/assets/img/01/04.JPG" class="img"></p>

      <p>つまり、maskクラスに`position: relative`を指定すると以下のような配置になります。
      <p><img src="~/assets/img/01/06.JPG" class="img"></p>
      <p>この通り、「もともとmaskクラスがあった位置を基準」に配置することになります。</p>
    </section>
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
.box {
  width: 20vw;
  height: 20vw;
  border: 1px solid #aaa;
  margin: 5vh auto 5vh;
  position: relative;
  overflow: hidden;
}

.box .mask {
  position: absolute;
  top: 75%;
  height: 100%;
  text-align: center;
  background-color: rgb(50, 50, 50);
  transition-duration: .3s;
}

.box .mask:hover {
  top: 0;
}

.box .mask .hoverme {
  position: absolute;
  font-size: 2.2vw;
  line-height: inherit;
  height: 25%;
  width: 100%;
  letter-spacing: 2px;
  color: #fff;
}

.box .mask .text {
  color: #fff;
  font-size: 2rem;
  padding-top: 25%;
} 

@media screen and (max-width: 768px) {
  .box {
    width: 45vw;
    height: 45vw;
  } 

  .box .mask .hoverme {
    font-size: 2.4rem;
  }

  .box .mask .text {
    font-size: 1.2rem;
  }
}
</style>
