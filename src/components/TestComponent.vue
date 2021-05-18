<template>
  <p class="TestComponent">
    Test Component.<br>
    {{hoge}}
  </p>
</template>

<script>
export default {
  name: "TestComponent",
  props: {
    hoge: String,
  },
};
</script>

<style lang="scss" scoped>
.TestComponent {
  color: rgb(190, 72, 127);
}
</style>