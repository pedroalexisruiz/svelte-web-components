<script lang="ts">
  export let name: string = "";

  function notifiesNameChange() {
    const event = new CustomEvent("name-changed", {
      detail: name,
      bubbles: true,
      cancelable: true,
      composed: true // makes the event jump shadow DOM boundary
    });

    this.dispatchEvent(event);
  }
</script>

<style lang="scss">
  @import "./styles.scss";
  .titulo {
    width: $ancho;
    height: $largo;
    color: black;
    border: solid;
    vertical-align: center;
  }
</style>

<svelte:options tag="my-component" />
<h1 class="titulo">Hola mi nombre es {name}</h1>
<input type="text" bind:value={name} on:keyup={notifiesNameChange} />
