<template>
  <vector-layout>
    <template v-slot:header>
      <sticky-header-one></sticky-header-one>
    </template>

    <template v-slot:sidebar>
      <div id="mw-panel" v-show="sidebarCollapsed">
        <mw-portals></mw-portals>
      </div>
    </template>
  </vector-layout>
</template>

<style scoped lang="less">
#mw-panel {
  margin-top: 80px;
}
// modifying <p1-logo>
#vn-logo {
  left: 54px;
}
</style>

<script>
import "../globalSkinComponents.js";

export default {
  computed: {
    isMainPage() {
      return this.$store.state.article.title === "Main Page";
    },
    title() {
      return this.$store.state.article.title;
    },
    sidebarCollapsed() {
      return !this.$store.state.user.sidebarCollapsed;
    }
  },
  methods: {
    onClickContent(event) {
      const nodeName = event.target.nodeName,
        href = event.target.getAttribute("href"),
        currentRouteLanguage = this.$router.currentRoute.meta.language;
      if (nodeName == "A" && /\/wiki\//.test(href)) {
        event.stopPropagation();
        event.preventDefault();
        this.$router.push(`/${currentRouteLanguage}${href}`);
      }
    }
  }
};
</script>
