<script lang="ts">
  import { browser } from "$app/environment"
  import { page } from "$app/state"
  import type { CardData } from "$lib"
  import Card from "$lib/components/Card.svelte"

  let card: CardData | null

  if (browser) {
    const id = page.url.searchParams.get("id")
    const item = localStorage.getItem(id ?? "")
    if (item != null) card = JSON.parse(item)
  }
</script>

{#if card}
  <Card front={card.front} back={card.back} flippable></Card>
{/if}
