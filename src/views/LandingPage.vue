<script>
// @ is an alias to /src
import { useStore } from "vuex";
import MainTable from "@/components/UI/MainTable.vue";
import { ref, computed } from "vue";
export default {
  name: "LandingPage",
  components: {
    MainTable,
  },
  setup() {
    const store = useStore();
    store.dispatch("readData");
    const items = store.state.items;

    //Filtering
    const search = ref("");
    const filteredCurrency = ref("USD");
    const filteredType = ref("Spread");
    const filteredYears5 = ref(true);
    const filteredYears10 = ref(true);
    const filteredYears40 = ref(true);

    // const filteredTypeSpread = ref(true);
    // const filteredTypeYield = ref(false);
    // const filteredType3MLSpread = ref(false);

    function selectedType(type) {
      console.log("Selected Type", type);
      filteredType.value = type;

      // if (type === "spread") {
      //   filteredTypeSpread.value = !filteredTypeSpread.value;
      // } else if (type === "yield") {
      //   filteredTypeYield.value = !filteredTypeYield.value;
      // } else {
      //   filteredType3MLSpread.value = !filteredType3MLSpread.value;
      // }
    }

    function selectedCurrency(curr) {
      filteredCurrency.value = curr;
    }

    function selectedYears(years) {
      if (years === 5) {
        filteredYears5.value = !filteredYears5.value;
      } else if (years === 10) {
        filteredYears10.value = !filteredYears10.value;
      } else {
        filteredYears40.value = !filteredYears40.value;
      }
    }

    const filteredItems = computed(() => {
      return items
        .filter((item) =>
          item.Company.toLowerCase().match(search.value.toLowerCase())
        )
        .filter((item) => item.Currency === filteredCurrency.value)
        .filter(
          (item) =>
            (filteredYears5.value && item.Years === 5) ||
            (filteredYears10.value && item.Years === 10) ||
            (filteredYears40.value && item.Years === 40)
        )
        .filter((item) => {
          return item;
        });
    });

    return {
      filteredItems,
      filteredCurrency,
      filteredYears5,
      filteredYears10,
      filteredYears40,
      search,
      title: "iPrice Challenge",
      items,
      // empties: store.state.empties,
      // filteredTypeSpread,
      // filteredTypeYield,
      // filteredType3MLSpread,
      filteredType,
      selectedType,
      selectedCurrency,
      selectedYears,
    };
  },
};
</script>

<template>
  <div class="mx-8">
    <div class="mt-3">
      <p class="text-2xl font-bold mb-3">{{ title }}</p>
      <div class="my-2 flex justify-start">
        <!-- Currency -->
        <div>
          <span
            :class="filteredCurrency === 'USD' && 'bg-sky-800 text-white'"
            class="p-2 border border-sky-800 rounded-l-md text-sky-800 text-xs"
            @click="selectedCurrency('USD')"
            >USD</span
          >
          <span
            :class="filteredCurrency === 'EUR' && 'bg-sky-800 text-white'"
            class="p-2 border border-sky-800 text-sky-800 text-xs"
            @click="selectedCurrency('EUR')"
            >EUR</span
          >
          <span
            :class="filteredCurrency === 'CAD' && 'bg-sky-800 text-white'"
            class="p-2 border border-sky-800 rounded-r-md text-sky-800 text-xs"
            @click="selectedCurrency('CAD')"
            >CAD</span
          >
        </div>
        <!-- Years -->
        <div class="mx-4">
          <span
            :class="filteredYears5 && 'bg-sky-800 text-white'"
            class="p-2 border border-sky-800 rounded-l-md text-sky-800 text-xs"
            @click="selectedYears(5)"
            >5 YRS</span
          >
          <span
            :class="filteredYears10 && 'bg-sky-800 text-white'"
            class="p-2 border border-sky-800 text-sky-800 text-xs"
            @click="selectedYears(10)"
            >10 YRS</span
          >
          <span
            :class="filteredYears40 && 'bg-sky-800 text-white'"
            class="p-2 border border-sky-800 rounded-r-md text-sky-800 text-xs"
            @click="selectedYears(40)"
            >40 YRS</span
          >
        </div>
        <!-- Type -->
        <div>
          <span
            :class="filteredType === 'Spread' && 'bg-sky-800 text-white'"
            class="p-2 border border-sky-800 rounded-l-md text-sky-800 text-xs"
            @click="selectedType('Spread')"
            >Spread</span
          >
          <span
            :class="filteredType === 'Yield' && 'bg-sky-800 text-white'"
            class="p-2 border border-sky-800 text-sky-800 text-xs"
            @click="selectedType('Yield')"
            >Yield</span
          >
          <span
            :class="filteredType === '3MLSpread' && 'bg-sky-800 text-white'"
            class="p-2 border border-sky-800 rounded-r-md text-sky-800 text-xs"
            @click="selectedType('3MLSpread')"
            >3MLSpread</span
          >
        </div>
      </div>
    </div>

    <div class="flex justify-start my-4">
      <input
        v-model="search"
        type="text"
        class="w-60 border p-2 text-sm rounded"
        placeholder="Filter by compan name"
      />
    </div>

    <div>
      <MainTable :items="filteredItems"></MainTable>
    </div>
  </div>
</template>
