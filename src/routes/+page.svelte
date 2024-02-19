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
        document.querySelectorAll(".section").forEach((section) => {
            if (section.id !== sectionId) {
                section.classList.add("flex-[0]", "pointer-events-none");
            }
        });
        document.getElementById("main").classList.add("mb-0");
        document.getElementById(sectionId).classList.add("open");
    };

    const closeSection = () => {
        document.getElementById("main").classList.remove("mb-0");
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

<div class="mx-auto h-screen max-w-screen-xl px-6 lg:py-0 lg:px-20">
    <div class="lg:flex lg:justify-between lg:gap-4 h-full">
        <div class="lg:sticky lg:top-0 lg:py-20">
            <Header />
        </div>
        <main
            id="main"
            class="flex flex-col max-h-full w-3/5 my-20 group/sections"
        >
            {#each sections as section}
                <section
                    id={section}
                    class="section flex flex-1 hover:!flex-[3] overflow-clip"
                >
                    <button
                        on:click={() => {
                            openSection(section);
                        }}
                        class="title flex-1 bg-slate-600/20 group-hover/sections:bg-slate-600/20 hover:!bg-slate-500/30 overflow-clip"
                    >
                        <h1 class="text-white text-3xl">
                            {section}
                        </h1>
                    </button>

                    <div
                        class="content flex flex-col flex-[0] overflow-x-clip overflow-y-scroll"
                    >
                        <button
                            on:click={() => {
                                closeSection();
                            }}
                            class="z-10 py-2 px-4 tracking-tight flex justify-between sticky top-0 backdrop-blur-sm"
                        >
                            <h1 class="text-xl font-semibold">{section}</h1>
                            <h1 class="text-xl font-semibold">Close</h1>
                        </button>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
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

    main,
    .section,
    .title,
    .content {
        @apply transition-all duration-1000 ease-in-out;
    }
</style>
