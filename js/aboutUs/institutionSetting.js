const { createApp } = Vue;

createApp({
  data() {
    return {
      maskShow: false,
    };
  },
  mounted() {},
  methods: {
    openMask() {
      this.maskShow = true;
    },
    closeMask() {
      this.maskShow = false;
    },
  },
}).mount("#app");
