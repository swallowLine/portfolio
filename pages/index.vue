<template>
  <main id="main">
    <TopWorks />
    <TopAbout />
  </main>
</template>
<script>
import TopWorks from '~/components/TopWorks.vue'
import TopAbout from '~/components/TopAbout.vue'

export default {
  head() {
    return {
      title: "トップ"
    };
  },
  components: {
    TopWorks,
    TopAbout
  }
};
</script>
