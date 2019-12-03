<script lang="ts">
  export let size: string = "1140 px";
  console.log("sizeContainer prueba", size);
</script>

<style lang="scss">
  @import "./styles.scss";

  .sura-container {
    margin: 0 auto;
    width: var(--size-container);
  }
</style>
<svelte:options tag="sura-header" />
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous" />
<header
  style="--size-container:{size}"
  class="sura-lib-d-f sura-lib-f-align-i-center header">
  <div class="sura-container sura-lib-px-3">
    <nav
      class="sura-lib-d-f sura-lib-f-align-i-center sura-lib-f-align-i-s-beetwen">
      <slot name="logo" />
      <slot name="menu" />
    </nav>
  </div>
</header>
