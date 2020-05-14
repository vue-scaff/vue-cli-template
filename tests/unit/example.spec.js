import { shallowMount } from "@vue/test-utils";
import Example from "@/components/example.vue";

describe("example.vue", () => {
  it("renders props.message when passed", () => {
    const message = "test message";
    const wrapper = shallowMount(Example, {
      propsData: { message }
    });
    expect(wrapper.text()).toMatch(message);
  });
});
