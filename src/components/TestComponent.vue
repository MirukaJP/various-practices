<template>
  <p class="TestComponent">
    Test Component.<br>
    {{foo}}
  </p>
</template>

<script>
export default {
  name: "TestComponent",
  props: {
    hoge: String,
  },
  data () {
    return {
      foo: "It's data foo."
    }
  }
};
</script>

<style lang="scss" scoped>
.TestComponent {
  color: $primary;
}
</style>