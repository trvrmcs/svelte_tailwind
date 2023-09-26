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

{#if active_tab === id}
    <div
        class="p bg-slate-300 rounded-lg m-4 p-4 h-full
        items-center
        justify-center
        flex"
        id="{id}-tabitem"
        role="tabpanel"
    >
        <slot />
    </div>
{/if}
