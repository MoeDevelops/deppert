<script lang="ts">
  import { browser } from "$app/environment"
  import { goto } from "$app/navigation"
  import { page } from "$app/state"
  import type { CardData } from "$lib"
  import Card from "$lib/components/Card.svelte"

  let card: CardData | null

  if (browser) {
    const id = page.url.searchParams.get("id")
    const item = localStorage.getItem(id ?? "")
    if (item != null) card = JSON.parse(item)
  }

  function doDelete() {
    localStorage.removeItem(card?.id ?? "")
    goto("/list")
  }
</script>

{#if card}
  <div class="flex flex-col items-center">
    <Card front={card.front} back={card.back} flippable></Card>
    <button
      class="my-5 w-30 rounded-2xl border-2 border-red-700 bg-red-500 p-2 text-white"
      onclick={doDelete}
    >
      Delete
    </button>
  </div>
{/if}
