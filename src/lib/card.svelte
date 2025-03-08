<script lang="ts">
    import Icon from "./icon.svelte";
    import type { ICardContent } from "./types";

    export let content: ICardContent = {
        title: "Title",
        org: "Organisation",
        location: "Location",
        date: "From Date - To Date",
        skills: ["Skills"],
        description: "Description",
        url: "/",
    };
    $: pointerStyle = content.url === "/" ? "cursor-default" : "";
</script>

<a href={content.url} target="”_blank”" class="no-underline {pointerStyle}">
    <div
        class="lg:hover:!opacity-100 lg:group-hover/cards:opacity-50 mb-4 py-4 lg:px-4 transition sm:flex gap-6 rounded-md lg:hover:drop-shadow-md
     lg:hover:bg-mediumGrey/40
      lg:hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]"
    >
        <div class="sm:flex flex-col flex-shrink-0 sm:m-w-fit sm:w-1/4">
            <span>
                {content.date}
            </span>
            {#if content.location}
                <span class="sm:hidden"> &bull; </span>
                <span class="sm:text-sm text-opacity-60">
                    {content.location}
                </span>
            {/if}
        </div>
        <div>
            <h2 class="text-lg">
                <span class="text-green font-semibold">
                    {content.title}
                </span>
                <span class="text-veryLightGrey"> &bull; </span>
                <span class="inline-flex text-veryLightGrey font-semibold">
                    {content.org}
                    <span class="pl-2">
                        <Icon name="link" />
                    </span>
                </span>
            </h2>

            <p class="py-2">
                {content.description}
            </p>
            <div class="flex flex-wrap">
                {#each content.skills as skill}
                    <div
                        class="mr-2 mt-2 px-2 text-sm text-green bg-green/10 rounded-full"
                    >
                        {skill}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</a>
