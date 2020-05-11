<style lang="scss">
.sample {
  transition: all 0.6s;

  &-dark {
    color: $theme--light;

    .bulletin {
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      background-color: rgba(0, 0, 0, 0.2);

      h1 {
        background-image: linear-gradient(
          180deg,
          $bulletin-warm,
          $bulletin-warm
        );
        -webkit-animation: hue-warm 12s infinite alternate linear;
      }
    }
  }
  &-light {
    color: $theme--dark;

    .bulletin {
      border-bottom: 1px solid transparent;
      box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.25);

      h1 {
        background-image: linear-gradient(
          180deg,
          $bulletin-warm,
          $bulletin-warm
        );
        -webkit-animation: hue-warm 12s infinite alternate linear;
      }
    }
  }
}
</style>

<template>
  <div class="sample" :class="`sample-${['dark', 'light'][global.theme]}`">
    <x-example class="bulletin" :message="home.name" :color="$style.theme" />
    <ul class="panel">
      <li>
        <button type="default" @click="doState()">
          [State] Change
        </button>
      </li>
      <li>
        <button type="default" @click="doCommit()">
          [Mutation] Commit
        </button>
      </li>
      <li>
        <button type="default" @click="doDispatch()">
          [Action] Dispatch
        </button>
      </li>
      <li>
        <button type="default" @click="doDispatchSync()">
          [Action] Dispatch Sync
        </button>
      </li>
    </ul>
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
    doState() {
      this.home.name = "Hi, Anonymous !";
    },
    doCommit() {
      this.$store.commit("home/MUTATE_RENAME", "Commit By Mutate");
    },
    doDispatch() {
      this.$store.dispatch("home/ACTION_CHANCE", "Dispatch By Action");
    },
    async doDispatchSync() {
      const data = await this.$store.dispatch(
        "home/ACTION_CHANCE_SYNC",
        "Dispatch Sync 0"
      );

      this.$util.sleep(1200).then(() => (this.home.name = data));
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
