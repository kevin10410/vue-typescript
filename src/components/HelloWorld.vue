<template lang="pug">
  .hello
    h1 {{ msg }}
    p Current value {{ value }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  @Prop() private value!: number;
}
</script>


<style scoped lang="scss">
</style>
