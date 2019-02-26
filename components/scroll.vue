
<template>
  <div ref="button" color="primary" block @click="$vuetify.goTo(target, options)">
    <slot name="scrollBtn"></slot>
  </div>
</template>



<script>
import * as easings from "vuetify/es5/util/easing-patterns";

export default {
  data() {
    return {
      type: "number",
      number: 0,
      selector: "#first",
      selected: "Button",
      elements: ["Button", "Radio group"],
      duration: 1000,
      offset: 0,
      easing: "easeInOutCubic",
      easings: Object.keys(easings)
    };
  },
  computed: {
    target() {
      const value = this[this.type];
      if (!isNaN(value)) return Number(value);
      else return value;
    },
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      };
    },
    element() {
      if (this.selected === "Button") return this.$refs.button;
      else if (this.selected === "Radio group") return this.$refs.radio;
    }
  }
};
</script>