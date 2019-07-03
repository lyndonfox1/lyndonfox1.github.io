<template>
  <div class="bd-div">

    <app-header class="main-image-2" />
    <div class="logo-box">
      <img
        class="logo"
        alt="logo"
        src='./layout/img/Eage-logo-5.png'
      >
    </div>
    <h1 class="our-designer">Designs</h1>
    <div class="container">
      <div
        class="container"
        v-for="user in users"
        :key="user.id"
      >

        <div class="row">
          <div class="col-md">

            <h2>
              {{ user.display_name }}</h2>
            <p>{{ user.occupation}}</p>
            <p> Nationality: {{ user.city}}, {{user.country}}</p>
            <p>Skills: {{ user.fields}}</p>
            <p>{{user.website}}</p>
            <div class="box-container"> <img
                class="artist-img"
                :src="user.images['138']"
                alt="artist"
              ></div>
          </div>
        </div>

      </div>

    </div>

    <app-footer />
  </div>
</template>
<script>
import LyndonHeader from "./layout/LyndonHeader";
import LyndonFooter from "./layout/LyndonFooter";
export default {
  //   name: Designers
  components: {
    "app-header": LyndonHeader,
    "app-footer": LyndonFooter
  },
  data() {
    return {
      users: []
    };
  },
  created: function() {
    this.$http
      .get("https://behance-mock-api.glitch.me/api/users")
      .then(function(data) {
        this.users = data.body.users;
      });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Arimo:400,400i,700,700i");
@import url("https://fonts.googleapis.com/css?family=Heebo:100,300,400,500,700,800,900");
.main-image-2 {
  height: 95vh;
  width: 100vw;
  height: 1000px;
  background-image: url(layout/img/header-2.jpg);
  background-repeat: no-repeat, repeat;
  background-size: cover;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
}
h1 {
  text-align: center;
  font-size: 3em;
}
.bd-div {
  background-color: rgb(255, 241, 216);
}
.our-designer {
  padding: 50px 0 20px 0;
  color: rgb(0, 0, 0);
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  margin-top: 20px;
}
.logo {
  border: none;
  margin-top: 40px;
  width: 27%;
}
.logo-box {
  text-align: center;
}
h2 {
  text-transform: uppercase;
  font-weight: 400;
  font-family: "Arimo", sans-serif;
  color: rgb(254, 195, 58);
  text-align: center;
  margin-bottom: 40px;
  margin-top: 40px;
}
p {
  color: rgb(55, 38, 0);
  text-align: center;
}
.box-container {
  width: 30%;
  margin: 0 auto;
}
.artist-img {
  height: 350px;
  margin: 0 auto;
  text-align: center;
}
@media only screen and (max-width: 1980px) {
  .main-image-2 {
    width: 100%;
    height: 900px;
  }
}
@media only screen and (max-width: 1680px) {
  .main-image-2 {
    width: 100%;
    height: 800px;
  }
}
@media only screen and (max-width: 1480px) {
  .main-image-2 {
    width: 100%;
    height: 680px;
  }
}
@media only screen and (max-width: 1280px) {
  .main-image-2 {
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
  .artist-img {
    height: 120%;
    margin: 0 auto;
    text-align: center;
  }
}
@media only screen and (max-width: 1100px) {
  .main-image {
    width: 100%;
    height: 540px;
  }
  .artist-img {
    height: 100%;
    margin: 0 auto;
    text-align: center;
  }
}
</style>


