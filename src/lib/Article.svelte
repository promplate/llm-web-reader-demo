<script lang="ts">
  import type { Snippet } from "svelte"

  import "./md.css"

  const { children }: { children: Snippet } = $props()
</script>

<article class="max-h-full max-w-full overflow-scroll p-3 prose">
  {@render children()}
</article>
