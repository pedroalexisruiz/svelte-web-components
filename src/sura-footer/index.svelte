<script lang="ts">
  let currentYear = new Date().getFullYear();
  export let logo: string = "";
</script>

<style lang="scss">
  @import "./styles.scss";
</style>

<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous" />
<svelte:options tag="sura-footer" />
<footer class="footer-container">
  <div class="container">
    <div class="row pt-3 pb-3">
      <div
        class="col-12 col-lg-6 footer-container__columns
        footer-container_border-right d-flex align-items-center
        justify-content-center align-items-lg-center justify-content-lg-end">
        <p class="footer-container__text mb-0">
          Copyright © {currentYear}. Todos los derechos reservados
        </p>
      </div>
      <div
        class="col-12 col-lg-6 footer-container__columns d-flex
        align-items-center justify-content-center justify-content-lg-start
        flex-column flex-lg-row mt-3 mt-lg-0">
        <p class="footer-container__text pr-2 mb-0">
          Contamos con el certificado de seguridad:
        </p>
        <div class="list-inline">
          <figure class="list-inline-item">
            <img src={logo} alt="Logo comodosecure" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</footer>
