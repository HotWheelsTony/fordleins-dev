<script>
    import Card from "./card.svelte";

    const projects = [
        {
            title: "Essential Therapy Aotearoa",
            org: "Private Client",
            date: "Sep 2023 - Present",
            skills: [
                "Angular",
                "Ionic",
                "CSS",
                "TypeScript",
                "Google Cloud Functions",
                "Sendgrid API",
                "Firebase",
                "GitHub",
                "Google Calendar API",
            ],
            description: `Bespoke booking platform and simple storefront for a small massage clinic business, currently in MVP.
            Designed to allow users to easily make appointments via a streamlined process, and enable my client
            to manage these bookings easily in their Google calendar.`,
        },
    ];
</script>

<div>
    <div class="group/cards">
        {#each projects as project}
            <Card content={project} />
        {/each}
    </div>
</div>
