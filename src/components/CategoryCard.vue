<!-- ./src/components/CategoryCard.vue -->

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  computed: {
    coverImage() {
      return this.category.cover_image;
    },
    articles() {
      return this.category.articles;
    },
  },
};
</script>

<template>
  <article class="category-card">
    <header class="category-card__header">
      <h2 class="category-card__title">
        {{ category.name }}
      </h2>
      <figure class="category-card__cover img-cont">
        <img :src="coverImage" alt="Category" />
      </figure>
    </header>
    <ul class="category-card__article-list">
      <li
        class="category-card__article-list-item"
        v-for="article in articles"
        :key="article.slug"
      >
        <g-link
          :to="`/article/${article.slug}`"
          class="category-card__article-link"
        >
          {{ article.name }}
        </g-link>
      </li>
    </ul>
    <g-link :to="`/category/${category.slug}`" class="category-card__link">
      View all
    </g-link>
  </article>
</template>
<style scoped>
.category-card {
  @apply flex flex-col gap-4;
}

.category-card__header {
  @apply flex flex-col gap-4;
}

.category-card__title {
  @apply text-2xl text-rhino-800 font-bold;
}

.category-card__cover {
  @apply w-full h-56;
}

.category-card__cover img {
  @apply rounded-2xl border border-rhino-100;
}

.category-card__article-list {
  @apply flex flex-col gap-2;
}

.category-card__article-list-item {
  @apply font-normal text-lg;
}

.category-card__link {
  @apply text-rhino-400 font-bold;
}
</style>
