<!-- ./src/components/Search.vue -->

<script>
export default {
  data() {
    return {
      // search query
      searchQuery: "",
    };
  },
  methods: {
    // method to handle search
    handleSearch(e) {
      // navigate to search page with query
      this.$router.push({
        path: "/search",
        query: {
          q: this.searchQuery,
        },
      });
    },
  },
};
</script>
<template>
  <!-- call handleSearch when form is submitted -->
  <form @submit.prevent="handleSearch" class="search-form" action="">
    <div class="wrapper">
      <div class="form-control search-form-control">
        <span class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-search"
            viewBox="0 0 24 24"
          >
            <defs></defs>
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
        </span>
        <input
          type="text"
          class="form-input form-control__input"
          placeholder="Search help articles..."
          v-model="searchQuery"
          required
        />
      </div>
      <div class="action-cont">
        <!-- submit form -->
        <button type="submit" class="cta">
          Search
        </button>
      </div>
    </div>
  </form>
</template>
<style scoped>
.search-form > .wrapper {
  @apply flex flex-col gap-4;
}
</style>
