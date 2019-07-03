
<template>
  <div class="bd-div">

    <app-header class="main-image-2" />
    <router-link to="/lyndon"><button id="back-btn"><i class="fas fa-long-arrow-alt-left"></i></button></router-link>
    <div class="logo-box">
      <img
        class="logo"
        alt="logo"
        src='./layout/img/Eage-logo-5.png'
      >
    </div>
    <h1 class="our-designer">Designs</h1>
    <div class="container">
      <h2>{{project.name}}</h2>
      <p>Created on: {{project.created_on | moment}}</p>
      <div
        v-for="image in project.modules"
        v-bind:key="image.sizes.max_1240"
      >
        <img v-bind:src="image.sizes.max_1240">
        <div class="row">
          <div class="col-sm">
            <h2>
              <i class="far fa-eye"></i>
              {{project.stats.views}}t
            </h2>
          </div>
          <div class="col-sm">
            <h2>
              <i class="far fa-thumbs-up"> </i>
              {{project.stats.appreciations}}
            </h2>
          </div>
          <div class="col-sm">
            <h2>
              <i class="far fa-comment"></i>
              {{project.stats.comments}}
            </h2>
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
import moment from "moment";
export default {
  name: "LyndonProjectDetails",
  components: {
    "app-header": LyndonHeader,
    "app-footer": LyndonFooter
  },
  data() {
    return {
      projects: [],
      project: {}
    };
  },

  created: function() {
    this.sourceChanged(this.$route.params.projectId);
  },

  methods: {
    sourceChanged: function(projectId) {
      this.$http
        .get("https://behance-mock-api.glitch.me/api/projects/" + projectId)
        .then(function(source) {
          this.project = source.body.project;
        });
    }
  },

  filters: {
    moment: function(timestamp) {
      //timestamp is returned from the mock API as a string, whereas it should be
      //an integer, so we need to change it to an integer before giving it to moment.js
      timestamp = parseInt(timestamp);
      return moment(timestamp).format("MMMM Do YYYY, h:mm:ss a");
    }
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
  margin-top: 30px;
  width: 30%;
  box-shadow: none;
  background: none;
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
.artist-img {
  margin: 0 auto;
  text-align: center;
}
img {
  width: 90%;
  height: 90%;
  box-shadow: 0 0 8px rgb(0, 0, 0);
  padding: 10px;
  background: rgb(213, 188, 142);
}
.far {
  padding: 20px;
}

.flex-container {
  height: 60px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
#back-btn {
  background: rgb(213, 188, 142);
  color: rgb(213, 188, 142);
  /* padding: 5px 10px; */
  border: 3px solid rgb(28, 24, 20);
  border-radius: 100px;
  width: 150px;
  margin: 20px;
  position: absolute;
  left: 20px;
}
i {
  color: rgb(254, 195, 58);
  font-size: 30px;
}
i:hover {
  text-shadow: 0 0 25px rgb(138, 88, 0), 0 0 5px rgb(28, 24, 20);
}
.text-box {
  margin: 0 auto;
  width: 1200px;
  /* background: rgb(255, 241, 216); */
}
.text-title {
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
  /* img {
    width: 80%;
  } */
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


