<script>
    import { onMount } from "svelte";
    import Card from "$lib/card.svelte";
    import Header from "$lib/header.svelte";
    import Footer from "$lib/footer.svelte";

    onMount(() => {
        window.addEventListener("mousemove", updateMousePos);
        return () => {
            window.removeEventListener("mousemove", updateMousePos);
        };
    });

    const updateMousePos = (event) => {
        const bg = document.getElementById("background");

        bg.style.setProperty(
            "background",
            `radial-gradient(800px at ${event.clientX}px ${event.clientY}px, rgba(8, 51, 68, 0.5), transparent 70%)`,
        );
    };
</script>

<div id="background" class="fixed inset-0 -z-10" />

<div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 lg:py-0 lg:px-24">
    <div class="lg:flex lg:justify-between lg:gap-4">
        <div class="lg:sticky lg:h-screen lg:top-0 lg:py-24">
            <Header />
        </div>
        <main class="group/cards lg:w-3/5 py-12 lg:py-24">
            <Card />
            <Card />
            <Card />
            <Card />
        </main>
    </div>
</div>

<style>
    #background {
        background: radial-gradient(
            800px at 0px 0px,
            rgba(8, 51, 68, 0.5),
            transparent 50%
        );
    }
</style>
