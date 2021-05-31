<template>
  <section class="newsFlex">
    <h1>News</h1>
    <CatFilter class="catfilter" />
    <div class="cardDisplay">
      <Card />
    </div>
  </section>
</template>

<script>
import CatFilter from "../components/CatFilter";
import Card from "../components/Card";

export default {
  name: "News",
  components: {
    CatFilter,
    Card
  }
};
</script>

<style lang="sass" scoped>
@import "../assets/scss/_news.scss"
</style>
