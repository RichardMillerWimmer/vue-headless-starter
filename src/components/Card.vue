<template>
  <li class="cardContainer">
    <router-link
      v-if="post.featured_image"
      :to="{ name: 'post', params: { slug: post.slug } }"
    >
      <img class="featuredImage" :src="post.featured_image" alt="" />
    </router-link>
    <div class="articleContainer">
      <h3 class="articleTitle">
        <router-link
          class="articleLink"
          :to="{ name: 'post', params: { slug: post.slug } }"
          v-html="post.title.rendered"
        >
        </router-link>
        <span> - </span>
      </h3>
      <h3>{{ getFormattedDate(post.date) }}</h3>
      <div class="excerpt" v-html="post.excerpt.rendered"></div>
      <!-- {{post.excerpt.rendered}} -->
    </div>
  </li>
</template>

<script>
export default {
  name: "Card",
  props: {
    post: {
      type: Object
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_card.scss";
</style>
