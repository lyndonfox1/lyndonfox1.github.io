<template>
  <div>
    <div>Content</div>
    <p>Content data msg:{{users.msg}}</p>
  </div>
</template>

<script>
export default {
  name: "LyndonContent",
  props: ["users"]
};
</script>

<style scoped></style>