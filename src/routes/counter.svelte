<script>
    let contador = 0;
    let disabled = false;

    let valor = "svelte";

    function desactivar(e) {
        // e.preventDefault();
        disabled = true;
    }

    const inc = () => (contador = contador + 1);
    const dec = () => (contador = contador - 1);
</script>

<main>
    <form action="/search" method="POST" on:submit|preventDefault={desactivar}>
        <p>
            <input type="text" bind:value={valor} {disabled} />
            <button type="submit" value="Buscar" {disabled}>Buscar</button>
        </p>
    </form>
    <h1>
        <button type="button"  on:click={dec}>-</button>
        {contador}
        <button type="button"  on:click={inc}>+</button>
    </h1>
</main>
