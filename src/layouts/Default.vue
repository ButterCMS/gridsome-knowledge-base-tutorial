<!-- ./src/layouts/Default.vue -->

<static-query>
query {
  kbData(id: "flutterwave") {
    id
    flutterwave_main_page {
      type
      fields {
        logo
        header_text
        cta_button
        nav_items {
          item_name
        }
        copywright
        footer_items {
          item_names
        }
      }
    }
  }
}
</static-query>

<script>
import SideMenu from "../components/SideMenu.vue";
import SiteFooter from "../components/SiteFooter.vue";
import SiteHeader from "../components/SiteHeader.vue";

export default {
  components: {
    SiteHeader,
    SiteFooter,
    SideMenu,
  },
  props: {
    showSidebar: {
      type: Boolean,
      default: false,
    },
  },
  metaInfo: {
    title: "Blog",
  },
  data() {
    return {
      siteHeaderData: {
        logo: "",
        nav_items: [],
      },
      siteFooterData: {
        copyright: "",
        footer_items: [],
      },
    };
  },
  created() {
    let navigationItem = this.$static.kbData.flutterwave_main_page.find(
      (item) => item.type === "navigation_items"
    ).fields;

    let siteFooter = this.$static.kbData.flutterwave_main_page.find(
      (item) => item.type === "footer"
    ).fields;

    this.siteHeaderData.logo = navigationItem?.logo;
    this.siteHeaderData.nav_items = navigationItem?.nav_items;
    this.siteHeaderData.cta_button = navigationItem?.cta_button;

    this.siteFooterData.copyright = siteFooter?.copywright;
    this.siteFooterData.footer_items = siteFooter?.footer_items;
  },
};
</script>

<template>
  <div class="layout">
    <!-- Header & Navigation -->
    <SiteHeader
      :logo="siteHeaderData.logo"
      :nav-items="siteHeaderData.nav_items"
      :cta_button="siteHeaderData.cta_button"
    />

    <div class="site-content">
      <div class="wrapper">
        <!-- conditionally render side menu -->
        <SideMenu v-if="showSidebar" />
        <!-- Page Content -->
        <main class="site-main">
          <slot />
        </main>
      </div>
    </div>

    <SiteFooter
      :copyright="siteFooterData.copyright"
      :footer_items="siteFooterData.footer_items"
    />
  </div>
</template>
<style scoped>
.site-content {
  @apply w-full;
}

.site-content > .wrapper {
  @apply flex flex-col md:flex-row w-full max-w-[92rem] mx-auto;
}

.site-main {
  @apply grow;
}
</style>
