<template>
  <div id="app2">
  <NavBar>
    
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
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
  background-color: #9acd32 !important;
}
</style>
