<!-- ./src/templates/Article.vue -->
<script>
export default {
  metaInfo() {
    return {
      title: this.$context.fields.seo.title,
      description: this.$context.fields.seo.description,
    };
  },
  async created() {
    console.log("==>", this.$context);
  },
};
</script>
<template>
  <Layout show-sidebar>
    <article class="article site-section">
      <div class="wrapper">
        <!-- {{ $context }} -->
        <header class="article__header section-header">
          <div class="wrapper">
            <div class="section-header__content">
              <h1 class="section-header__caption">
                {{ $context.fields.title }}
              </h1>
              <p>
                {{ $context.fields.description }}
              </p>
              <span class="section-header__meta-item">
                Published:
                {{
                  new Date($context.published).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                }}
              </span>
            </div>
          </div>
        </header>

        <div class="article__content prose" v-html="$context.fields.body"></div>
      </div>
    </article>
  </Layout>
</template>
