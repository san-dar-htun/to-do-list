<template>
<main>
  <!-- heading -->
  <header>
    <img height="100" class="pinia-icon" src="./assets/PiniaLogo.svg" alt="pinia-logo">
      <h2>Pinia Tasks</h2>
  </header>
  <!-- new tasks form -->
  <div class="new-task-form"> 
    <TaskForm/>
  </div>
  <!-- filter -->
  <nav class="filter">
    <button @click="filter='all'">All tasks</button>
    <button @click="filter='favs'">Fav tasks</button>
  </nav>

  <!-- task list -->
  <div  class="task-list" v-if="filter === 'all'">
    <p>All tasks</p>
    <p>You have to do {{taskStores.totalCount}} tasks</p>
    <div v-for="task in taskStores.tasks" :key="task.id">
      <TaskDetails :task="task"/>
    </div>
  </div>
  <div  class="ta sk-list" v-if="filter === 'favs'">
    <p>Fav tasks</p>
    <p>You have to do {{taskStores.favCount}} tasks</p>
    <div v-for="task in taskStores.favs" :key="task.id">
      <TaskDetails :task="task"/>
    </div>
  </div>
</main>
</template>

<script >
import TaskDetails from "./components/TaskDetail.vue"
import TaskForm from "./components/TaskForm.vue"
import {useTaskStore} from "./stores/TaskStore"
import {ref} from"vue"
export default {
  components:{TaskDetails,TaskForm},
  setup(){
    const filter = ref("all")
    const taskStores = useTaskStore()
    return {taskStores,filter}
  }
}
</script>
