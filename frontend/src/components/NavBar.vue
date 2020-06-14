<template>
  <div>
    <div class="" id="NavBar1">
      <div class="container">
        <div class="container    ">
          <!-- <NavBar> iníco -->
          <nav
            class="navbar fixed-top navbar-expand-lg  navbar-expand-xs navbar-expand-sm navbar-light  "
            id="NavBar1"
          >
            <b-link
              class="navbar-brand "
              style="font-size: 26px ; color:#7e6363; margin-left:30px; margin-top:-10px"
              to="/"
              ><img
                src="../assets/fotos/logo2 (2)1.png"
                style="width: 80px;height: 63px;"
                alt=""
            /></b-link>

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item ">
                  <b-link
                    class="nav-link "
                    style="color:#7e6363;font-size: large; "
                    to="/"
                    >Home
                  </b-link>
                </li>

                <li class="nav-item dropdown " id="drop">
                  <b-link
                    class="nav-link dropdown-toggle  "
                    style="color:#7e6363;font-size: large;"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Serviços
                  </b-link>
                  <div
                    class="dropdown-menu"
                    style="color: #7e6363;    background-color:#8fd8d2e1  !important;"
                    id="dropdawhs"
                    daria-labelledby="navbarDropdown"
                  >
                    <b-link
                      class="dropdown-item "
                      id="dropdawhs"
                      to="/dietas"
                      style="text-decoration: solid; color: #7e6363;    background-color: #8fd8d21c !important;"
                      title="click"
                      >Receitas saudáveis</b-link
                    >
                    <b-link
                      class="dropdown-item"
                      style="color: #7e6363;   background-color: #8fd8d21c !important;"
                      id=" dropdawhs"
                      to="/videos"
                      title="click"
                      >Vídeos</b-link
                    >
                    <b-link
                      class="dropdown-item"
                      style="color: #7e6363;    background-color: #8fd8d21c !important;"
                      id=" dropdawhs"
                      to="/agendar"
                      title="click"
                      >Consulta Online</b-link
                    >
                  </div>
                </li>
                <li class="nav-item"></li>
                <li class="nav-item" v-if="home == true">
                  <h1>Hello</h1>
                </li>
                <li class="nav-item" v-else>
                  <b-link
                    class="btn  "
                    style="color:#7e6363;font-size: large; "
                    id="btnGo"
                    to="/login"
                    >Entrar</b-link
                  >
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {},
  data() {
    return {};
  },
};
</script>
<style lang="css"></style>
