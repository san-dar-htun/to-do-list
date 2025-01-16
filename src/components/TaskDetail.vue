<template>
  <div class="task">
        <span>{{task.title}}</span>
        <div class="icon">
         <i class="material-icons">
            delete
        </i>
         <i class="material-icons">
            favorite
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