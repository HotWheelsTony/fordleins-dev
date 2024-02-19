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

    const openSection = (sectionId) => {
        const target = document.getElementById(sectionId);
        const allSections = document.querySelectorAll(".section");

        allSections.forEach((section) => {
            if (section.id !== sectionId) {
                section.classList.add("flex-[0]", "pointer-events-none");
            }
        });

        target.classList.add("open");
    };

    const closeSection = () => {
        document.querySelectorAll(".section").forEach((section) => {
            section.classList.remove("flex-[0]", "pointer-events-none", "open");
        });
    };

    const updateMousePos = (event) => {
        document
            .getElementById("background")
            .style.setProperty(
                "background",
                `radial-gradient(800px at ${event.clientX}px ${event.clientY}px, rgba(8, 51, 68, 0.5), transparent 70%)`,
            );
    };

    const sections = ["About", "Experience", "Projects"];
</script>

<div id="background" class="fixed inset-0 -z-10" />

<div class="mx-auto h-screen max-w-screen-xl px-6 py-12 lg:py-0 lg:px-24">
    <div class="lg:flex lg:justify-between lg:gap-4 h-full">
        <!--  -->

        <main class="flex flex-col h-full bg-white group/sections">
            {#each sections as section}
                <section
                    id={section}
                    class="section flex flex-1 hover:!flex-[3] group-hover/sections:bg-black hover:!bg-orange-400 overflow-clip transition-all duration-1000 ease-in-out bg-green-400 border border-b-red-500"
                >
                    <button
                        on:click={() => {
                            openSection(section);
                        }}
                        class="title w-full h-full flex flex-1 justify-center items-center overflow-clip transition-all duration-1000 ease-in-out"
                    >
                        <h1 class="text-white text-3xl">
                            {section}
                        </h1>
                    </button>

                    <div
                        class="content flex flex-col flex-[0] overflow-clip transition-all duration-1000 ease-in-out"
                    >
                        <button
                            on:click={() => {
                                closeSection();
                            }}
                            class="bg-black text-white">Close</button
                        >
                        Some description and elements lorem ipsum fuck ufck fuck
                    </div>
                </section>
            {/each}
        </main>

        <!-- <main class="group/cards lg:w-3/5 my-12 lg:my-24">
            <Card />
            <Card />
            <Card />
            <Card />
        </main> -->

        <!--  -->

        <!-- <div class="lg:sticky lg:h-screen lg:top-0 lg:py-24">
            <Header />
        </div> -->
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

    :global(.open) {
        & .title {
            @apply flex-[0] pointer-events-none;
        }

        & .content {
            @apply flex-1;
        }
    }
</style>
