<script lang="ts">
    import Icon from "./icon.svelte";
    import { DateTime } from "luxon";

    const yearsElapsed = (
        since: DateTime,
        until: DateTime = DateTime.now(),
    ): number => {
        const years = Math.round(until.diff(since).as("years") * 2) / 2;

        return years;
    };

    const about = `Full-stack developer with ${yearsElapsed(DateTime.fromObject({ year: 2022, month: 2 }))} 
    years of industry experience across Australia and New Zealand. Skilled in object-oriented programming and web development, 
    with interests in algorithms, creative programming, and web design.`;
</script>

<header class="mb-12 lg:mb-0">
    <div class="mb-6">
        <h1 class="text-5xl mb-3">Ford Leins</h1>
        <span class="text-xl">
            Software Developer at <a href="https://spatialnetworx.ai/"
                >SpatialNetworx</a
            >
        </span>
    </div>
    <div class="flex gap-2 mb-6">
        <a href="https://www.linkedin.com/in/ford-leins/">
            <Icon name="linkedin" />
        </a>
        <a href="https://github.com/HotWheelsTony">
            <Icon name="github" />
        </a>
        <a href="mailto:fordleins@gmail.com">
            <Icon name="email" />
        </a>
    </div>
    <div class="md:w-4/5">
        <h2 class="py-4 text-2xl">About</h2>
        <span class="text-lg">
            {about}
        </span>
    </div>
</header>
