<template>
  <div>
    <CmnHeader/>
    <nuxt/>
    <CmnFooter/>
  </div>
</template>

<script>
import CmnHeader from "~/components/CmnHeader";
import CmnFooter from "~/components/CmnFooter";

export default {
  components: {
    CmnHeader,
    CmnFooter
  }
};
</script>
