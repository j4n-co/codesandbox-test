<template>
  <a id="vn-logo" v-bind:href="$router.options.base">
    <img class="logo-globe" src="../assets/wikipedia-globe.png" />
    <span
      class="localized-wordmark"
      v-bind:src="localizedLogoSrc"
      v-bind:style="{ backgroundImage: 'url(' + localizedLogoSrc + ')' }"
    ></span>
  </a>
</template>

<style lang="less">
#vn-logo {
  position: absolute;
  top: 6px;
  left: 24px;
  display: block;
}
#vn-logo .localized-wordmark {
  display: inline-block;
  height: 36px;
  width: 120px;
  background-size: 120px auto;
  background-position: 0 -98px;
  background-repeat: no-repeat;
  vertical-align: middle;
}

#vn-logo .logo-globe {
  max-height: 40px;
  max-width: 40px;
}
</style>

<script>
export default {
  asyncComputed: {
    localizedLogoSrc: function() {
      return new Promise(resolve => {
        const localUrl = `https://en.wikipedia.org/static/images/project-logos/${this.$route.meta.language}wiki-2x.png`;
        const fallbackUrl = `https://en.m.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.svg`;
        const img = new Image();
        img.src = localUrl;
        img.onload = () => {
          return resolve(localUrl);
        };
        img.onerror = () => {
          return resolve(fallbackUrl);
        };
      });
    }
  }
};
</script>
