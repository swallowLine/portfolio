<template>
<main id="main">
    <div id="main_inner">
      <h1 id="main_site_ttl" class="work8">夢ナ<span>ビ</span>TAL<span>K</span></h1>
      <p id="main_site_pub">2018年</p>
      <ul id="main_site_role">
        <li>html</li>
        <li>css</li>
        <li>Javascript</li>
      </ul>
    </div>
    <p>
      <a id="main_work_img" href="https://talk.yumenavi.info/" target="_blank" rel="noopener">
        <img alt="実績8" src="~/assets/img/work8.jpg"/>
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
      <li><nuxt-link to="/">トップへ</nuxt-link></li>
      <li><nuxt-link to="/works1">実績トップへ</nuxt-link></li>
    </ul>
  </main>
</template>
<script>
import { TweenMax, Elastic, Expo } from 'gsap'
export default {
  head() {
    return {
      title: "夢ナビTALK"
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
