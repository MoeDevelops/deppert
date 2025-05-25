<script lang="ts">
  import NavBar from "$lib/components/NavBar.svelte"
  import "../app.css"

  let { children } = $props()
</script>

<div
  class="flex h-screen flex-col justify-between dark:bg-gray-900 dark:text-white"
>
  <main class="mb-auto">
    {@render children()}
  </main>
  <footer>
    <NavBar />
  </footer>
</div>
