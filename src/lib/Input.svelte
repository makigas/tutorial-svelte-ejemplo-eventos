<script>
    export let identifier;
    export let label;
    export let value;

    //css dinamics
    //conditional an css same name
    let invalid = value.length === 0;
    let valid = value.length > 0;

    function actualice() {
        invalid = value.length === 0;
        valid = value.length > 0;
    }
</script>

<p class:invalid class:valid>
    <label class="label" for={identifier}>{label}</label>
    <input id={identifier} type="text" bind:value on:keyup={actualice} />
</p>

<style>
    .label {
        font-weight: bold;
    }

    input {
        width: 100%;
        border: 1px solid gray;
        border-radius: 1px;
        padding: 5px;
    }

    input:hover {
        border-color: black;
    }

    .valid input {
        background-color: #c0f0c0;
    }

    .invalid input {
        background-color: red;
    }
</style>
