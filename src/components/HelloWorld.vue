<template lang="pug">
  .hello
    h1 {{ msg }}
    p Current value {{ value }}
    button.hello__btn(
      @click="increase"
    ) +
    button.hello__btn(
      @click="decrease"
    ) -
    button.hello__btn(
      @click="double"
    ) x2
    button.hello__btn(
      @click="triple"
    ) x3
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  @Prop() private value!: number;

  increase() {
    this.$emit('increase');
  }

  decrease() {
    this.$emit('decrease');
  }

  double() {
    this.$emit('double');
  }

  triple() {
    this.$emit('triple');
  }
}
</script>


<style scoped lang="scss">
.hello {
  &__btn {
    width: 40px;
    height: 30px;
    outline: none;
    border: 1px solid black;
    border-radius: 5px;
    margin: 5px;
    font-size: 20px;
    &:hover {
      background: #e3e3e3;
    }
    &:active {
      background: #d1d1d1;
    }
  }
}
</style>
