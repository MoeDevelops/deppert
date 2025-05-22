<script lang="ts">
  import Header from "$lib/components/Header.svelte"
  import "../app.css"

  let { children } = $props()
</script>

<div class="h-screen dark:bg-gray-900 dark:text-white">
  <Header />
  {@render children()}
</div>
