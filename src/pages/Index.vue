<page-query>
  query {
    allCategory{
      totalCount
      edges{
        node{
          id
          slug
          name
          published
          updated
          page_type
          fields{
            name
            cover_image
            description
            articles {
              slug
              name
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import CategoryCard from "../components/CategoryCard.vue";
import Search from "../components/Search.vue";
export default {
  metaInfo: {
    title: "Knowledge Base",
  },
  components: {
    CategoryCard,
    Search,
    Search,
  },
  created() {
    console.log(this.$page.allCategory);
  },
};
</script>

<template>
  <Layout>
    <section class="site-section">
      <div class="wrapper">
        <header class="search-header">
          <div class="wrapper">
            <h1 class="search-header__title">How can we help?</h1>
            <Search />
          </div>
        </header>
      </div>
    </section>

    <section class="site-section">
      <div class="wrapper">
        <ul class="category-list">
          <li
            v-for="category in $page.allCategory.edges"
            :key="category.node.id"
            class="category-item"
          >
            <CategoryCard
              :category="{ slug: category.node.slug, ...category.node.fields }"
            />
          </li>
        </ul>
      </div>
    </section>
  </Layout>
</template>

<style scoped>
.search-header > .wrapper {
  @apply flex flex-col gap-6;
}

.search-header__title {
  @apply font-heading font-black text-rhino-800 text-4xl lg:text-5xl;
}

.category-list {
  @apply grid gap-8;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
}
</style>
