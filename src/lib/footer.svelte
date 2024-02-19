<script>
    import Icon from "./icon.svelte";
</script>

<footer>
    <div
        class="flex items-baseline text-xl tracking-tight font-semibold text-slate-400"
    >
        <h1 class="">Built with:</h1>
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
</footer>

<style>
    .icon {
        @apply w-5 h-5 ml-1;
    }
</style>
