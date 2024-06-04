<script lang="ts">
    import Card from "./card.svelte";
    import StickyHeader from "./stickyHeader.svelte";

    const projects = [
        {
            title: "essentialtherapyaotearoa.co.nz",
            org: "Essential Therapy Aotearoa",
            date: "Sep 2023",
            skills: [
                "Stripe",
                "Angular",
                "Ionic",
                "Less CSS",
                "TypeScript",
                "Firebase",
                "Google Cloud",
                "GitHub Actions",
                "Google Calendar",
            ],
            description: `Designed and built a bespoke booking platform and online store
                for a small massage & aromatherapy business. The aim was to bring the clients business
                online for as little ongoing cost as possible, while also creating a great user experience. 
                This was achieved by utilising free tiers of Google Cloud and Firebase for deployment and Stripe
                for processing payments, which brought the annual cost of the project down to just the cost of 
                the domain and Stripe's per-transaction fee.`,
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
            title: "One Up Client",
            org: "Personal",
            date: "Aug 2023",
            skills: ["Angular", "TypeScript", "Capacitor", "CSS"],
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
