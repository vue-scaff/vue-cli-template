<template>
  <div class="home">
    <!-- Jumbotron -->
    <div class="jumbotron">
      <img class="logo" src="@/assets/logo.png" />
      <div class="slogan">
        <h1>{{ $t("hello") }} Vue Scaff</h1>
        <span>= Next Engineering Scaffold =</span>
      </div>
    </div>

    <!-- Start -->
    <div class="start">
      <router-link :to="{ name: 'sample' }">
        <div class="start-text">
          <span>Click me to get started !</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mixins: [registry.mixin],
  components: {},
  methods: {},
  mounted() {}
};
</script>
