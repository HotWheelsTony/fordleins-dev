<script>
    import Card from "./card.svelte";

    const projects = [
        {
            title: "Personal Portfolio",
            org: "Personal",
            date: "Feb 2024 - Present",
            skills: ["SvelteKit", "TailwindCSS", "Firebase"],
            description: `A good excuse to dip my toes into SvelteKit, this site is designed to act as a kind of 'living resume'. A place to showcase my experience and personal projects.`,
        },
        {
            title: "TrailerCo",
            org: "TrailerCo Ltd.",
            date: "Jan 2024 - Present",
            skills: ["Angular", "TypeScript", "TailwindCSS", "Firebase"],
            description: `Helped a new trailer building business establish their online presence with a simple website showcasing their work.`,
        },
        {
            title: "Argent Digital",
            org: "Argent Digital Ltd.",
            date: "Dec 2023 - Present",
            skills: [
                "Angular",
                "TypeScript",
                "Less CSS",
                "Firebase",
                "Google Cloud",
            ],
            description: `Created a simple portfolio website with contact functionality for a photography & videography in New Zealand.`,
        },
        {
            title: "Essential Therapy Aotearoa",
            org: "Private Client",
            date: "Sep 2023 - Present",
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
            description: `Designed and built a bespoke booking platform and product catalogue for a small massage & aromatherapy business.
            The aim was to allow users to easily make appointments via a streamlined process, and enable my client
            to manage these bookings easily by integrating directly into their personal Google calendar.`,
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
