<template>
  <div>
    <router-link
      id="back"
      to="/"
    ><i class="fas fa-long-arrow-alt-left"></i></router-link>

    <div class="nav">
      <router-link
        class="my-links"
        v-bind:to="'/lyndon'"
      >Home</router-link>|
      <router-link
        class="my-links"
        v-bind:to="'/lyndon-Designers'"
      >Design</router-link>|
    </div>
    <header>
      <div class="logo-box">
        <img
          class="logo"
          alt="logo"
          src='./img/Eage-logo-4.png'
        >
      </div>
      <div class="logo-box">
        <img
          class="logo-2"
          alt="logo-2"
          src='./img/Eage-logo-white.png'
        >

      </div>
      <div class="text-box">
        <h2 class="heading-secondary">Design Hub</h2>

        <p class="p-text">
          Take a look around and if you need anything,
          just let us know!
        </p>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>
import image from "./img"
<style scoped>
/* header {
  text-align: center;
  padding-top: 30px;
  padding-bottom: 700px;
} */
@import url("https://fonts.googleapis.com/css?family=Arimo:400,400i,700,700i");
.heading-secondary {
  padding: 0 0 15px 150px;
}
.my-links {
  color: rgb(254, 195, 58);
  margin-top: 15px;
  text-decoration: none;
  padding: 0 25px 0 25px;
  font-size: 1.2em;
  font-weight: bolder;
}
.nav {
  text-align: right;
  padding: 30px 60px 0 0;
  display: block;
}
.logo-box {
  position: absolute;
  top: 10%;
  left: 46%;
  transform: translate(-10%, -46%);
}

.text-box {
  position: absolute;
  top: 40%;
  left: 70%;
  transform: translate(-40%, -70%);
}
.logo {
  /* width: 300px; */
  display: block;
}
h2 {
  color: rgb(254, 195, 58);
  font-family: "Arimo", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
}
p {
  color: rgb(254, 195, 58);
}
.p-text {
  font-size: 1.1em;
}
.logo-2 {
  display: none;
}
i {
  position: absolute;
  left: 10px;
  color: rgb(254, 195, 58);
  font-size: 20px;
}
i:hover {
  text-shadow: 0 0 15px rgb(28, 24, 20), 0 0 3px rgb(0, 108, 0);
}
#back {
  color: brown;
}
@media only screen and (max-width: 1280px) {
  .logo {
    width: 120px;
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-5%, -50%);
  }
  .logo-2 {
    display: none;
  }
  .heading-secondary {
    font-size: 1.8em;
    padding: 0 0 15px 130px;
  }
}
@media only screen and (max-width: 1000px) {
  .logo {
    width: 100px;
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-5%, -50%);
  }
  .my-links {
    color: rgb(254, 195, 58);
    margin-top: 15px;
    text-decoration: none;
    padding: 0 10px 0 25px;
    font-size: 1em;
    font-weight: bolder;
  }
  .text-box {
    position: absolute;
    top: 35%;
    left: 70%;
    transform: translate(-35%, -70%);
  }
  .heading-secondary {
    font-size: 1.5em;
    padding: 0 0 15px 90px;
  }
  .p-text {
    font-size: 0.8em;
  }
  .logo-2 {
    display: none;
  }
}
@media only screen and (max-width: 750px) {
  .logo {
    width: 100px;
    position: absolute;
    top: 25%;
    left: 60%;
    transform: translate(-25%, -60%);
  }
  .my-links {
    color: rgb(254, 195, 58);
    margin-top: 15px;
    text-decoration: none;
    padding: 0 0 0 25px;
    font-size: 1em;
    font-weight: bolder;
  }
  .text-box {
    position: absolute;
    top: 35%;
    left: 70%;
    transform: translate(-35%, -70%);
  }
  .heading-secondary {
    font-size: 1.2em;
    padding: 0 0 10px 80px;
  }
  .p-text {
    font-size: 0.8em;
  }
  .logo-2 {
    display: none;
  }
}
@media only screen and (max-width: 650px) {
  .logo {
    width: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 0 0px;
  }
  .my-links {
    color: rgb(254, 195, 58);
    margin-top: 15px;
    text-decoration: none;
    padding: 0 0 0 25px;
    font-size: 1em;
    font-weight: bolder;
  }
  .text-box {
    position: absolute;
    top: 70%;
    left: 70%;
    transform: translate(-70%, -70%);
  }
  .heading-secondary {
    display: none;
  }
  .p-text {
    font-size: 0.8em;
  }
  .logo {
    display: none;
  }
  .p-text {
    display: none;
  }
  .logo-2 {
    display: block;
    width: 120px;
    position: absolute;
    top: 50px;
  }
  .my-links {
    text-align: center;
    margin: 0 auto;
  }
}
</style>


