<script>
    import Input from '../lib/Input.svelte';
  
    let nombre="John"
    let apellido="Doe"
  </script>
  
  <main>
    <fieldset>
        <Input bind:value={nombre} label="Nombre" identifier="nombre" />
        <Input bind:value={apellido} label="Apellido"  identifier="apellido"/>
    </fieldset>

    <p class="label"> tu eres <strong>{nombre} {apellido}</strong></p>
    
  </main>
  
  <style>
    .label{
        color:aqua;
        font-size: 1.3rem;
    }
  </style>
  