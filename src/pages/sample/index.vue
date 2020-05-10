<template>
  <div class="page">
    <div class="section">
      <x-sample :message="home.name" :color="$style.theme" />
    </div>
    <div class="section">
      <div class="block">
        <button type="default" @click="doDispatch()">[Action] Dispatch</button>
      </div>
      <div class="block">
        <button type="default" @click="doDispatchSync()">
          [Action] Dispatch Sync 2s
        </button>
      </div>
      <div class="block">
        <button type="default" @click="doCommit()">[Mutation] Commit</button>
      </div>
      <div class="block">
        <button type="default" @click="doState()">[State] Change</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      requestAddress: this.$api.mock("hello", "world", "honey")
    };
  },
  mixins: [registry.mixin],
  components: {},
  methods: {
    doDispatch() {
      this.$store.dispatch("home/chance", "Has Dispatch");
    },
    doDispatchSync() {
      this.$store.dispatch("home/chanceAsync", "Sync Dispatch").then(sync => {
        setTimeout(() => {
          this.home.name = sync;
        }, 2000);
      });
    },
    doCommit() {
      this.$store.commit("home/rename", "Has Commit");
    },
    doState() {
      this.home.name = "Change Name";
    }
  },
  mounted() {
    this.$http(this.requestAddress)
      .get({ a: 1, b: 2, c: 3 }, { headerParams: "header-params" })
      .then(response => {
        console.log("http response is : ", response);
      });
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 24px;
}
.block {
  padding: 12px 0;
}
.case {
  padding: 24px 0;
}
</style>
