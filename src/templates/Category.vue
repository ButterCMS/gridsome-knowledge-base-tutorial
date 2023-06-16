<!-- ./src/templates/Category.vue -->

<template>
  <Layout show-sidebar>
    <section class="site-section">
      <div class="wrapper">
        <header class="section-header">
          <div class="wrapper">
            <h1 class="section-header__caption">
              {{ $context.name }}
            </h1>
            <p class="section-header__description">
              {{ $context.fields.description }}
            </p>
          </div>
        </header>
        <ul class="article-list">
          <li
            v-for="(article, i) in $context.fields.articles"
            :key="article.slug"
            class="article-item"
          >
            <g-link :to="`/article/${article.slug}`">
              {{ article.fields.title }}
            </g-link>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
</template>
<style scoped>
.article-list {
  @apply flex flex-col gap-4;
}
</style>
