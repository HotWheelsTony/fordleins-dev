<script>
    import Card from "./card.svelte";

    const openSection = (sectionId) => {
        document.querySelectorAll(".section").forEach((section) => {
            if (section.id !== sectionId) {
                section.classList.add("flex-[0]", "pointer-events-none");
            }
        });
        document.getElementById("main").classList.remove("my-20");
        document.getElementById(sectionId).classList.add("open");
    };

    const closeSection = () => {
        document.getElementById("main").classList.add("my-20");
        document.querySelectorAll(".section").forEach((section) => {
            section.classList.remove("flex-[0]", "open");

            //Just stop hover interaction while blade is closing to keep things smooth
            setTimeout(() => {
                section.classList.remove("pointer-events-none");
            }, 1000);
        });
    };

    export let sections = [
        {
            name: "Section A",
            content: Card,
        },
        {
            name: "Section B",
            content: Card,
        },
        {
            name: "Section C",
            content: Card,
        },
    ];
</script>

<main
    id="main"
    class="hidden lg:flex flex-col max-h-full lg:w-3/5 my-20 group/sections"
>
    {#each sections as section}
        <section
            id={section.name}
            class="section flex flex-1 hover:!flex-[3] overflow-clip"
        >
            <button
                on:click={() => {
                    openSection(section.name);
                }}
                class="title flex-1 bg-mediumGrey group-hover/sections:opacity-30 hover:!bg-lightMediumGrey/70 hover:!opacity-100 overflow-clip"
            >
                <h3 class="text-4xl">
                    {section.name}
                </h3>
            </button>

            <div
                class="content flex flex-col flex-[0] overflow-x-clip overflow-y-auto"
            >
                <header
                    class="z-10 p-4 flex justify-between sticky top-0 backdrop-blur-sm"
                >
                    <h2 class="text-2xl">{section.name}</h2>
                    <button
                        on:click={() => {
                            closeSection();
                        }}
                    >
                        <span class="text-2xl font-semibold hover:text-red">
                            Close
                        </span>
                    </button>
                </header>
                <svelte:component this={section.content} />
            </div>
        </section>
    {/each}
</main>

<style>
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
