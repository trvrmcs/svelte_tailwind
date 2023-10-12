<script lang="ts">
    import { setContext } from "svelte";
    import { writable } from "svelte/store";

    export let active_tab: number = 1;
    /*
    Use a Store in a Context to enable communication
    between tab header and content
    */
    setContext("tabs-context", {
        "active-tab": writable(active_tab),
    });
</script>

<div class="w-full h-full">
    <slot />
</div>
