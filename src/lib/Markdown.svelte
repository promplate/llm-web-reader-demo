<script lang="ts">
  import Article from "./Article.svelte"
  import SvelteMarkdown from "svelte-markdown"

  export let text: string
</script>

<Article>
  <SvelteMarkdown source={text} />
</Article>
