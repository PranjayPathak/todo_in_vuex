<script>
import TaskCell from "./components/TaskCell.vue";
export default {
  name: "App",
  data() {
    return {
      newTask: "",
    };
  },
  computed: {
    demoTasks() {
      return this.$store.state.demoTasks;
    },
  },
  methods: {
    addTask() {
      this.$store.dispatch("addTask", this.newTask);
      this.newTask = ""; //reset task in input
    },
    deleteTask(taskId) {
      this.$store.dispatch("deleteTask", taskId);
    },
    toggleStatus(taskId) {
      this.$store.dispatch("toggleStatus", taskId);
    },
    editTask(taskId) {
      this.demoTasks.map((task) => {
        if (task.id === taskId) {
          //remove task from list and pass to input
          this.$store.dispatch("deleteTask", taskId);
          this.newTask = task.data;
        }
      });
    },
  },
  components: { TaskCell },
};
</script>

<template>
  <div class="todo_container bg-primary-600 rounded-sm m-10 p-5 shadow-2xl">
    <div>
      <div>
        <p class="headline-2 my-5">My Tasks</p>
        <form v-on:submit.prevent="addTask">
          <div class="form_container">
            <input
              id="task-input"
              class="input input-lg mt-3 mb-5 rounded-sm"
              v-model="newTask"
              placeholder="Please add new task"
              maxlength="50"
              required="true"
              type="text"
            />
            <button class="add_button m-5 btn success p-5">Add +</button>
          </div>
        </form>
      </div>
      <div class="p-1" v-for="task in demoTasks" v-bind:key="task.id">
        <TaskCell
          v-bind:task="task"
          v-on:delTask="deleteTask($event)"
          v-on:toggleStatus="toggleStatus($event)"
          v-on:editTask="editTask($event)"
        />
      </div>
    </div>
  </div>
</template>

<style>
@import "./assets/base.css";
.headline-2 {
  text-align: center;
}

button {
  font-weight: 600;
}

.form_container {
  display: flex;
}

.input {
  height: 4rem;
}

.add_button {
  position: absolute;
  height: 3rem;
  top: 1.2rem;
  right: 1rem;
  white-space: nowrap;
}

.todo_container {
  min-height: 90vh;
}
</style>
