<script>
    import { onMount } from "svelte";

    onMount(() => {
        window.addEventListener("mousemove", updateMousePos);
        return () => {
            window.removeEventListener("mousemove", updateMousePos);
        };
    });

    export let mousePos = {
        x: 0,
        y: 0,
    };

    const updateMousePos = (event) => {
        mousePos = {
            x: event.clientX,
            y: event.clientY,
        };

        const bg = document.getElementById("background");
        bg.style.setProperty("left", `${mousePos.x}px`);
        bg.style.setProperty("top", `${mousePos.y}px`);
    };
</script>

<div class="-z-10 bg-slate-800 h-screen w-screen fixed flex place-items-center">
    <div
        id="background"
        class="-z-20 w-[100rem] h-[100rem] absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-cyan-950 via-transparent to-transparent"
    ></div>
</div>
