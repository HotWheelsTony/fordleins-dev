<script>
    export let title = "Role Title";
    export let company = "Company";
    export let date = "Jan 2000 - Dec 2000";
    export let content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
            id est laborum.`;
    export let skills = ["React", "Angular"];
</script>

<div
    class="lg:hover:!opacity-100 lg:group-hover/cards:opacity-50 py-4 lg:px-4 transition sm:flex gap-4 rounded-md lg:hover:drop-shadow-md lg:hover:bg-slate-700/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]"
>
    <div class="mr-4">
        <span class="text-nowrap">
            {date}
        </span>
    </div>
    <div>
        <h6 class="text-white tracking-wider">
            {title} &bull; {company}
        </h6>
        <p>
            {content}
        </p>
        <div class="flex my-1">
            {#each skills as skill}
                <div
                    class="text-sm rounded-full bg-teal-400/10 w-fit mr-2 px-3 py-1.5"
                >
                    <span class="text-teal-300">
                        {skill}
                    </span>
                </div>
            {/each}
        </div>
    </div>
</div>
