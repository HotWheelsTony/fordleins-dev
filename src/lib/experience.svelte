<script>
    import Card from "./card.svelte";

    const roles = [
        {
            title: "Junior Full Stack Developer",
            org: "Capgemini",
            date: "Feb 2022 - Aug 2023",
            skills: ["Angular", "TypeScript", "SQL", "C#", "Docker"],
            description: `Worked as part of Capgemini\’s Cloud & Custom Apps team as a junior full stack developer. I contributed to
            diverse range of projects for a number of clients.`,
        },
    ];
</script>

<div>
    <div class="group/cards">
        {#each roles as role}
            <Card content={role} />
        {/each}
    </div>
</div>
