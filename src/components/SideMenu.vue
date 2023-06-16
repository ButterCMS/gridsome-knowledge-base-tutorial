<!-- ./src/components/SideMenu -->

<static-query>
query {
  allCategory {
    edges {
      node {
        id
        name
        slug
      }
    }
  }
}
</static-query>
<template>
  <aside class="side-menu">
    <div class="wrapper">
      <nav class="categories-nav">
        <ul class="categories-nav__list">
          <li
            v-for="({ node }) in $static.allCategory.edges"
            :key="node.id"
            class="categories-nav__list-item"
          >
            <g-link :to="`/category/${node.slug}`">
              {{ node.name }}
            </g-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>
<style scoped>
.side-menu {
  @apply w-64 h-full p-4 px-8;
}

.side-menu > .wrapper {
  @apply flex flex-col gap-4 w-full max-w-7xl mx-auto;
}

.categories-nav {
  @apply py-12;
}

.categories-nav__list {
  @apply flex flex-col gap-2;
}

.categories-nav__list-item {
  @apply font-medium;
}
</style>
