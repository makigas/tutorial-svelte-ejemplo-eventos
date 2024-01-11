<script>
    export let choices = ["red", "yellow","orange", "blue", "green"];
    export let value = choices[0];

    let backgrounds={
        red: 'silver',
        ornage: 'darkblue',
        blue:'yellow',
        green:'purple'
    }
</script>

<main>
    <!-- <p style:color={value} class="color"> -->
    <p 
    style:--bgcolor={backgrounds[value]}
    style:--fgcolor={value}
    class="color"
     >
        {value}
    </p>
    <select bind:value>
        {#each choices as choice}
            <option value={choice}>{choice}</option>
        {/each}
    </select>
</main>

<style>
    .color {
        background-color: var(--bgcolor);
        color: var(--fgcolor);

        font-size: 40px;
        margin: 0;
        line-height: 1;
        font-weight: bold;
    }
</style>
