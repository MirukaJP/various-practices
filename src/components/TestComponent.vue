<template>
  <div class="TestComponent">
    <p>
      Test Component.<br>
      {{ foo }}<br>
      {{ hoge }}
    </p>
    <p>
      {{ isToggle }}<br>
      <c-button text="Hey!" @test="ButtonAction" />
    </p>
    <transition name="fade">
      <p :key="isToggle">
        {{ isToggle ? skills : topics }}
      </p>
    </transition>
  </div>
</template>

<script>
import CButton from './Button.vue';
import mySkill from '../datas/mySkill.json';
import Topics from '../datas/topics.json';

export default {
  name: "TestComponent",
  props: {
    hoge: String,
  },
  components: {
    CButton,
  },
  data () {
    return {
      foo: "It's data foo.",
      isToggle: true,
      skills: mySkill,
      topics: Topics
    }
  },
  methods: {
    ButtonAction: function() {
      this.isToggle = !this.isToggle;
    }
  },
  created () {}
};
</script>

<style lang="scss" scoped>
.TestComponent {
  color: $primary;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>