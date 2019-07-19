<template>
<main id="main">
    <div id="main_inner">
      <h1 id="main_site_ttl" class="work2"><span>よ</span>うこ<span>そ！Ｂ</span>Ｋプ<span>ラ</span>ザへ<br class="sp">(NHK<span>大阪</span>放送局)</h1>
      <p id="main_site_pub">2019年</p>
      <ul id="main_site_role">
        <li>デザイン</li>
        <li>html</li>
        <li>css</li>
        <li>Javascript</li>
      </ul>
    </div>
    <p>
      <a id="main_work_img" href="https://www.nhk.or.jp/osaka/bkplaza/" target="_blank" rel="noopener">
        <img alt="実績2" src="~/assets/img/work2.jpg"/>
        <span class="hover_box">
          <i class="circle deco01"></i>
          <i class="circle deco02"></i>
          <i class="line deco01"></i>
          <i class="line deco02"></i>
          <i class="line deco03"></i>
          <i class="line deco04"></i>
          <span class="hover_box_ttl">SITE LINK</span>
        </span>
      </a>
    </p>
    <ul id="main_work_link">
      <li><nuxt-link to="/works1">前の実績へ</nuxt-link></li>
      <li><nuxt-link to="/">トップへ</nuxt-link></li>
      <li><nuxt-link to="/works3">次の実績へ</nuxt-link></li>
    </ul>
  </main>
</template>
<script>
import { TweenMax, Elastic, Expo } from 'gsap'
export default {
  head() {
    return {
      title: "ようこそ！ＢＫプラザへ(NHK大阪放送局)"
    };
  },
  mounted() {
    this.fadeIn();
  },
  methods: {
    fadeIn() {
      TweenMax.to('#main_site_ttl', 1.5, {
        opacity:1
      })
      TweenMax.to('#main_site_pub', 0.03, {
        color: '#FFF',
        startAt: {
          color: '#005baa'
        },
        ease: Expo.easeOut,
        repeat: 30,
        yoyo: true,
        repeatDelay: 0.03,
      })
      TweenMax.staggerTo('#main_site_role li', 0.025, {
        color: '000',
        startAt: {
          color: '#F00'
        },
        ease: Expo.easeOut,
        repeat: 40,
        yoyo: true,
        repeatDelay: 0.025,
      })
    }
  }
};
</script>
