<script lang="ts">
  import { getHighlighter } from "./utils/highlight"
  import { type BundledLanguage } from "shiki"

  export let source: string
  export let lang: BundledLanguage

  const highlighter = getHighlighter(lang) as unknown as ReturnType<typeof getHighlighter> | Awaited<ReturnType<typeof getHighlighter>>
</script>

<code class="text-xs line-height-relaxed [&_*]:(font-mono outline-none) [&>pre]:!bg-transparent">

  {#if highlighter instanceof Promise}
    {#await highlighter}
      <pre>{source}</pre>
    {:then highlight}
      {@html highlight(source)}
    {/await}
  {:else}
    {@html highlighter(source)}
  {/if}

</code>
