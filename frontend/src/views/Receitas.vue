<template>
  <div>
    <div class="container  " style="margin-top:90px;padding-bottom:50px">
      <div class="row">
        <div class="col-xs-6  col-sm-4 ">
          <div class="container-fluid">
            <div class="hoverzoom" style="width:319px;  height:250px">
              <img
                class=""
                src="../assets/fotos/dieta01.png"
                alt="Hover Zoom CSS3"
                style="height:220px"
              />
              <div class="retina">
                <p style="font-size:25px">
                  Receitas práticas para o home office
                </p>
                <b-link
                  class="btn btn-success bg-success"
                  to="/dietas/homeoffice"
                  >Saiba mais</b-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-6   col-sm-4 ">
          <div class="container-fluid">
            <div class="hoverzoom" style="width:319px; height:250px">
              <img
                style="height:220px"
                src="../assets/fotos/sopa.jpg"
                alt="Hover Zoom CSS3"
              />
              <div class="retina">
                <p style="font-size:25px">Sopa de grão de bico com legumes</p>
                <b-link class="btn btn-success bg-success" to="/dietas/sopa"
                  >Saiba mais</b-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-6  col-sm-4  ">
          <div class="container">
            <div class="hoverzoom" style="width:319px; height:250px">
              <img
                class="img-fluid"
                style="height:220px"
                src="../assets/fotos/frutasvermelhas.png"
                alt="Hover Zoom CSS3"
              />
              <div class="retina">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Impedit, temporibus, repellat? Placeat nihil itaque culpa eu.
                </p>
                <a href="#">Saiba mais</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-6  col-sm-4 ">
          <div class="container">
            <div class="hoverzoom" style="width:319px;  height:250px">
              <img
                class=""
                src="../assets/fotos/panqueca.png"
                alt="Hover Zoom CSS3"
                style="height:220px"
              />
              <div class="retina">
                <p style="font-size:25px">
                  Receitas práticas para o home office
                </p>
                <b-link
                  class="btn btn-success bg-success"
                  to="/dietas/homeoffice"
                  >Saiba mais</b-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-6   col-sm-4 ">
          <div class="container">
            <div class="hoverzoom" style="width:319px;  height:250px">
              <img
                style="height:220px"
                src="../assets/fotos/postreino.png"
                alt="Hover Zoom CSS3"
              />
              <div class="retina">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Impedit, temporibus, repellat? Placeat nihil itaque culpa eu.
                </p>
                <a href="#">Saiba mais</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-6  col-sm-4 col-ms-4 ">
          <div class="container">
            <div class="hoverzoom" style="width:319px;  height:250px">
              <img
                class="img-fluid"
                style="height:220px"
                src="../assets/fotos/picole.png"
                alt="Hover Zoom CSS3"
              />
              <div class="retina">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Impedit, temporibus, repellat? Placeat nihil itaque culpa eu.
                </p>
                <a href="#">Saiba mais</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Receita1",
};
</script>
<style lang="css" scoped>
.hoverzoom {
  position: relative;
  width: 350px;
  height: 277px;
  overflow: hidden;
}
.hoverzoom img {
  width: 100%;
  border-radius: 2px;
  -webkit-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  -moz-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  -ms-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  -o-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
}
.hoverzoom:hover img {
  -webkit-transform: scale(1.5);
  -moz-transform: scale(1.5);
  -ms-transform: scale(1.5);
  -o-transform: scale(1.5);
  transform: scale(1.5);
}
.hoverzoom .retina {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  background: none repeat scroll 0 0 rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  text-align: center;
  padding: 30px;

  -webkit-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  -moz-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  -ms-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  -o-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
}
.hoverzoom:hover .retina {
  opacity: 1;
  box-shadow: inset 0 0 100px 50px rgba(0, 0, 0, 0.5);
}
.hoverzoom .retina p {
  color: #fff;
}
.hoverzoom .retina a {
  display: block;
  width: 150px;
  background: #6fc5e9;
  border: 1px solid #59afd4;
  border-radius: 4px;
  color: #fff;
  text-decoration: none;
  text-align: center;
  padding: 10px 15px;
  margin: 16px auto 0;
}
</style>
