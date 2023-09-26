<script lang="ts">
    import { getContext } from "svelte";
    export let id: number;
    let active_tab: number;

    //@ts-ignore
    const active_tab_store = getContext("tabs-context")["active-tab"];

    active_tab_store.subscribe((tab: number) => {
        active_tab = tab;
    });
</script>

<li>
    <button
        on:click={() => active_tab_store.set(id)}
        class:active={id == active_tab}
        class="inline-block p-4 rounded-t"
        id="{id}-tabhead"
    >
        <slot />
    </button>
</li>

<style>
    .active {
        @apply bg-gradient-to-r from-purple-600 to-blue-600 text-white;
    }
</style>
