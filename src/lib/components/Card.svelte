<script lang="ts">
  let {
    content = $bindable(""),
    front = "",
    back = "",
    flippable = false,
    editable = false,
  } = $props()

  content = content ? content : front

  let flipped = false

  function doFlip() {
    flipped = !flipped
    content = flipped ? back : front
  }
</script>

<div class="flex h-max w-full flex-col items-center">
  <textarea
    class="mx-10 my-5 h-60 w-9/10 resize-none rounded-2xl border-none bg-amber-100 px-20 py-10 text-center align-middle dark:bg-gray-800"
    placeholder="Text..."
    readonly={!editable}
    bind:value={content}
  ></textarea>

  {#if flippable}
    <button
      class="w-30 rounded-2xl border-2 border-green-800 bg-green-600 p-2 text-white"
      onclick={doFlip}
    >
      Flip
    </button>
  {/if}
</div>
