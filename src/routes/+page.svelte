<script lang="ts">
    import { onMount } from "svelte";
    import Header from "$lib/header.svelte";
    import Footer from "$lib/footer.svelte";
    import FlexStack from "$lib/flexStack.svelte";
    import Experience from "$lib/experience.svelte";
    import Projects from "$lib/projects.svelte";
    import Education from "$lib/education.svelte";

    onMount(() => {
        window.addEventListener("mousemove", updateMousePos);
        return () => {
            window.removeEventListener("mousemove", updateMousePos);
        };
    });

    const updateMousePos = (event: MouseEvent) => {
        document
            .getElementById("lg-bg")
            ?.style.setProperty(
                "background",
                `radial-gradient(600px at ${event.clientX}px ${event.clientY}px, rgba(49, 49, 49, 0.5), transparent 50%)`,
            );
    };
</script>

<svelte:head>
    <title>Ford Leins</title>
</svelte:head>

<div id="lg-bg" class="hidden lg:block fixed inset-0 -z-10" />
<div id="sm-bg" class="glow lg:hidden fixed inset-0 -z-10" />

<div
    class="mx-auto min-h-screen lg:h-screen max-w-screen-xl px-10 py-20 lg:py-0 lg:px-16"
>
    <div class="lg:flex lg:justify-between lg:gap-4 h-full">
        <div class="lg:sticky lg:top-0 lg:py-20 flex flex-col justify-between">
            <Header />
            <div class="lg:hidden">
                <Experience />
                <Projects />
                <Education />
            </div>
            <Footer />
        </div>
        <FlexStack
            sections={[
                {
                    name: "Experience",
                    content: Experience,
                },
                {
                    name: "Projects",
                    content: Projects,
                },
                {
                    name: "Education",
                    content: Education,
                },
            ]}
        />
    </div>
</div>

<style>
    .glow {
        background: radial-gradient(
            900px at 0px 0px,
            rgba(49, 49, 49, 1),
            transparent 50%
        );
    }
</style>
