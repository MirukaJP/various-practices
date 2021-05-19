<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <test-component hoge="It's hoge props." />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import TestComponent from './components/TestComponent.vue';

export default {
  name: "App",
  components: {
    // HelloWorld,
    TestComponent,
  },
};
</script>

<style lang="scss">
body {
  background-color: $primary-light;
}
</style>
