<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  data: () => {
    return {
      home: true,
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/_variables.scss";
@import "bootstrap/scss/bootstrap";
@import "./assets/scss/_bootswatch.scss";
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
.navbar-default .navbar-brand a:hover {
  text-decoration: none;
}
a {
  color: white;
}
.navbar a:hover {
  color: white !important;
}
#NavBar1 {
  background-color: #8fd8d2f8 !important;
}
#drop {
  background-color: #8fd8d21c !important;
}
#btnGo:hover {
  background-color: #b0c4de !important;
  color: #fff !important;
}
</style>
