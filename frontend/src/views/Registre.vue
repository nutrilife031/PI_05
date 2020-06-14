<template>
  <div class="bk">
    <div class="container mx-auto " style=" padding-top:98px;">
      <!-- Material form register -->
      <div class="card mx-auto bg-transparent" style="width:20rem">
        <h5
          class="card-header info-color white-text text-center py-4"
          id="NavBar1"
        >
          <strong style="color: #7e6363;">Cadastre-se </strong>
        </h5>

        <!--Card content-->
        <div class="card-body bg-transparent pt-0">
          <!-- Form -->
          <form
            class="text-center"
            style="color:#7e6363;margin-top: 3px;"
            action="#!"
          >
            <div class="form-row">
              <div class="col">
                <!-- First name -->
                <div class="md-form">
                  <input
                    type="text"
                    id="materialRegisterFormFirstName"
                    class="form-control"
                    name="nome"
                    v-model="nome"
                    placeholder="nome"
                  />
                </div>
              </div>
              <div class="col">
                <!-- Last name -->
                <div class="md-form">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="sobrenome"
                  />
                </div>
              </div>
            </div>

            <!-- E-mail -->
            <div class="md-form mt-0 my-1">
              <input
                type="email"
                id="materialRegisterFormEmail"
                class="form-control"
                placeholder="e-mail"
              />
            </div>

            <!-- Password -->
            <div class="md-form my-1">
              <input
                type="password"
                id="materialRegisterFormPassword"
                class="form-control"
                aria-describedby="materialRegisterFormPasswordHelpBlock"
                placeholder="senha"
              />
            </div>

            <!-- Phone number -->
            <div class="md-form my-1">
              <input
                type="phone"
                id="materialRegisterFormPhone"
                class="form-control"
                placeholder="telefone"
                aria-describedby="materialRegisterFormPhoneHelpBlock"
              />
            </div>
            <div class="form-row">
              <div class="col my-1">
                <!-- First name -->
                <div class="md-form">
                  <select id="inputState" class="form-control">
                    <option selected disabled>gênero</option>
                    <option>masculino</option>
                    <option>feminino</option>
                    <option>outro</option>
                  </select>
                </div>
              </div>
              <div class="col my-1">
                <!-- Last name -->
                <div class="md-form">
                  <input
                    type="text"
                    id="materialRegisterFormLastName"
                    class="form-control"
                    placeholder="idade"
                  />
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="col my-1">
                <!-- First name -->
                <input
                  type="text"
                  id="materialRegisterFormLastName"
                  class="form-control"
                  placeholder="peso"
                />
              </div>
              <div class="col my-1">
                <!-- Last name -->
                <div class="md-form">
                  <input
                    type="text"
                    id="materialRegisterFormLastName"
                    class="form-control"
                    placeholder="altura"
                  />
                </div>
              </div>
            </div>

            <!-- Newsletter -->

            <!-- Sign up button -->
            <button
              class="btn btn-info  btn-block my-4 "
              style=" background-color: #8fd8d2e1; color: #7e6363; font-weight: bold;"
              type="submit"
              v-on:click="cadastrado()"
            >
              Cadastrar
            </button>

            <!-- Social register -->

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
      <!-- Material form register -->
    </div>
  </div>
</template>
<script>
export default {
  name: "registre",
  data() {
    return {
      nome: "",
    };
  },
  methods: {
    cadastrado() {
      if (this.nome) {
        window.alert(this.nome + " cadastrado(a) com sucesso");
      } else {
        window.alert(" Erro ao cadastrar usuário");
      }
    },
  },
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
