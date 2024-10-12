<script lang="ts">
  import "./md.css"

  export let html: string
</script>

<article class="max-h-full max-w-full overflow-scroll p-3 prose">
  {@html html}
</article>
