<template>
<main id="main">
    <div id="main_inner">
      <h1 id="main_site_ttl" class="work7">株<span>式会</span>社<span>フロ</span>ム<span>ページ</span> <br class="sp">トッ<span>プペー</span>ジ</h1>
      <p id="main_site_pub">2018年</p>
      <ul id="main_site_role">
        <li>html</li>
        <li>css</li>
        <li>Javascript</li>
      </ul>
    </div>
    <p>
      <a id="main_work_img" href="https://frompage.jp/" target="_blank" rel="noopener">
        <img alt="実績7" src="~/assets/img/work7.jpg"/>
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
      <li><nuxt-link to="/works6">前の実績へ</nuxt-link></li>
      <li><nuxt-link to="/">トップへ</nuxt-link></li>
      <li><nuxt-link to="/works8">次の実績へ</nuxt-link></li>
    </ul>
  </main>
</template>
<script>
import { TweenMax, Elastic, Expo } from 'gsap'
export default {
  head() {
    return {
      title: "株式会社フロムページ トップ"
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
