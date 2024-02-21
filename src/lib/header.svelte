<script>
    import Icon from "./icon.svelte";

    const about = `Nearly 3 years of professional experience in software engineering, across tutoring
and full stack development positions. My full stack experience was gained while
working for Capgemini NZ, during my time there I worked on a number of projects.`;
</script>

<header class="mb-6">
    <div class="mb-6 lg:mb-10">
        <h1 class="text-5xl mb-3">Ford Leins</h1>
        <span class="text-xl">
            Software Developer at <a href="https://spatialnetworx.ai/"
                >SpatialNetworx</a
            >
        </span>
    </div>
    <div class="flex gap-2 mb-6 lg:mb-10">
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
    <div class="md:w-3/5 mb-6">
        <span class="text-lg">
            {about}
        </span>
    </div>
</header>
