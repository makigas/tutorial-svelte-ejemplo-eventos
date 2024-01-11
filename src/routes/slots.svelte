<script>
    import Section from "../lib/section.svelte";
</script>
<section>
    <Section titulo="menu del día">
        <section slot="main">
        <p>chopitos</p>
        <p>pescado</p>
        <p>fruta del día</p>
        </section>
    </Section>

    <Section titulo="menu del día">
        <svelte:fragment slot="main">
        <p>chopitos</p>
        <p>pescado</p>
        <p>fruta del día</p>
        </svelte:fragment>
    </Section>

    <Section titulo="cafés"></Section>
</section>