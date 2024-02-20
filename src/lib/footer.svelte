<script>
    import Icon from "./icon.svelte";
</script>

<footer>
    <div class="w-2/3">
        <span class="text-lg">
            Built with
            <a href="/">SvelteKit,</a>
            <a href="/">Tailwind,</a>
            <a href="/">Firebase,</a>
            and
            <a href="/">Visual Studio Code</a>.
        </span>
        <div class="flex mt-2 gap-2">
            <a class="icon" href="/">
                <Icon name="svelte" />
            </a>
            <a class="icon" href="/">
                <Icon name="tailwind" />
            </a>
            <a class="icon" href="/">
                <Icon name="firebase" />
            </a>
            <a class="icon" href="/">
                <Icon name="vscode" />
            </a>
        </div>
    </div>
</footer>
