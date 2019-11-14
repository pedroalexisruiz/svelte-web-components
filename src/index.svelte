<script>
  export let name = "";

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

<svelte:options tag="my-component" />
<h1>Hola mi nombre es {name}</h1>
<input type="text" bind:value={name} on:keyup={notifiesNameChange} />
