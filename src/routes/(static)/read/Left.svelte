<script lang="ts">
  import ToggleGroup from "./ToggleGroup.svelte"
  import Article from "$lib/Article.svelte"
  import Highlight from "$lib/Highlight.svelte"
  import { getBody } from "$lib/utils/html"
  import { queryParam } from "sveltekit-search-params"

  export let url: string
  export let html: string

  // @ts-ignore
  const type = queryParam<"iframe" | "prose" | "code">("preview", { defaultValue: "iframe" })
</script>

<section class="relative overflow-hidden">

  {#if $type === "iframe"}

    <iframe class="h-full w-full bg-white" srcdoc={html.replace("<head>", `<head><base href="${url}">`)} title="preview" />

  {:else if $type === "prose"}

    {#await getBody(html) then html}
      <Article>
        {@html html}
      </Article>
    {/await}

  {:else if $type === "code"}

    <div class="h-full w-full overflow-scroll px-3.5 py-3">
      {#await getBody(html) then html}
        <Highlight source={html} lang="html" />
      {/await}
    </div>

  {/if}

  <div class="absolute bottom-5 z-1 flex flex-row gap-1.5 md:right-5 <md:(w-full justify-center)">
    <ToggleGroup values={["iframe", "prose", "code"]} bind:choice={$type} />
  </div>

</section>
