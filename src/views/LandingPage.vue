<script>
// @ is an alias to /src
import { useStore } from "vuex";
import MainTable from "@/components/UI/MainTable.vue";
export default {
  name: "LandingPage",
  components: {
    MainTable,
  },
  setup() {
    const store = useStore();
    store.dispatch("readData");

    return {
      title: "iPrice Challenge",
      items: store.state.items,
      empties: store.state.empties,
    };
  },
};
</script>

<template>
  <div class="mx-8">
    <div class="mt-3">
      <p class="text-2xl font-bold mb-3">{{ title }}</p>
      <div class="my-2 flex justify-start">
        <div>
          <span
            class="p-2 border border-sky-800 rounded-l-md text-sky-800 text-xs"
            >USD</span
          >
          <span class="p-2 border border-sky-800 text-sky-800 text-xs"
            >EUR</span
          >
          <span
            class="p-2 border border-sky-800 rounded-r-md text-sky-800 text-xs"
            >CAD</span
          >
        </div>
        <div class="mx-4">
          <span
            class="p-2 border border-sky-800 rounded-l-md text-sky-800 text-xs"
            >5 YRS</span
          >
          <span class="p-2 border border-sky-800 text-sky-800 text-xs"
            >10 YRS</span
          >
          <span
            class="p-2 border border-sky-800 rounded-r-md text-sky-800 text-xs"
            >40 YRS</span
          >
        </div>
        <div>
          <span
            class="p-2 border border-sky-800 rounded-l-md text-sky-800 text-xs"
            >Spread</span
          >
          <span class="p-2 border border-sky-800 text-sky-800 text-xs"
            >Yield</span
          >
          <span
            class="p-2 border border-sky-800 rounded-r-md text-sky-800 text-xs"
            >3MLSpread</span
          >
        </div>
      </div>
    </div>

    <div class="flex justify-start my-4">
      <input
        type="text"
        class="w-60 border p-2 text-sm rounded"
        placeholder="Filter by compan name"
      />
    </div>

    <div>
      <MainTable :items="items" :empties="empties"></MainTable>
    </div>
  </div>
</template>
