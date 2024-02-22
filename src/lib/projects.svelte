<script lang="ts">
    import Card from "./card.svelte";
    import StickyHeader from "./stickyHeader.svelte";

    const projects = [
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
                catalogue for a massage & aromatherapy business. The aim was 
                to allow users to easily make appointments via a streamlined process, 
                and enable the client to manage these bookings easily by integrating 
                directly with Google calendar.`,
            url: "https://essentialtherapyaotearoa.co.nz/home",
        },
        {
            title: "fordleins.dev",
            org: "Personal",
            date: "Feb 2024",
            skills: ["SvelteKit", "TypeScript", "TailwindCSS", "Firebase"],
            description: `A good excuse to dip my toes into SvelteKit, 
                this site is designed to act as a kind of 'living resume'. 
                A place to showcase my experience and projects.`,
            url: "https://github.com/HotWheelsTony/fordleins-dev",
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
                for a photography & videography business in New Zealand.`,
            url: "https://argentdigital.co.nz/",
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
            title: "One Up Client",
            org: "Personal",
            date: "Aug 2023",
            skills: ["Angular", "TypeScript", "Ionic", "Capacitor", "CSS"],
            description: `Developed a lightweight personal banking client for quickly checking balances and searching transactions using Up bank's public API. `,
            url: "https://github.com/HotWheelsTony/one-up-client",
        },
    ];
</script>

<div class="group/cards">
    <StickyHeader title="Projects" />
    {#each projects as project}
        <Card content={project} />
    {/each}
</div>
