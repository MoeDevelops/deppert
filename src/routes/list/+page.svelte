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

<div>
  {#each entries as entry, i (i)}
    <a href="/view?id={entry.id}">
      {entry.front}
    </a>
    <br />
  {/each}
</div>
