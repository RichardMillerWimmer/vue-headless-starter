<template>
  <div>
    <ul class="cardFlex">
      <Card v-for="post in posts" :post="post" :key="post.id" />
    </ul>
  </div>
</template>

<script>
import bus from "../bus";
import ajax from "../mixins/ajax";
import Card from "../components/Card";

export default {
  name: "Feed",

  mixins: [ajax],

  data() {
    // console.log(posts)
    return {
      posts: [],
      page: 1,
      totalPages: null
      // postPerPage: process.env.VUE_APP_POSTS_PER_PAGE
    };
  },

  mounted: function() {
    this.getPosts();
    // console.log(this.postPerPage);
  },

  created: function() {
    if (this.$route.name === "page") {
      this.page = this.$route.params.page;
    }
  },

  methods: {
    getPosts: async function() {
      let response;

      try {
        response = await this.get(
          `/posts?per_page=${VUE_APP_POSTS_PER_PAGE}&page=${this.page}`
        );
        this.totalPages = response.headers["x-wp-totalpages"];
      } catch (error) {
        bus.$emit("showUpdater", "Are you sure that's a valid endpoint?");
        bus.$emit("toggleLoading", false);
        return;
      }

      this.posts = await this.getFeaturedImages(response.data);

      this.getAdjacentPageData();

      bus.$emit("toggleLoading", false);
    },

    getAdjacentPageData: async function(prevPage = false) {
      let page =
        prevPage === true ? parseInt(this.page) - 1 : parseInt(this.page) + 1;

      let response;

      if (page > 0) {
        try {
          response = await this.get(
            `/posts?per_page=${VUE_APP_POSTS_PER_PAGE}&page=${page}`
          );
        } catch (error) {
          console.error(error);
        }

        response.data.forEach(post => {
          if (post.featured_media <= 0) return;
          this.get(`/media/${post.featured_media}`);
        });
      }

      if (!prevPage) {
        this.getAdjacentPageData(true);
      }
    },

    getFeaturedImages: function(posts) {
      return new Promise(resolve => {
        let requests = posts.map(post => {
          return new Promise(async resolve => {
            let response;

            try {
              if (post.featured_media <= 0) {
                throw "No featured image.";
              }

              response = await this.get(`/media/${post.featured_media}`);
              post.featured_image =
                response.data.media_details.sizes["medium_large"].source_url;
            } catch (error) {
              post.featured_image = null;
            }

            resolve(post);
          });
        });
        console.log(posts);
        Promise.all(requests).then(posts => resolve(posts));
      });
    }
  },

  components: {
    Card
  }
};
</script>

<style scoped lang="scss">
.cardFlex {
  margin: 30px 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
</style>
