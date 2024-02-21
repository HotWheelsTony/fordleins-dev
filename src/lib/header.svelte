<script lang="ts">
    import Icon from "./icon.svelte";

    const about = `Nearly 3 years of professional experience in software engineering, across tutoring
and full stack development positions. My full stack experience was gained while
working for Capgemini NZ, during my time there I worked on a number of projects.`;
</script>

<header>
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
