<script>
    import Card from "./card.svelte";

    const roles = [
        {
            title: "Software Developer",
            org: "SpatialNetworx",
            date: "Nov 2023 - Present ",
            skills: ["C#", "Python", "PostGreSQL", "Angular"],
            description: `Software developer across multiple projects`,
            url: "https://spatialnetworx.ai/",
        },
        {
            title: "Junior Full Stack Developer",
            org: "Capgemini",
            date: "Feb 2022 - Aug 2023",
            skills: ["Angular", "TypeScript", "SQL", "C#", "Docker"],
            description: `Worked as part of Capgemini\’s Cloud & Custom Apps team 
                as a junior full stack developer. I contributed to diverse range 
                of projects for a number of clients.`,
            url: "https://www.capgemini.com/",
        },
        {
            title: "Software Engineering Tutor",
            org: "Victoria University of Wellington",
            date: "Mar 2021 - Nov 2021",
            skills: [
                "Java",
                "Tutoring",
                "Communication",
                "IntelliJ",
                "Algorithms",
                "Data Structures",
            ],
            description: `Worked part time for two semesters as a software engineering 
                tutor. Delivering in person labs to second year software engineering 
                students, marking assignments, and helping with test invigilation.
                The courses I tutored were focused on implementing algorithms & design 
                patterns, and teaching best practices when writing software.`,
            url: "https://www.wgtn.ac.nz/",
        },
    ];
</script>

<div class="group/cards">
    {#each roles as role}
        <Card content={role} />
    {/each}
</div>
