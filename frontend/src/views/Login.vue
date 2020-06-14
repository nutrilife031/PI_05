<template>
  <div class="bk">
    <div class="container bg-tranparent" style=" padding-top:94px ;height:100%">
      <!-- Material form login -->
      <div class="card mx-auto bg-transparent" style="width:20rem; ">
        <h5
          class="card-header  white-text text-center py-4"
          style="background:#8fd8d2e1"
        >
          <strong style="color: #7e6363;">Entrar</strong>
        </h5>

        <!--Card content-->
        <div class="card-body  bg-transparent">
          <!-- Form -->
          <form
            class="text-center"
            style="color: #757575; margin-top: 4px;"
            action="#!"
          >
            <!-- Email -->
            <div class="md-form">
              <input
                type="email"
                id="materialLoginFormEmail"
                class="form-control"
                placeholder="email"
              />
            </div>

            <!-- Password -->
            <div class="md-form my-4">
              <input
                type="password"
                id="materialLoginFormPassword"
                class="form-control"
                placeholder="senha"
              />
            </div>

            <div class="d-flex justify-content-around">
              <div>
                <!-- Remember me -->
              </div>
              <div class="mx-auto">
                <!-- Forgot password -->

                <b-link
                  to=""
                  class=" mx-auto text-center"
                  style="text-decoration: none;"
                  >Esqueceu a senha?</b-link
                >
              </div>
            </div>

            <!-- Sign in button -->
            <b-link
              class="btn btn-info btn-block my-4"
              type="submit"
              style="color: #7e6363; font-weight: bold;  background:  #8fd8d298;   "
            >
              Entrar
            </b-link>

            <!-- Register -->

            <center>
              <b-link
                class="btn btn-info"
                to="/registre"
                style="text-decoration: none;margin-left:3px "
                >Cadastrar</b-link
              >
            </center>

            <!-- Social login -->
            <a type="button" class="btn-floating btn-fb btn-sm">
              <i
                style="font-size:1.4rem"
                class="fab fa-facebook-f text-primary"
              ></i>
            </a>
            <a type="button" class="btn-floating btn-tw btn-sm ">
              <i
                style="font-size:1.4rem"
                class="fab fa-instagram text-primary"
              ></i>
            </a>
          </form>
          <!-- Form -->
        </div>
      </div>
      <!-- Material form login -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>
<style lang="css">
.bk {
  margin: 0;
  padding: 0;
  width: 100%;
  background-image: url(../assets/fotos/alimentos-saudaveis.jpg);
  position: absolute;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
