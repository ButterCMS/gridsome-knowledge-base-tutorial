<!-- ./src/components/SiteFooter -->
<script>
export default {
  name: "SiteFooter",
  props: ["copyright", "footer_items"],
};
</script>

<template>
  <footer class="site-footer site-section">
    <div class="wrapper">
      <span class="site-footer__cp">
        {{ copyright }}
      </span>

      <ul class="site-footer__links">
        <li
          v-for="(item, i) in footer_items"
          :key="i"
          class="site-footer__link-item"
        >
          <g-link to="/">
            {{ item.item_names }}
          </g-link>
        </li>
      </ul>
    </div>
  </footer>
</template>
<style scoped>
.site-footer {
  @apply w-full mt-4 p-4 border-t border-gray-200;
}

.site-footer > .wrapper {
  @apply flex justify-between items-center gap-4 w-full;
}

.site-footer__links {
  @apply flex items-center gap-8;
}
</style>
