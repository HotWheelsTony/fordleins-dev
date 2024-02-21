<script>
    export let content = {
        title: "Title",
        org: "Org",
        date: "Jan 2000 - Dec 2001",
        skills: ["React", "Angular"],
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
            id est laborum.`,
        url: "/",
    };
    let pointerStyle = content.url === "/" ? "cursor-default" : "";
</script>

<a href={content.url} target="”_blank”" class="no-underline {pointerStyle}">
    <div
        class="lg:hover:!opacity-100 lg:group-hover/cards:opacity-50 mb-4 py-4 lg:px-4 transition sm:flex gap-6 rounded-md lg:hover:drop-shadow-md
     lg:hover:bg-mediumGrey/40
      lg:hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]"
    >
        <div class="flex-shrink-0 w-1/4">
            <span>
                {content.date}
            </span>
        </div>
        <div>
            <h2 class="text-lg">
                <span class="text-green">
                    {content.title}
                </span>
                &bull; {content.org}
            </h2>
            <p class="py-2">
                {content.description}
            </p>
            <div class="flex flex-wrap">
                {#each content.skills as skill}
                    <div
                        class="mr-2 mt-1 px-2 text-sm text-green bg-green/10 rounded-full"
                    >
                        {skill}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</a>
