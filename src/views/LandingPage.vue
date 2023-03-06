<script>
// @ is an alias to /src
import { useStore } from "vuex";
import MainTable from "@/components/UI/MainTable.vue";
import data from "@/data/data.json";
export default {
  name: "LandingPage",
  components: {
    MainTable,
  },
  setup() {
    const store = useStore();
    //Usar essa pagina como principal e inserir dados no VUEX aqui e buscar direto na tabela dos items
    return {
      title: "iPrice Challenge",
      items: store.state.items,
      fromJson: data.Items,
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
          <span class="p-2 border rounded-l-md text-blue-700 text-xs">USD</span>
          <span class="p-2 border text-blue-700 text-xs">EUR</span>
          <span class="p-2 border rounded-r-md text-blue-700 text-xs">CAD</span>
        </div>
        <div class="mx-4">
          <span class="p-2 border rounded-l-md text-blue-700 text-xs"
            >5 YRS</span
          >
          <span class="p-2 border text-blue-700 text-xs">10 YRS</span>
          <span class="p-2 border rounded-r-md text-blue-700 text-xs"
            >40 YRS</span
          >
        </div>
        <div>
          <span class="p-2 border rounded-l-md text-blue-700 text-xs"
            >Spread</span
          >
          <span class="p-2 border text-blue-700 text-xs">Yield</span>
          <span class="p-2 border rounded-r-md text-blue-700 text-xs"
            >3MLSpread</span
          >
        </div>
      </div>
    </div>

    <div class="flex justify-start my-4">
      <input
        type="text"
        class="border px-2 text-sm rounded"
        placeholder="Filter by compan name"
      />
    </div>

    <div>
      <MainTable :items="fromJson"></MainTable>
    </div>
  </div>
</template>
