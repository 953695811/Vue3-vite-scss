<template>
  <Tab />
  <router-view />
</template>

<script>
import Tab from "./components/Tab.vue";
export default {
  name: "App",
  components: {
    Tab,
  },
};
</script>
