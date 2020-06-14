<template>
  <div class="container">
    <div>
      <div class="container-fluid  " style="padding-top:92px">
        <div class=" container " style="width:300px">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <b-link class="page-link" to="/videos" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </b-link>
              </li>
              <li class="page-item">
                <b-link class="page-link" to="/videos">1</b-link>
              </li>
              <li class="page-item">
                <b-link class="page-link" to="/videosdois">2</b-link>
              </li>

              <li class="page-item">
                <b-link class="page-link" to="/videosdois" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </b-link>
              </li>
            </ul>
          </nav>
        </div>
        <!-- Grid row -->
        <div class="row">
          <!-- Grid column -->
          <div class="col-lg-4 col-md-12 mb-4">
            <!--Modal: Name-->
            <div
              class="modal fade"
              id="modal1"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg" role="document">
                <!--Content-->
                <div class="modal-content">
                  <!--Body-->
                  <div class="modal-body mb-0 p-0">
                    <div
                      class="embed-responsive embed-responsive-16by9 z-depth-1-half"
                    >
                      <iframe
                        class="embed-responsive-item"
                        src="https://www.youtube.com/embed/79BZELABG0E"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>

                  <!--Footer-->
                  <div class="modal-footer justify-content-center">
                    <span class="mr-4">Spread the word!</span>
                    <a type="button" class="btn-floating btn-sm btn-fb"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                    <!--Twitter-->
                    <a type="button" class="btn-floating btn-sm btn-tw"
                      ><i class="fab fa-twitter"></i
                    ></a>
                    <!--Google +-->
                    <a type="button" class="btn-floating btn-sm btn-gplus"
                      ><i class="fab fa-google-plus-g"></i
                    ></a>
                    <!--Linkedin-->
                    <a type="button" class="btn-floating btn-sm btn-ins"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>

                    <button
                      type="button"
                      class="btn btn-outline-primary btn-rounded btn-md ml-4"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
                <!--/.Content-->
              </div>
            </div>
            <!--Modal: Name-->

            <a class="btn btn-light bg-white"
              ><img
                class="img-fluid z-depth-1"
                src="../assets/fotos/mqdefault_6s.webp"
                alt="video"
                data-toggle="modal"
                data-target="#modal1"
            /></a>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-lg-4 col-md-6 mb-4">
            <!--Modal: Name-->
            <div
              class="modal fade"
              id="modal6"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg" role="document">
                <!--Content-->
                <div class="modal-content">
                  <!--Body-->
                  <div class="modal-body mb-0 p-0">
                    <div
                      class="embed-responsive embed-responsive-16by9 z-depth-1-half"
                    >
                      <iframe
                        class="embed-responsive-item"
                        src="https://www.youtube.com/embed/A0bGFiVT0T4"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>

                  <!--Footer-->
                  <div class="modal-footer justify-content-center">
                    <span class="mr-4">Spread the word!</span>
                    <a type="button" class="btn-floating btn-sm btn-fb"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                    <!--Twitter-->
                    <a type="button" class="btn-floating btn-sm btn-tw"
                      ><i class="fab fa-twitter"></i
                    ></a>
                    <!--Google +-->
                    <a type="button" class="btn-floating btn-sm btn-gplus"
                      ><i class="fab fa-google-plus-g"></i
                    ></a>
                    <!--Linkedin-->
                    <a type="button" class="btn-floating btn-sm btn-ins"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>

                    <button
                      type="button"
                      class="btn btn-outline-primary btn-rounded btn-md ml-4"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
                <!--/.Content-->
              </div>
            </div>
            <!--Modal: Name-->

            <a class="btn btn-light bg-white"
              ><img
                class="img-fluid z-depth-1"
                src="../assets/fotos/carol02.jpg"
                alt="video"
                data-toggle="modal"
                data-target="#modal6"
            /></a>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-lg-4 col-md-6 mb-4">
            <!--Modal: Name-->
            <div
              class="modal fade"
              id="modal4"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg" role="document">
                <!--Content-->
                <div class="modal-content">
                  <!--Body-->
                  <div class="modal-body mb-0 p-0">
                    <div
                      class="embed-responsive embed-responsive-16by9 z-depth-1-half"
                    >
                      <iframe
                        class="embed-responsive-item"
                        src="https://www.youtube.com/embed/djDfA3fnOak"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>

                  <!--Footer-->
                  <div class="modal-footer justify-content-center">
                    <span class="mr-4">Spread the word!</span>
                    <a type="button" class="btn-floating btn-sm btn-fb"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                    <!--Twitter-->
                    <a type="button" class="btn-floating btn-sm btn-tw"
                      ><i class="fab fa-twitter"></i
                    ></a>
                    <!--Google +-->
                    <a type="button" class="btn-floating btn-sm btn-gplus"
                      ><i class="fab fa-google-plus-g"></i
                    ></a>
                    <!--Linkedin-->
                    <a type="button" class="btn-floating btn-sm btn-ins"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>

                    <button
                      type="button"
                      class="btn btn-outline-primary btn-rounded btn-md ml-4"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
                <!--/.Content-->
              </div>
            </div>
            <!--Modal: Name-->

            <a class="btn btn-light bg-white"
              ><img
                class="img-fluid z-depth-1"
                src="../assets/fotos/carol03.jpg"
                alt="video"
                data-toggle="modal"
                data-target="#modal4"
            /></a>
          </div>
          <!-- Grid column -->
        </div>

        <!-- Grid row -->
        <div class="row" style="padding-bottom:50px">
          <!-- Grid column -->
          <div class="col-lg-4 col-md-12 mb-4">
            <!--Modal: Name-->
            <div
              class="modal fade"
              id="modal2"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg" role="document">
                <!--Content-->
                <div class="modal-content">
                  <!--Body-->
                  <div class="modal-body mb-0 p-0">
                    <div
                      class="embed-responsive embed-responsive-16by9 z-depth-1-half"
                    >
                      <iframe
                        class="embed-responsive-item"
                        src="https://www.youtube.com/embed/sXSzAeOADbE"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>

                  <!--Footer-->
                  <div class="modal-footer justify-content-center">
                    <span class="mr-4">Spread the word!</span>
                    <a type="button" class="btn-floating btn-sm btn-fb"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                    <!--Twitter-->
                    <a type="button" class="btn-floating btn-sm btn-tw"
                      ><i class="fab fa-twitter"></i
                    ></a>
                    <!--Google +-->
                    <a type="button" class="btn-floating btn-sm btn-gplus"
                      ><i class="fab fa-google-plus-g"></i
                    ></a>
                    <!--Linkedin-->
                    <a type="button" class="btn-floating btn-sm btn-ins"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>

                    <button
                      type="button"
                      class="btn btn-outline-primary btn-rounded btn-md ml-4"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
                <!--/.Content-->
              </div>
            </div>
            <!--Modal: Name-->

            <a class="btn btn-light bg-white"
              ><img
                class="img-fluid z-depth-1"
                src="../assets/fotos/yogaCostas.jpg"
                alt="video"
                data-toggle="modal"
                data-target="#modal2"
            /></a>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-lg-4 col-md-6 mb-4">
            <!--Modal: Name-->
            <div
              class="modal fade"
              id="modal3"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg" role="document">
                <!--Content-->
                <div class="modal-content">
                  <!--Body-->
                  <div class="modal-body mb-0 p-0">
                    <div
                      class="embed-responsive embed-responsive-16by9 z-depth-1-half"
                    >
                      <iframe
                        class="embed-responsive-item"
                        src="https://www.youtube.com/embed/GiQP8vbsRBE"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>

                  <!--Footer-->
                  <div class="modal-footer justify-content-center">
                    <span class="mr-4">Spread the word!</span>
                    <a type="button" class="btn-floating btn-sm btn-fb"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                    <!--Twitter-->
                    <a type="button" class="btn-floating btn-sm btn-tw"
                      ><i class="fab fa-twitter"></i
                    ></a>
                    <!--Google +-->
                    <a type="button" class="btn-floating btn-sm btn-gplus"
                      ><i class="fab fa-google-plus-g"></i
                    ></a>
                    <!--Linkedin-->
                    <a type="button" class="btn-floating btn-sm btn-ins"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>

                    <button
                      type="button"
                      class="btn btn-outline-primary btn-rounded btn-md ml-4"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
                <!--/.Content-->
              </div>
            </div>
            <!--Modal: Name-->

            <a class="btn btn-light bg-white"
              ><img
                class="img-fluid z-depth-1"
                src="../assets/fotos/yogaGestantes.jpg"
                alt="video"
                data-toggle="modal"
                data-target="#modal3"
            /></a>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-lg-4 col-md-6 mb-4">
            <!--Modal: Name-->
            <div
              class="modal fade"
              id="modal8"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg" role="document">
                <!--Content-->
                <div class="modal-content">
                  <!--Body-->
                  <div class="modal-body mb-0 p-0">
                    <div
                      class="embed-responsive embed-responsive-16by9 z-depth-1-half"
                    >
                      <iframe
                        class="embed-responsive-item"
                        src="https://www.youtube.com/embed/phmPzI44aLU"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>

                  <!--Footer-->
                  <div class="modal-footer justify-content-center">
                    <span class="mr-4">Spread the word!</span>
                    <a type="button" class="btn-floating btn-sm btn-fb"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                    <!--Twitter-->
                    <a type="button" class="btn-floating btn-sm btn-tw"
                      ><i class="fab fa-twitter"></i
                    ></a>
                    <!--Google +-->
                    <a type="button" class="btn-floating btn-sm btn-gplus"
                      ><i class="fab fa-google-plus-g"></i
                    ></a>
                    <!--Linkedin-->
                    <a type="button" class="btn-floating btn-sm btn-ins"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>

                    <button
                      type="button"
                      class="btn btn-outline-primary btn-rounded btn-md ml-4"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
                <!--/.Content-->
              </div>
            </div>
            <!--Modal: Name-->

            <a class="btn btn-light bg-white"
              ><img
                class="img-fluid z-depth-1"
                style="width:20rem"
                src="../assets/fotos/yogaPerde.jpg"
                alt="video"
                data-toggle="modal"
                data-target="#modal8"
            /></a>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Videos",
};
</script>
<style lang="css"></style>
