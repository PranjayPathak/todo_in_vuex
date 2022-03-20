import { createStore } from "vuex";

export default createStore({
  state: {
    demoTasks: [
      {
        data: "Sample task 1",
        id: 1646702392949,
        isCompleted: true,
      },
      {
        data: "Sample task 2",
        id: 1246702392949,
        isCompleted: true,
      },
      {
        data: "Sample task 3",
        id: 1236723921949,
        isCompleted: false,
      },
      {
        data: "Sample task 4",
        id: 1246702392149,
        isCompleted: true,
      },
    ],
  },
  getters: {},
  mutations: {
    addTask: (state, newTask) => {
      let check = true; //flag to check if task already exists
      state.demoTasks.map((task) => {
        if (task.data === newTask) {
          check = false;
        }
      });
      if (check) {
        state.demoTasks.unshift({
          data: newTask,
          id: Date.now(),
          isCompleted: false,
        });
      }
    },
    deleteTask: (state, taskId) => {
      state.demoTasks = state.demoTasks.filter((task) => {
        //filtering task with same ID
        return task.id !== taskId;
      });
    },
    toggleStatus(state, taskId) {
      state.demoTasks.forEach((task) => {
        if (task.id === taskId) {
          //Toggling isComplete status
          task.isCompleted = !task.isCompleted;
        }
      });
    },
  },
  actions: {
    addTask: (context, newTask) => {
      context.commit("addTask", newTask);
    },
    deleteTask: (context, taskId) => {
      context.commit("deleteTask", taskId);
    },
    toggleStatus: (context, taskId) => {
      context.commit("toggleStatus", taskId);
    },
  },
  modules: {},
});
