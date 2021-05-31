<template>
  <section>
    <div class="newsFlex">
      <h1>News</h1>
      <CatFilter class="catfilter" />
    </div>
    <div class="cardDisplay">
      <!-- <Feed /> -->
    </div>
  </section>
</template>

<script>
import CatFilter from "../components/CatFilter";
import Feed from "../views/Feed";

export default {
  name: "News",
  components: {
    CatFilter,
    Feed
  }
};
</script>

<style lang="sass" scoped>
@import "../assets/scss/_news.scss"
</style>
