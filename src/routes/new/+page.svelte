<script lang="ts">
  import { v4 } from "uuid"
  import { goto } from "$app/navigation"
  import { type CardData } from "$lib"
  import Card from "$lib/components/Card.svelte"

  let front = $state("")
  let back = $state("")

  function doSave() {
    const id = v4()

    const cardData: CardData = {
      id: id,
      front: front,
      back: back,
      createdAt: Date.now(),
    }

    localStorage.setItem(id, JSON.stringify(cardData))

    goto("/list")
  }
</script>

<div>
  <Card bind:content={front} editable />
  <Card bind:content={back} editable />
  <button
    class="rounded-2xl border-2 border-green-800 bg-green-600 p-2 text-white"
    onclick={doSave}
  >
    Save
  </button>
</div>
