<script lang="ts">
  import type { BundledLanguage } from "shiki"

  import { getHighlighter } from "./utils/highlight"

  const { source, lang }: { source: string, lang: BundledLanguage } = $props()

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
