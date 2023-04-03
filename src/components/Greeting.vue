<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "Greeting",
  data() {
    return {
      msg: "hello world!",
    };
  },
};
</script>
