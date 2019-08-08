import { Component, Vue } from 'vue-property-decorator';

@Component export default class Mixin extends Vue {
  getDouble(value: number) {
    return value * 2;
  }

  getTriple(value: number) {
    return value * 3;
  }
}
