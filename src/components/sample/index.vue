<template>
  <div class="x-sample">
    <div>
      <img src="@/assets/logo.png" />
    </div>
    <div>
      <span :style="{ color }">
        {{ message }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "sample",
  props: {
    message: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "default color"
    }
  },
  data() {
    return {};
  }
};
</script>
