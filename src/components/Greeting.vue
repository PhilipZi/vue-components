<template>
  <div>
    <p v-if="age > 25">{{ msg }}</p>
    <p v-else>You must be 25 years or older to view the message</p>
  </div>
</template>

<script>
export default {
  name: "Greeting",
  props: ["age"],
  data() {
    return {
      msg: "hello world!",
    };
  },
};
</script>

<style scoped lang="scss">
p:hover {
  color: darken(#cc4444, 15%);
}
</style>
