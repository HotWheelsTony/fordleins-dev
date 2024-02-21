<script>
    import Icon from "./icon.svelte";
</script>

<footer class="sm:w-3/5 mt-24 lg:mt-0">
    <span>
        Built with
        <a href="https://kit.svelte.dev/">SvelteKit,</a>
        <a href="https://tailwindcss.com/">Tailwind,</a>
        <a href="https://firebase.google.com/">Firebase,</a>
        and
        <a href="https://code.visualstudio.com/">Visual Studio Code</a>.
    </span>
    <div class="flex mt-2 gap-2">
        <a class="icon" href="https://kit.svelte.dev/">
            <Icon name="svelte" />
        </a>
        <a class="icon" href="https://tailwindcss.com/">
            <Icon name="tailwind" />
        </a>
        <a class="icon" href="https://firebase.google.com/">
            <Icon name="firebase" />
        </a>
        <a class="icon" href="https://code.visualstudio.com/">
            <Icon name="vscode" />
        </a>
    </div>
</footer>
