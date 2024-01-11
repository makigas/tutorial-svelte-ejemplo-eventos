<!-- Menu.svelte -->
<script>
    import { routes } from "./routes";

    const routesArray = Object.entries(routes).map(([path, config]) => ({
        path,
        ...config.props,
    }));
</script>

<ul>
    {#each routesArray as { path, name }}
        <li><a href={`/#${path}`}>{name}</a></li>
    {/each}
</ul>

<style>
    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        background-color: #333;
    }

    li {
        padding: 15px;
        color: #fff;
        cursor: pointer;
    }

    li:hover {
        background-color: #555;
    }

    a {
        margin: auto;
        padding: 0;
        height: 100%;
    }
    a:visited {
        color: aliceblue;
    }
</style>
