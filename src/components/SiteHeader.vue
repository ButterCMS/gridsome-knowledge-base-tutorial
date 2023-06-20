<!-- ./src/components/SiteHeader.vue -->

<script>
export default {
  name: "SiteHeader",
  props: ["logo", "navItems", "cta_button"],
};
</script>
<template>
  <header class="site-header">
    <div class="wrapper">
      <g-link to="/">
        <div class="site-header__logo img-cont">
          <img src="/flutterwave-logo.svg" alt="Flutterwave" />
        </div>
      </g-link>
      <nav class="site-nav">
        <ul class="site-nav__links">
          <li
            class="site-nav__link"
            v-for="item in navItems"
            :key="item.item_name"
          >
            <g-link to="/">{{ item.item_name }}</g-link>
          </li>
          <li class="site-nav__link">
            <g-link to="/" class="cta">
              {{ cta_button }}
            </g-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style scoped>
.site-header {
  @apply sticky top-0 w-full p-4 bg-white border-b border-gray-200 z-10;
}

.site-header > .wrapper {
  @apply flex justify-between items-center gap-4 w-full max-w-7xl mx-auto;
}

.site-header__logo {
  @apply w-48;
}

.site-nav__links {
  @apply flex items-center gap-8;
}

.site-nav__link {
  @apply text-sm font-medium;
}
</style>
