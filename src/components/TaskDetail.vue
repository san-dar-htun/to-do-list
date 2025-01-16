<template>
  <div class="task">
        <span>{{task.title}}</span>
        <div class="icon">
         <i class="material-icons">
            Delete
        </i>
         <i class="material-icons">
            Favorite
        </i>
        </div>
  </div>
</template>

<script>
export default {
    props: ["task"]
}
</script>

<style>

</style>