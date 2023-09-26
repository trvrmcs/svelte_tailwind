<script lang="ts">
    let items = [
        "Layout",
        "Login Form",
        "Grid Form",
        "Colors",
        "ColorSpace",
        "tabs",
    ];
    export let selected: number = 0;
</script>

<ul
    class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200"
>
    {#each items as item, i}
        <li class="m-2">
            <button
                class:active={i == selected}
                class="inline-block px-4 py-4 rounded-full"
                aria-current="page"
                on:click={() => (selected = i)}
            >
                {item}
            </button>
        </li>
    {/each}
</ul>

<style>
    .active {
        @apply bg-gradient-to-r from-purple-600 to-blue-600 text-white;
    }
</style>
