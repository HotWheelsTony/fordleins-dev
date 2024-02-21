<script>
    import Card from "./card.svelte";
    import StickyHeader from "./stickyHeader.svelte";

    const schoolxp = [
        {
            title: "Bachelor of Science Maj. Computer Science",
            org: "Victoria University of Wellington",
            date: "Mar 2019 - Nov 2021",
            location: "Wellington, NZ",
            skills: [
                "Algorithm Analysis & Design",
                "Cyber Security",
                "Software Design Patterns",
                "UI/UX Design",
                "Object-Oriented Programming",
                "Data Structures",
                "Mobile Development",
            ],
            description: `Studied my bachelor's degree majoring in computer science 
                with a specialization in cyber security, my studies mainly focused on
                object-oriented development with an emphasis on algorithm analysis and 
                design, cyber security, mobile development, and software design patterns.`,
            url: "https://www.wgtn.ac.nz/",
        },
        {
            title: "Student Mentor",
            org: "Victoria University of Wellington",
            date: "Mar 2020 - May 2020",
            location: "Wellington, NZ",
            skills: [],
            description: `Having done well in engineering mathematics, I had the opportunity to 
                return as a volunteer mentor for first year Pasifika students and help guide them 
                to success in the same courses. This involved helping students understand 
                mathematical concepts, assignment preparation, and general advice.`,
            url: "https://www.wgtn.ac.nz/",
        },
    ];
</script>

<div class="group/cards">
    <StickyHeader title="Education" />
    {#each schoolxp as xp}
        <Card content={xp} />
    {/each}
</div>
