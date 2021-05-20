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
// import axios from 'axios';
const axios = require('axios');

export default {
  name: "TestComponent",
  props: {
    hoge: String,
  },
  data () {
    return {
      foo: "It's data foo.",
      skills: []
    }
  },
  methods: {
    MySkill: function() {
      // axios.get('../datas/mySkill.json')
      // .then(response => (this.skills = response))
      const skillData = axios.get('../datas/mySkill.json');
      this.skills = skillData;
    }
  },
  mounted () {
    this.MySkill();
  }
};
</script>

<style lang="scss" scoped>
.TestComponent {
  color: $primary;
}
</style>