<template>
  <section>
    <div class="filter">
      <button class="filterFlex">
        <div class="box"></div>
        <p>All News</p>
      </button>
      <button class="filterFlex">
        <div class="box"></div>
        <p>Cat A</p>
      </button>
      <button class="filterFlex">
        <div class="box"></div>
        <p>Cat B</p>
      </button>
      <button class="filterFlex">
        <div class="box"></div>
        <p>Cat C</p>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "CatFilter"
};
</script>

<style lang="sass" scoped>
@import "../assets/scss/_catfilter.scss"
</style>
