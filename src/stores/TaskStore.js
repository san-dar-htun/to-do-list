import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: "buy some milk",
        isFav: false,
      },
      {
        id: 2,
        title: "buy some juice",
        isFav: false,
      },
      {
        id: 3,
        title: "buy some creamy",
        isFav: true,
      },
      {
        id: 4,
        title: "buy some bean",
        isFav: true,
      },
    ],
  }),
  getters: {
    favs(state) {
      return state.tasks.filter((t) => t.isFav);
    },
    favCount(state) {
      return state.tasks.reduce((count, task) => {
        return task.isFav ? count + 1 : count;
      }, 0);
    },
    totalCount(state) {
      return state.tasks.length > 0 ? state.tasks.length : 0;
    },
  },
  actions: {
    addTasks(tasks) {
      this.tasks.push(...tasks);
    },
  },
});
