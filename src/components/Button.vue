<template>
  <button class="c-Button" @click="$emit('test')">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'CButton',
  props: {
    text: String,
  },
}
</script>

<style lang="scss" scoped>
.c-Button {
  background-color: $primary;
  color: #fff;
}
</style>
