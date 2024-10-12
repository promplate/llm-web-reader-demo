<script lang="ts">
  import ToggleGroup from "./ToggleGroup.svelte"
  import Highlight from "$lib/Highlight.svelte"
  import Markdown from "$lib/Markdown.svelte"
  import { toMarkdown } from "$lib/utils/html2md"
  import { read } from "$lib/utils/reader"
  import { queryParam } from "sveltekit-search-params"

  export let html: string

  $: cleanedHtml = read(html)!
  $: md = toMarkdown(cleanedHtml)

  // @ts-ignore
  const type = queryParam<"rendered" | "raw">("result", { defaultValue: "rendered" })

</script>

<section class="relative overflow-hidden">

  {#if $type === "rendered"}

    <Markdown text={md} />

  {:else if $type === "raw"}

    <div class="h-full w-full overflow-scroll px-3.5 py-3">
      <Highlight source={md} lang="markdown" />
    </div>

  {/if}

  <ToggleGroup values={["rendered", "raw"]} bind:choice={$type} />

</section>
