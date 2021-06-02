<template>
  <div class="TestComponent">
    <p>
    Test Component.<br>
    {{ foo }}
    </p>
  <p>
    {{ skills }}
  </p>
  </div>
</template>

<script>
import mySkill from '../datas/mySkill.json';

export default {
  name: "TestComponent",
  props: {
    hoge: String,
  },
  data () {
    return {
      foo: "It's data foo.",
      skills: mySkill
    }
  },
  // methods: {
  //   MySkill: function() {}
  // },
  // created () {}
};
</script>

<style lang="scss" scoped>
.TestComponent {
  color: $primary;
}
</style>