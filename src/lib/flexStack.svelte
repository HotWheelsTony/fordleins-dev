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
            section.classList.remove("flex-[0]", "pointer-events-none", "open");
        });
    };

    export let sections = ["About", "Experience", "Projects"];
</script>

<main
    id="main"
    class="hidden lg:flex flex-col max-h-full lg:w-3/5 my-20 group/sections"
>
    {#each sections as sectionName}
        <section
            id={sectionName}
            class="section flex flex-1 hover:!flex-[3] overflow-clip"
        >
            <button
                on:click={() => {
                    openSection(sectionName);
                }}
                class="title flex-1 bg-mediumGrey group-hover/sections:opacity-30 hover:!bg-lightMediumGrey/70 hover:!opacity-100 overflow-clip"
            >
                <h3 class="text-4xl">
                    {sectionName}
                </h3>
            </button>

            <div
                class="content flex flex-col flex-[0] overflow-x-clip overflow-y-scroll"
            >
                <header
                    class="z-10 p-4 flex justify-between sticky top-0 backdrop-blur-sm"
                >
                    <h2 class="text-2xl">{sectionName}</h2>
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
                <!-- content goes here -->
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
