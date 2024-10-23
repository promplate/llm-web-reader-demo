<script lang="ts">
  import type { Element, Root, Text } from "hast"

  export let hast: Root | Element | Text
</script>

{#if hast.type === "text"}

  {hast.value}

{:else if hast.type === "element"}

  <svelte:element this={hast.tagName} {...hast.properties}>
    {#each hast.children as child}
      <svelte:self hast={child} />
    {/each}
  </svelte:element>

{:else if hast.type === "root"}

  {#each hast.children as child}
    <svelte:self hast={child} />
  {/each}

{:else}

  <pre class="text-red">{JSON.stringify(hast, null, 3)}</pre>

{/if}
