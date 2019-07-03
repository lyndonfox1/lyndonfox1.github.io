<template>
  <div class="container">
    <div class="row">

      <div class="col lyndon">
        <img
          class="eagle"
          src="../lyndon/layout/img/eagle-logo-1.png"
        >
        <router-link
          class="eagle-link"
          v-bind:to="'/lyndon'"
        >Lyndon </router-link>
        <router-link
          class="eagle-link"
          v-bind:to="'/lyndon'"
        > Click Me</router-link>
      </div>
    </div>

    <!-- <MyFooter class="footer" /> -->
  </div>

  <!-- <div>
    <h1>Hello</h1>
    <ul>
        <li><router-link v-bind:to="'/ash'">Ash</router-link></li>
        <li><router-link v-bind:to="'/tj'">Tj</router-link></li>
        <li><router-link v-bind:to="'/matt'">Matt</router-link></li>
        <li><router-link v-bind:to="'/lyndon'">Lyndon</router-link></li>
    </ul>
          
    <MyFooter />
  </div> -->
</template>

<script>
import MyFooter from "./MyFooter";

export default {
  name: "Home",
  components: {
    MyFooter
  }
};
</script>

<style scoped>
.col {
  min-height: 100px;
}

.lyndon {
  background-color: lightsalmon;
  padding: 50px;
}
.eagle {
  width: 100%;
}
.eagle-link {
  padding: 50px;
  text-decoration: none;
  font-size: 30px;
  color: rgb(75, 40, 10);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
}
</style>
