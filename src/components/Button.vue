<template>
  <button 
    class="c-Button" 
    :class="classes"
    @click="$emit('test')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'CButton',
  props: {
    text: String,
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.c-Button {
  padding: .5em 1em;

  border: 0;
  background-color: $default;
  color: $black;

  font-size: 1rem;

  &:hover {
    filter: brightness(0.9);
  }

  &._dark {
    background-color: $dark;
    color: $white;
  }

  &._primary {
    background-color: $primary;
    color: $white;
  }
}
</style>
