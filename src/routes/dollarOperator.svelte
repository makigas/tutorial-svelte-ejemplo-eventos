<script>
    import Input from '../lib/Input.svelte';
  
    let nombre="John"
    let apellido="Doe"

    //no recargable
    // let noombreCompleto = nombre+" "+apellido;


    let noombreCompleto;
    $: {
        noombreCompleto = nombre+" "+apellido;
    }
  </script>
  
  <main>
    <fieldset>
        <Input bind:value={nombre} label="Nombre" identifier="nombre" />
        <Input bind:value={apellido} label="Apellido"  identifier="apellido"/>
    </fieldset>

    <p class="label"> tu eres <strong>{nombre} {apellido}</strong></p>
    
  </main>
  
  <style>
    :global(body){
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 1rem;
    }

    :global(*){
      box-sizing: border-box;
    }
  </style>
  