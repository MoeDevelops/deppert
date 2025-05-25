<script lang="ts">
  type Route = {
    display: string
    route: string
  }

  const routes: Route[] = [
    {
      display: "Home",
      route: "/",
    },
    {
      display: "List",
      route: "/list",
    },
    {
      display: "New",
      route: "/new",
    },
  ]
</script>

<div class="flex justify-around">
  {#each routes as route, i (i)}
    <a
      class="m-4 w-30 rounded-2xl border-2 border-gray-500 bg-gray-300 p-4 text-center hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-black"
      href={route.route}
    >
      {route.display}
    </a>
  {/each}
</div>
