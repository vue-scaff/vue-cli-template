// Service Worker
import "./registerServiceWorker";

// Import Staff
import Scaff from "@scaff/vue-cli-scaff";

// Import Utils
import { vueInterceptor, vuePreset, vueProce } from "./engineer";

// Import Sheet
import "@/sheet/index.scss";

// Use Diff
import { baseRoute } from "@/diff";

// Export Useage
export default (App, Extension = () => {}) =>
  // Running
  new Scaff({})
    .then(
      (
        // Provider
        { subscript },
        // Next
        Next
      ) => {
        subscript("util", config => {
          console.log("::: util in scaff :::", config);
        });

        subscript("route", config => {
          console.log("::: route in scaff :::", config);
          config.mode = "history";
        });

        subscript("component", (config, model) => {
          config.prefix = "x";
        });

        subscript("request", ({ data, headers }) => {
          // console.log("=====request=====", config);
          data.z = 2;
          console.log(222224, data);
        });

        subscript("response", config => {
          console.log("=====response=====", config);
        });

        subscript("mock", config => {
          // console.log(9899, aaa, bbb);
          return {
            name: "joe"
          };
        });

        // Runner
        return Next(App);
      }
    )
    .finally(v => {
      console.log(999, v);
    });
