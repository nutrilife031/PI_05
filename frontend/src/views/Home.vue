<template>
  <div>
    <div style=" width: 100%;margin-top: 69px; ">
      <!--Carousel Wrapper-->
      <div
        id="carousel-example-2"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <!--Indicators-->
        <ol class="carousel-indicators">
          <li
            data-target="#carousel-example-2"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carousel-example-2" data-slide-to="1"></li>
          <li data-target="#carousel-example-2" data-slide-to="2"></li>
        </ol>
        <!--/.Indicators-->
        <!--Slides-->
        <div class="carousel-inner bg-dark" role="listbox">
          <div class="carousel-item active">
            <div class="view">
              <img
                class="d-block img-responsive w-100"
                src="../assets/fotos/blog-consulta-online-1200x900.jpg"
                style="height:539px"
                alt="First slide"
              />
              <div class="mask rgba-black-light"></div>
            </div>
            <div class="carousel-caption">
              <h3 class="h3-responsive text-white " id="NavBarText">
                Consulta Online
              </h3>
              <p>
                <b-link
                  class="btn btn-info"
                  id="NavBar1"
                  style="color: #7e6363;"
                  to="/agendar"
                >
                  Agendar</b-link
                >
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <!--Mask color-->
            <div class="view">
              <img
                class="d-block img-responsive w-100"
                src="../assets/fotos/academia.jpg"
                style="height:539px"
                alt="Second slide"
              />
              <div class="mask rgba-black-strong"></div>
            </div>
            <div class="carousel-caption">
              <h3 class="h3-responsive text-white" id="NavBarText">Dietas</h3>
              <p>
                <b-link
                  class="btn btn-info"
                  id="NavBar1"
                  to="/dietas"
                  style="color: #7e6363;"
                  >Começar</b-link
                >
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <!--Mask color-->
            <div class="view">
              <img
                class="d-block img-responsive w-100"
                src="../assets/fotos/plancha.jpg"
                style="height:539px"
                alt="Third slide"
              />
              <div class="mask rgba-black-slight"></div>
            </div>
            <div class="carousel-caption">
              <h3 class="h3-responsive text-white" id="NavBarText">
                Exercícios
              </h3>
              <p>
                <b-link
                  class="btn btn-info"
                  to="/videos"
                  style="color: #7e6363;"
                  id="NavBar1"
                  >Treinar</b-link
                >
              </p>
            </div>
          </div>
        </div>
        <!--/.Slides-->
        <!--Controls-->
        <a
          class="carousel-control-prev"
          href="#carousel-example-2"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carousel-example-2"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
        <!--/.Controls-->
      </div>
      <!--/.Carousel Wrapper-->
    </div>

    <div class="container-fluid">
      <footer class="page-footer bg-white font-small  pt-4">
        <div class="container-fluid ">
          <!-- Grid row -->
          <div class="row">
            <!-- Grid column -->
            <div class="col">
              <img
                class=" img-fluid img-thumbnail"
                src="../assets/fotos/logo2 (2)1.png"
                alt=" "
                style="width: 18rem; height:230px;border:none "
              />
            </div>
            <!-- Grid column -->

            <hr class="clearfix w-100 d-md-none" />

            <!-- Grid column -->
            <div class="col  ">
              <img
                class=" img-fluid img-thumbnail"
                src="../assets/fotos/homepag.png"
                style="width:23rem ;height:230px;border:none"
                alt=""
              />
            </div>
            <!-- Grid column -->

            <hr class="clearfix w-100 d-md-none" />

            <!-- Grid column -->
            <div class="col">
              <h3>Sobre nós</h3>

              <b-card-text class="text-justify">
                A Nutri Life é uma plataforma, que tem o objetivo de contribuir
                de forma gratuita em tomada de decisões na busca de uma
                alimentação equilibrada, saudável e prática. Além disso, têm
                disponibilidade de vídeos com exercícios físicos para praticar
                em casa. Pensando em todos que não querem sair de casa, poderá
                acessar do site ou do aplicativo. Sendo assim, o horário quem
                faz é você.
              </b-card-text>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
        <!-- Footer Links -->

        <hr />

        <!-- Call to action -->
        <ul class="list-unstyled list-inline text-center py-2">
          <li class="list-inline-item">
            <h5 class="mb-1" style="color: #7e6363;">Registre-se agora!</h5>
          </li>
          <li class="list-inline-item">
            <b-link
              to="/registre"
              class="btn btn-info btn-rounded"
              id="NavBar1"
              style="color: #7e6363;"
              >Registrar</b-link
            >
          </li>
        </ul>
        <!-- Call to action -->

        <hr />

        <!-- Social buttons -->
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a class="btn-floating btn-fb mx-1" href="" title="Facebook">
              <i class="fab fa-facebook-f text-primary"> </i>
            </a>
          </li>

          <li class="list-inline-item">
            <a class="btn-floating btn-gplus mx-1" href="" title="Gmail">
              <i class="fab fa-google text-primary"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-gplus  mx-1" href="" title="Instagram">
              <i class="fab fa-instagram"> </i>
            </a>
          </li>
        </ul>
        <!-- Social buttons -->

        <!-- Copyright -->

        <!-- Copyright -->
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {},
};
</script>
<style lang="css">
p {
  color: #7e6363;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
