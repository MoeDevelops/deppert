<script lang="ts">
  import { browser } from "$app/environment"
  import { goto } from "$app/navigation"
  import { page } from "$app/state"
  import { type CardData, getCards } from "$lib"
  import Card from "$lib/components/Card.svelte"

  let card: CardData | null = $state(null)
  let cards = getCards()

  if (browser) {
    getCard()
  }

  function getCard() {
    const id = page.url.searchParams.get("id")
    const item = localStorage.getItem(id ?? "")
    if (item !== null) card = JSON.parse(item)
  }

  function doDelete() {
    localStorage.removeItem(card?.id ?? "")
    goto("/list")
  }

  function doBack() {
    if (!card) return
    const index = cards.map((x) => x.id).indexOf(card.id)
    if (index === 0) return
    const before = cards.at(index - 1)
    if (!before) return
    window.location.href = "/view?id=" + before.id
  }

  function doNext() {
    if (!card) return
    const index = cards.map((x) => x.id).indexOf(card.id)
    if (index === cards.length - 1) return
    const after = cards.at(index + 1)
    if (!after) return
    window.location.href = "/view?id=" + after.id
  }
</script>

{#if card}
  <div class="flex flex-col items-center">
    <Card front={card.front} back={card.back} flippable></Card>
    <button
      class="mt-5 w-30 rounded-2xl border-2 border-blue-700 bg-blue-400 p-2 text-white"
      onclick={doBack}
    >
      Back
    </button>
    <button
      class="mt-5 w-30 rounded-2xl border-2 border-purple-700 bg-purple-500 p-2 text-white"
      onclick={doNext}
    >
      Next
    </button>
    <button
      class="mt-5 w-30 rounded-2xl border-2 border-red-700 bg-red-500 p-2 text-white"
      onclick={doDelete}
    >
      Delete
    </button>
  </div>
{/if}
