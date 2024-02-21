<script lang="ts">
    import Card from "./card.svelte";
    import StickyHeader from "./stickyHeader.svelte";

    const projects = [
        {
            title: "fordleins.dev",
            org: "Personal",
            date: "Feb 2024",
            skills: ["SvelteKit", "TailwindCSS", "Firebase"],
            description: `A good excuse to dip my toes into SvelteKit, 
                this site is designed to act as a kind of 'living resume'. 
                A place to showcase my experience and personal projects.`,
            url: "https://github.com/HotWheelsTony/fordleins-dev",
        },
        {
            title: "trailerco.nz",
            org: "TrailerCo Ltd.",
            date: "Jan 2024",
            skills: ["Angular", "TypeScript", "TailwindCSS", "Firebase"],
            description: `Helped a new trailer building business establish their 
                online presence with a simple website showcasing their work.`,
            url: "https://trailerco.nz/home",
        },
        {
            title: "argentdigital.co.nz",
            org: "Argent Digital Ltd.",
            date: "Dec 2023",
            skills: [
                "Angular",
                "TypeScript",
                "Less CSS",
                "Firebase",
                "Google Cloud",
            ],
            description: `Created a simple portfolio website with contact functionality 
                for a photography & videography in New Zealand.`,
            url: "https://argentdigital.co.nz/",
        },
        {
            title: "essentialtherapyaotearoa.co.nz",
            org: "Essential Therapy Aotearoa",
            date: "Sep 2023",
            skills: [
                "Angular",
                "Ionic",
                "Less CSS",
                "TypeScript",
                "Firebase",
                "Google Cloud",
                "GitHub Actions",
                "Google Calendar",
            ],
            description: `Designed and built a bespoke booking platform and product 
                catalogue for a small massage & aromatherapy business. The aim was 
                to allow users to easily make appointments via a streamlined process, 
                and enable the client to manage these bookings easily by integrating 
                directly with their personal Google calendar.`,
            url: "https://essentialtherapyaotearoa.co.nz/home",
        },
    ];
</script>

<div class="group/cards">
    <StickyHeader title="Projects" />
    {#each projects as project}
        <Card content={project} />
    {/each}
</div>
