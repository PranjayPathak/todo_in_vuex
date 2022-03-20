<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteTask() {
      this.$store.dispatch("deleteTask", this.task.id);
      // this.$emit("delTask", this.task.id);
    },
    editTask() {
      this.$emit("editTask", this.task.id);
    },
    toggleStatus() {
      this.$store.dispatch("toggleStatus", this.task.id);
      // this.$emit("toggleStatus", this.task.id);
    },
  },
};
</script>

<template>
  <div class="task_container">
    <div class="flex_container p-2 my-2 rounded-sm bg-primary-200">
      <div class="flex_container">
        <input
          class="taskcell_checkbox mx-2"
          type="checkbox"
          id="done"
          value="true"
          v-bind:checked="task.isCompleted"
          v-on:click="toggleStatus"
        />
        <p
          class="color-black container body-lg"
          v-bind:class="{ strike: task.isCompleted }"
        >
          {{ task.data }}
        </p>
      </div>
      <div class="flex_container taskcell_inputs">
        <button
          class="btn primary sm my-2"
          v-bind:disabled="task.isCompleted"
          v-on:click="editTask"
        >
          Edit
        </button>
        <button class="btn error sm my-2" v-on:click="deleteTask">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.color-black {
  color: #222222;
}

.flex_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.taskcell__checkbox {
  width: 5rem;
  height: 5rem;
}

.taskcell_inputs {
  width: 10rem;
}

.strike {
  text-decoration: line-through;
}
</style>
