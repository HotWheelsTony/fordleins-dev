<script lang="ts">
    import Card from "./card.svelte";
    import StickyHeader from "./stickyHeader.svelte";
    import type { ICardContent } from "./types";

    const roles: ICardContent[] = [
        {
            title: "Software Developer",
            org: "SpatialNetworx",
            date: "Nov 2023 - Present ",
            location: "Melbourne, AU",
            skills: ["C#", "Python", "SQL", "Angular"],
            description: `Develop and maintain geospatial analysis tools used for planning, designing, and optimizing telecommunications networks.`,
            url: "https://spatialnetworx.ai/",
        },
        {
            title: "Junior Software Developer",
            org: "Capgemini",
            date: "Feb 2022 - Aug 2023",
            location: "Wellington, NZ",
            skills: [
                "Angular",
                "React",
                "TypeScript",
                "JavaScript",
                "SQL",
                "C#",
                "Docker",
            ],
            description: `Worked as part of Capgemini's Cloud & Custom Apps team 
                as a junior full-stack developer. I contributed to diverse range 
                of projects for a number of clients, some of which included Microsoft, 
                Lindsay Corporation, and Deparntment of Internal Affairs NZ. `,
            url: "https://www.capgemini.com/",
        },
        {
            title: "Software Engineering Tutor",
            org: "Victoria University of Wellington",
            date: "Mar 2021 - Nov 2021",
            location: "Wellington, NZ",
            skills: [
                "Java",
                "Tutoring",
                "IntelliJ",
                "Algorithms",
                "Data Structures",
                "Software Design Patterns",
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
    <StickyHeader title="Experience" />
    {#each roles as role}
        <Card content={role} />
    {/each}
</div>
