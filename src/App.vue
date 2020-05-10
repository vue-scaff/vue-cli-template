<style lang="scss">
.theme {
  transition: all 0.6s;

  &-light {
    background-color: $theme--light;
  }

  &-dark {
    background-color: $theme--dark;
  }

  &-switch {
    font-size: 30px;

    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
  }
}
</style>

<template>
  <div
    id="app"
    class="theme"
    :style="{ backgroundColor: $style[`theme${skin[theme]}`] }"
  >
    <div class="theme-switch" @click="themeSwitch">
      {{ theme ? "☀️" : "🌙" }}
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: 1,
      skin: ["Dark", "Light"]
    };
  },
  methods: {
    themeSwitch() {
      this.theme = !this.theme - 0;
    }
  }
};
</script>
