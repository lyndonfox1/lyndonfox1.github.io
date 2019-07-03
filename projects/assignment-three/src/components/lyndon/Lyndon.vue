<template>
  <div class="bd-div">
    <app-header class="main-image" />
    <div class="container">
      <div class="logo-box">
        <img
          class="logo"
          alt="logo"
          src='./layout/img/Eage-logo-5.png'
        >
      </div>
      <h5 class="eagle">Your Premier Design Agency</h5>
      <p class="art-p">Our skill in design is your dream come true</p>
      <h1 class="our-designer">Our Designers</h1>
      <div class="designers row">
        <div class="col-md">
          <img
            @click="navigateTo('55c5d1bf-2d0f-49b6-9415-f7221bed2df5')"
            class="bg-color"
            src="./layout/img/allef.jpg"
            width="300"
            alt="designer-1"
          >
          <button @click="selectTab(1)">
            <h4>Aldo Crusher</h4>
          </button>
        </div>
        <div class="col-md">
          <img
            @click="navigateTo('a4d57bd1-a9b9-4c6c-af55-767537bab564')"
            class="bg-color"
            src="./layout/img/blake.jpg"
            width="300"
            alt="designer-2"
          >
          <button @click="selectTab(2)">
            <h4>Alessia Sistori</h4>
          </button>
        </div>
        <div class="col-md">
          <img
            @click="navigateTo('075ca436-36ce-4af4-bff7-5ba04f2be682')"
            class="bg-color"
            src="./layout/img/caleb.jpg"
            width="300"
            alt="designer-3"
          >
          <button @click="selectTab(3)">
            <h4>Dani Diez</h4>
          </button>
        </div>
        <div class="main-pic-cent">
          <div
            v-if="currentTab == 1"
            class="my-text"
          >

            <div class="main-pic">
              <img
                class="bg-color hey"
                src="./layout/img/caso.png"
                alt="caso"
              >
            </div>
          </div>
          <div
            v-if="currentTab == 2"
            class="my-text"
          >

            <div class="main-pic">
              <img
                class="bg-color hey"
                src="./layout/img/PURELEI.png"
                alt="purelei"
              >
            </div>
          </div>
          <div
            v-if="currentTab == 3"
            class="my-text"
          >
            <div class="main-pic">
              <img
                class="bg-color hey"
                src="./layout/img/sword.png"
                alt="sword"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h4 class="Preview">Preview</h4>
    </div>
    <app-footer />
  </div>
</template>

<script>
// import Designers from "./Designers";
import LyndonHeader from "./layout/LyndonHeader";
import LyndonFooter from "./layout/LyndonFooter";
export default {
  name: "Lyndon",
  components: {
    "app-header": LyndonHeader,
    "app-footer": LyndonFooter
  },
  data: function() {
    return {
      currentTab: 1,
      projects: []
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.currentTab = selectedTab;
    },
    navigateTo: function(userId) {
      this.$router.push({ name: "projects", params: { userId: userId } });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Heebo:100,300,400,500,700,800,900");
@import url("https://fonts.googleapis.com/css?family=Marck+Script");
.main-image {
  height: 95vh;
  width: 100vw;
  height: 1000px;
  background-image: url(layout/img/header.jpg);
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
}
h1 {
  text-align: center;
  font-size: 3em;
}
.eagle {
  font-family: "Marck Script", cursive;
  font-size: 2.5em;
  padding-top: 15px;
  text-align: center;
  color: black;
}
.logo {
  border: none;
  width: 45%;
}
.logo-box {
  text-align: center;
}
.our-designer {
  padding: 50px 0 20px 0;
  color: rgb(0, 0, 0);
  font-family: "Heebo", sans-serif;
  font-weight: 400;
}
.designers {
  /* width: 1200px; */
  text-align: center;
  padding-top: 20px;
  margin: 0 auto;
}
.art-p {
  font-family: "Marck Script", cursive;
  text-align: center;
  font-size: 1.2em;
  color: black;
}
img {
  margin: 0 20px;
  text-align: center;
  padding: 30px;
  /* border: 1px solid  #222; */
  border-style: outset;
  border-color: rgb(176, 155, 118);
  border-width: 2px;
  margin: 10px;
}
.desiger-box {
  padding: 30px;
}
.bg-color {
  background-color: rgb(213, 188, 142);
}
.main-pic {
  text-align: center;
}
.main-pic-cent {
  margin: 0 auto;
  padding: 40px 0 10px 0;
}
.bd-div {
  background-color: rgb(255, 241, 216);
}
button {
  background: rgb(28, 24, 20);
  color: rgb(213, 188, 142);
  padding: 10px 20px;
  border: 2px solid rgb(213, 188, 142);
  border-radius: 100px;
  width: 250px;
  margin: 10px;
}
.hey {
  width: 700px;
}
.Preview {
  text-align: center;
  padding-top: 30px;
}
@media only screen and (max-width: 1980px) {
  .main-image {
    width: 100%;
    height: 900px;
  }
}
@media only screen and (max-width: 1680px) {
  .main-image {
    width: 100%;
    height: 800px;
  }
}
@media only screen and (max-width: 1480px) {
  .main-image {
    width: 100%;
    height: 680px;
  }
}
@media only screen and (max-width: 1280px) {
  .main-image {
    width: 100%;
    height: 600px;
  }
  img {
    width: 80%;
  }
  button {
    width: 180px;
    margin: 10px;
    padding: 7px 15px;
  }
  h4 {
    font-size: 1.3em;
  }
  .hey {
    width: 500px;
  }
}
@media only screen and (max-width: 1100px) {
  .main-image {
    width: 100%;
    height: 540px;
  }
}
@media only screen and (max-width: 1000px) {
  .main-image {
    width: 120%;
    height: 500px;
  }
  img {
    width: 80%;
  }
  button {
    width: 180px;
    margin: 10px;
    padding: 7px 15px;
  }
  h4 {
    font-size: 1.3em;
  }
  .hey {
    width: 500px;
  }
}
@media only screen and (max-width: 900px) {
  .main-image {
    width: 120%;
    height: 500px;
  }
}
@media only screen and (max-width: 750px) {
  .main-image {
    width: 100%;
  }
}
@media only screen and (max-width: 600px) {
  .main-image {
    width: 100%;
  }
}
@media only screen and (max-width: 500px) {
  .main-image {
    width: 100%;
  }
  .hey {
    width: 400px;
  }
}
@media only screen and (max-width: 400px) {
  .main-image {
    width: 100%;
  }
  .hey {
    width: 350px;
  }
}
</style>
