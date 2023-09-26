<script lang="ts">
    // oklab(40.1% 0.1143 0.045);

    //oklch(LCH):

    /*
    L: 0->1 or 0% ->100%
    C: 0 -> 0.4 or 0%->100% 
    H: angle or number, e.g. 180deg, 1rad, ... in range 0->360 

*/

    let L = 50;
    let C = 50;
    let H = 0;

    $: color = `oklch(${L}% ${C}% ${H}deg)`;
</script>

<div class="h-full w-full p-8">
    <p class="text-center">LCH Color Space</p>
    <pre> {color}</pre>
    <label for="l" class="block mb-2 text-sm font-medium text-gray-900">L</label
    >
    <input
        id="l"
        type="range"
        min="0"
        max="100"
        bind:value={L}
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
    />

    <label
        for="c"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >C</label
    >
    <input
        id="c"
        min="0"
        max="100"
        type="range"
        bind:value={C}
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
    />

    <label
        for="h"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >H</label
    >
    <input
        id="h"
        type="range"
        min="0"
        max="260"
        bind:value={H}
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
    />

    <div
        id="color-div"
        class="h-16 w-full mt-8 border border-black rounded-xl"
        style="--theme-color: {color}"
    />
</div>

<style>
    #color-div {
        background-color: var(--theme-color);
    }
</style>
