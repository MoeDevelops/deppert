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

<div>
  {#each routes as route, i (i)}
    <a class="mx-2" href={route.route}>
      {route.display}
    </a>
  {/each}
</div>
