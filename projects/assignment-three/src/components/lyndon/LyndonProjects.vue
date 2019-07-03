<template>
  <div class="bd-div">
    <app-header class="main-image-2" />
    <router-link to="/lyndon"><button id="back-btn"><i class="fas fa-long-arrow-alt-left"></i></button></router-link>
    <!-- <router-link :to="'./ModalPage'"></router-link> -->
    <div class="container">
      <div class="logo-box">
        <img
          class="logo"
          alt="logo"
          src='./layout/img/Eage-logo-5.png'
        >
      </div>
      <h1 class="our-designer">Our Designs</h1>
      <div
        v-for="project in projects"
        v-bind:key="project.id"
      >
        <!-- <p>{{project.url}}</p> -->

        <div class="row text-box">
          <div class="col-md text-title">
            <h2>{{project.name}}</h2>
            <p>Created on: {{project.created_on | moment}}</p>
            <p>Published on: {{project.published_on | moment}}</p>

            <div> <img
                @click="navigateTo(project.id)"
                :src="project.covers['230']"
                alt="covers"
              >

            </div>

            <div class="flex-container">
              <div>
                <p><i class="far fa-eye"></i> Views: {{project.stats.views}}</p>
              </div>
              <div>
                <p><i class="far fa-thumbs-up"></i> Appreciations: {{project.stats.appreciations}}</p>
              </div>
              <div>
                <p><i class="far fa-comment"></i> Comments: {{project.stats.comments}}</p>
              </div>

            </div>
            <hr class="hr">
          </div>
        </div>
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script>
import LyndonHeader from "./layout/LyndonHeader.vue";
import LyndonFooter from "./layout/LyndonFooter.vue";
import moment from "moment";
export default {
  name: "Projects",
  props: [""],
  components: {
    "app-header": LyndonHeader,
    "app-footer": LyndonFooter
  },
  data() {
    return {
      projects: [],
      projectId: [],
      project: {}
    };
  },
  created: function() {
    console.log("params", this.$route.params);
    if (this.$route.params.userId) {
      this.$http
        .get(
          "https://behance-mock-api.glitch.me/api/users/" +
            this.$route.params.userId +
            "/projects"
        )

        .then(
          response => {
            this.projects = response.body.projects;
            console.log("data", response);
          }
          // response => {
          //   console.log("error callback");
          // }
        );
    }
  },
  filters: {
    moment: function(timestamp) {
      //timestamp is returned from the mock API as a string, whereas it should be
      //an integer, so we need to change it to an integer before giving it to moment.js
      timestamp = parseInt(timestamp);
      return moment(timestamp).format("MMMM Do YYYY, h:mm:ss a");
    }
  },
  methods: {
    navigateTo: function(projectId) {
      this.$router.push({
        name: "ProjectDetails",
        params: { projectId: projectId }
      });
      //  console.log(project.id)
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
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
}
h1 {
  text-align: center;
  font-size: 3em;
}
i {
  color: rgb(254, 195, 58);
  font-size: 40px;
}
i:hover {
  text-shadow: 0 0 25px rgb(138, 88, 0), 0 0 5px rgb(28, 24, 20);
}
.bd-div {
  background-color: rgb(255, 241, 216);
}
.text-title {
  text-align: center;
}
.our-designer {
  padding: 50px 0 20px 0;
  color: rgb(0, 0, 0);
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  text-align: center;
}
.text-box {
  margin: 0 auto;
  width: 1200px;
  /* background: rgb(255, 241, 216); */
}
h2 {
  color: rgb(254, 195, 58);
  font-family: "Arimo", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  padding: 45px;
}
p {
  color: rgb(113, 79, 0);
  font-family: "Arimo", sans-serif;
  font-weight: lighter;
  padding: 20px;
  font-size: 20px;
}
.hr {
  margin-top: 60px;
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
img {
  width: 550px;
  box-shadow: 0 0 8px rgb(0, 0, 0);
  padding: 10px;
  background: rgb(213, 188, 142);
}
.far {
  padding: 20px;
}
.logo {
  border: none;
  margin-top: 40px;
  width: 40%;
  box-shadow: none;
  background: none;
}
.logo-box {
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
}
</style>


