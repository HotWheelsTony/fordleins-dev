<script lang="ts">
    import Icon from "./icon.svelte";
    import { DateTime } from "luxon";

    const currentYear = DateTime.now().year;
</script>

<footer class="lg:w-3/5 mt-24 lg:mt-0">
    <p>
        Built with
        <a href="https://kit.svelte.dev/">SvelteKit,</a>
        <a href="https://tailwindcss.com/">Tailwind,</a>
        <a href="https://firebase.google.com/">Firebase,</a>
        and
        <a href="https://code.visualstudio.com/">Visual Studio Code</a>.
    </p>
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
    <div class="mt-4">
        <span>&copy; Ford Leins {currentYear}</span>
    </div>
</footer>
