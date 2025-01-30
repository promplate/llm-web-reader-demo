<script lang="ts">
  import Article from "./Article.svelte"
  import SvelteMarkdown from "@humanspeak/svelte-markdown"

  const { text }: { text: string } = $props()
</script>

<Article>
  <SvelteMarkdown source={text} />
</Article>
