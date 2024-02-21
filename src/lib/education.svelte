<script>
    import Card from "./card.svelte";
    import StickyHeader from "./stickyHeader.svelte";

    const school = {
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
        description: `Studied my bachelor\’s degree majoring in computer science with a specialization in cyber security, my
                studies mainly focused on object-oriented development with an emphasis on algorithm analysis and design, cyber
                security, mobile development, and software design patterns.`,
        url: "https://www.wgtn.ac.nz/",
    };
</script>

<div>
    <StickyHeader title="Education & Skills" />
    <Card content={school} />
</div>
