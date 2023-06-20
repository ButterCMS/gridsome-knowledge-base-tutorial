<!-- ./src/pages/Search.vue -->
<script>
import Search from "../components/Search.vue";

// initialize buttercms with grdsome client token
const butter = require("buttercms")(process.env.GRIDSOME_BUTTER_READ_TOKEN);

export default {
  metaInfo: {
    title: "Search",
    description: "Search for articles",
  },
  components: {
    Search,
  },
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    // function to search articles
    async searchArticles(query) {
      const response = await butter.page.search(query, {
        page_type: "flutterwave-kb_article",
        page: 1,
      });

      this.articles = response.data.data;
    },
  },

  // search articles on page load
  async created() {
    await this.searchArticles(this.$route.query.q);
  },
};
</script>
<template>
  <Layout show-sidebar>
    <section class="site-section">
      <div class="wrapper">
        <header class="section-header">
          <div class="wrapper">
            <Search />
          </div>
        </header>
      </div>
    </section>
    <section class="site-section site-section--no-py">
      <div class="wrapper">
        <h2 class="section-header__caption">Results</h2>
        <ul v-if="articles.length" class="article-list">
          <li
            v-for="(article, i) in articles"
            :key="article.slug"
            class="article-item"
          >
            <g-link :to="`/article/${article.slug}`">
              {{ article.fields.title }}
            </g-link>
          </li>
        </ul>
        <p v-else>No results found</p>
      </div>
    </section>
  </Layout>
</template>
<style scoped>
.article-list {
  @apply flex flex-col gap-4 py-6;
}
</style>
