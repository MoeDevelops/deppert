<script lang="ts">
  import { browser } from "$app/environment"
  import type { CardData } from "$lib"

  let entries: CardData[] = $state([])

  if (browser) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)!
      const value = localStorage.getItem(key)!
      entries.push(JSON.parse(value))
    }

    entries.sort((a, b) => a.createdAt - b.createdAt)
  }
</script>

<div class="my-4 flex flex-col justify-center">
  {#each entries as entry, i (i)}
    <a
      class="mx-20 my-2 rounded-2xl border-2 border-gray-500 bg-gray-300 p-4 text-center hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-black"
      href="/view?id={entry.id}"
    >
      {entry.front}
    </a>
  {/each}
</div>
