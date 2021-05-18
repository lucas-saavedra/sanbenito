<template>
  <main>
    <Login/>
  </main>
</template>

<script>
import Login from "~/components/login";
export default {
  components: {Login},
  data() {
    return {};
  },

  head() {
    return {
      title: "San Benito - Acceso"
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
