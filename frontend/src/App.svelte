<script lang="ts">
    import GradientBanner from "./lib/GradientBanner.svelte";
    import TabDemo from "./lib/TabDemo.svelte";

    let things = ["one", "two", "three"];
</script>

<GradientBanner>Svelte + Tailwind</GradientBanner>

{#each things as thing}
    <div class="m-4">
        <button
            class="
            w-full
            p-4
            rounded-lg
            shadow-lg
            text-center
            text-white
            font-mono
            bg-gradient-to-l
            from-purple-600
            to-blue-600
            hover:bg-violet-600
        "
        >
            {thing}
        </button>
    </div>
{/each}

<TabDemo />
