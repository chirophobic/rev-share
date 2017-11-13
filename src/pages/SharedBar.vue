<template>
<div>
    <h1>Shared Bar</h1>
    <p>Bar hash: {{ids}}</p>
</div>
</template>

<script>
import { decodeBarIDs } from "../util";

export default {
  data() {
    return {
      ids: decodeBarIDs(this.$route.params.hash)
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
