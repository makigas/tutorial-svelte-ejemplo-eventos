<script>
    import Input from '../lib/Input.svelte';
   
  
    let nombre="John"
    let apellido="Doe"
  </script>
  
  <main>

    <h2>practicar para CSS global</h2>
    <ul>
      <li> si un componente tiene un globalcss solo se aplica durante la presencia de dicho componente </li>
      <li> si se tiene muchos estilos globales es preferible tener una hoja de estilos e importarla </li>
    </ul>
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
      background-color: #424769;
    }

    :global(*){
      box-sizing: border-box;
    }
  </style>
  