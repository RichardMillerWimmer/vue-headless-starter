<template>
  <section>
    <div class="filter">
      <div class="filterFlex">
        <div class="box"></div>
        <p>All News</p>
      </div>
      <div class="filterFlex">
        <div class="box"></div>
        <p>Cat A</p>
      </div>
      <div class="filterFlex">
        <div class="box"></div>
        <p>Cat B</p>
      </div>
      <div class="filterFlex">
        <div class="box"></div>
        <p>Cat C</p>
      </div>
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
