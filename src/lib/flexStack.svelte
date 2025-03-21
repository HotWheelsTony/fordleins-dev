<script lang="ts">
    const openSection = (sectionId: string) => {
        document.querySelectorAll(".section").forEach((section) => {
            if (section.id !== sectionId) {
                section.classList.add("flex-[0]", "pointer-events-none");
            }
        });
        document.getElementById(sectionId)?.classList.add("open");
    };

    const closeSection = () => {
        document.querySelectorAll(".section").forEach((section) => {
            section.classList.remove("flex-[0]", "open");

            //Just stop hover interaction while blade is closing to keep things smooth
            setTimeout(() => {
                section.classList.remove("pointer-events-none");
            }, 1000);
        });
    };

    export let sections: {
        name: string;
        content: any;
    }[] = [];
</script>

<main id="main" class="hidden lg:flex flex-col max-h-full my-20 group/sections">
    {#each sections as section}
        <section
            id={section.name}
            class="section flex flex-1 hover:!flex-[3] overflow-clip min-h-0"
        >
            <button
                on:click={() => {
                    openSection(section.name);
                }}
                class="title flex-1 bg-mediumGrey group-hover/sections:opacity-30 hover:!bg-lightMediumGrey/70 hover:!opacity-100 overflow-clip min-w-0"
            >
                <h3 class="text-4xl">
                    {section.name}
                </h3>
            </button>

            <div
                class="content pb-12 flex flex-col flex-[0] overflow-x-clip overflow-y-auto scrollbar"
            >
                <header
                    class="z-10 p-4 pt-0 text-2xl flex justify-between sticky top-0 backdrop-blur-sm"
                >
                    <h2>{section.name}</h2>
                    <button
                        on:click={() => {
                            closeSection();
                        }}
                    >
                        <h2
                            class="font-semibold text-lightGrey hover:text-red transition-all ease-in-out"
                        >
                            Close
                        </h2>
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
