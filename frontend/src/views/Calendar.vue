<template>
  <div class="content">
    <div class="bgdark">
      <section>
        <div class="container text-center">
          <div class="container">
            <div class="container" id="box">
              <h1>Agende sua consuta, agora !</h1>
            </div>
            <div
              class="row mx-auto text-center"
              style="width:100%;padding-top:140px"
            >
              <div class="col text-center">
                <select class="form-control  " id="inputState" name="horas">
                  <option selected disabled>Horas disponíveis</option>
                  <option>09:00 | Manhã </option>
                  <option>10:00 | Manhã </option>
                  <option>11:00 | Manhã </option>
                  <option>12:00 | Manhã </option>
                  <option>13:00 | Tarde </option>
                  <option> 14:00 | Tarde</option>
                  <option> 15:00 | Tarde</option>
                  <option>16:00 | Tarde</option>
                  <option>17:00 | Tarde</option>
                  <option>18:00 | Noite</option>
                  <option>19:00 | Noite</option>
                </select>
              </div>
              <div class="col text-center">
                <input
                  class="form-control"
                  type="date"
                  value="data"
                  name="data"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container text-center">
        <button class="btn btn-success" style="margin-top:34px">Agendar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Caledar",
  components: {},
  data() {
    return {
      data: "",
    };
  },
};
</script>
<style lang="css">
.bgdark {
  width: 100%;
  background-image: url(../assets/fotos/bk_agendar.jpg);
  position: absolute;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
section {
  padding-top: 150px;
  display: center;
}
.content {
  color: rgb(248, 236, 236);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.4rem;
  font-weight: bolder;
}

h1 {
  color: #fff;
  font-size: 40px;
  margin-bottom: -70px;
}
#box {
  width: 100%;
  height: 100%;
  background: #5cb85c88;
  border-radius: 20px;
}
#box h1 {
  display: center;
}
</style>
