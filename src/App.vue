<template lang="pug">
  #app
    img(alt="Vue logo" src="./assets/logo.png")
    HelloWorld(
      :msg="msg"
      :value="value"
      @double="double"
      @triple="triple"
      @increase="increase"
      @decrease="decrease")
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Mixin from './mixin/Mixin';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Mixins(Mixin) {
  msg = 'Welcome to Your Vue.js + TypeScript App'

  value = 0

  increase() {
    this.value += 1;
  }

  decrease() {
    this.value -= 1;
  }

  double() {
    const { value } = this;
    this.value = this.getDouble(value);
  }

  triple() {
    const { value } = this;
    this.value = this.getTriple(value);
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
