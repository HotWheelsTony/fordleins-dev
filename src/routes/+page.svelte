<script>
    import { onMount } from "svelte";
    import Card from "$lib/card.svelte";
    import Header from "$lib/header.svelte";
    import Footer from "$lib/footer.svelte";
    import FlexStack from "$lib/flexStack.svelte";

    onMount(() => {
        window.addEventListener("mousemove", updateMousePos);
        return () => {
            window.removeEventListener("mousemove", updateMousePos);
        };
    });

    const updateMousePos = (event) => {
        document
            .getElementById("background")
            .style.setProperty(
                "background",
                `radial-gradient(600px at ${event.clientX}px ${event.clientY}px, rgba(49, 49, 49, 0.5), transparent 50%)`,
            );
    };
</script>

<div id="background" class="fixed inset-0 -z-10" />

<div class="mx-auto h-screen max-w-screen-xl px-6 lg:py-0 lg:px-20">
    <div class="lg:flex lg:justify-between lg:gap-4 h-full">
        <div class="lg:sticky lg:top-0 lg:py-20 flex flex-col justify-between">
            <Header />
            <Footer />
        </div>
        <FlexStack />
    </div>
</div>

<style>
    #background {
        background: radial-gradient(
            1000px at 0px 0px,
            rgba(49, 49, 49, 1),
            transparent 50%
        );
    }
</style>
