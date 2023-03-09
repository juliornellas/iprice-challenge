<script>
import {
  // ChevronRightIcon,
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/vue/24/solid";
import { ref } from "vue";
export default {
  components: {
    // ChevronRightIcon,
    ChevronDoubleDownIcon,
    ChevronDoubleUpIcon,
    // ChevronDownIcon,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    empties: {
      type: Array,
      required: false,
    },
  },
  emits: ["sortByDate", "sortByCompanyName"],
  setup(props, { emit }) {
    let sortDate = ref(false);
    let sortCompanyName = ref(false);
    const sortByDate = () => {
      sortDate.value = !sortDate.value;
      emit("sortByDate", sortDate.value);
    };
    const sortByCompanyName = () => {
      sortCompanyName.value = !sortCompanyName.value;
      emit("sortByCompanyName", sortCompanyName.value);
    };
    return {
      sortDate,
      sortCompanyName,
      expand: () => console.log("EXPANDED!"),
      sortByDate,
      sortByCompanyName,
    };
  },
};
</script>
<template>
  <table class="w-full bg-white dark:bg-slate-800 text-sm shadow-sm">
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th colspan="2" class="text-xs border-b border-gray-800">5 YRS</th>
        <th colspan="2" class="text-xs border-b border-gray-800">10 YRS</th>
        <th colspan="2" class="text-xs border-b border-gray-800">40 YRS</th>
      </tr>
      <tr class="text-gray-400">
        <th
          scope="col"
          class="w-2/12 px-2 text-xs border-b border-gray-900 dark:text-slate-200 dark:border-gray-600"
        >
          <div class="flex items-center">
            DATA SENT
            <ChevronDoubleDownIcon
              v-if="!sortDate"
              @click="sortByDate()"
              class="h-3 w-3 ml-2 text-gray-800"
            />
            <ChevronDoubleUpIcon
              v-else
              @click="sortByDate()"
              class="h-3 w-3 ml-2 text-gray-800"
            />
          </div>
        </th>
        <th
          scope="col"
          class="w-5/12 px-2 text-xs text-left border-b border-gray-900 dark:text-slate-200 dark:border-gray-600"
        >
          <div class="flex items-center">
            COMPANY
            <ChevronDoubleDownIcon
              v-if="!sortCompanyName"
              @click="sortByCompanyName()"
              class="h-3 w-3 ml-2 text-gray-800"
            />
            <ChevronDoubleUpIcon
              v-else
              @click="sortByCompanyName()"
              class="h-3 w-3 ml-2 text-gray-800"
            />
          </div>
        </th>
        <th
          scope="col"
          class="w-1/12 px-2 text-xs border-b border-gray-900 dark:text-slate-200 dark:border-gray-600"
        >
          FIX
        </th>
        <th
          scope="col"
          class="w-1/12 px-2 text-xs border-b border-gray-900 dark:text-slate-200 dark:border-gray-600"
        >
          FRN
        </th>
        <th
          scope="col"
          class="w-1/12 px-2 text-xs border-b border-gray-900 dark:text-slate-200 dark:border-gray-600"
        >
          FIX
        </th>
        <th
          scope="col"
          class="w-1/12 px-2 text-xs border-b border-gray-900 dark:text-slate-200 dark:border-gray-600"
        >
          FRN
        </th>
        <th
          scope="col"
          class="w-1/12 px-2 text-xs border-b border-gray-900 dark:text-slate-200 dark:border-gray-600"
        >
          FIX
        </th>
        <th
          scope="col"
          class="w-1/12 px-2 text-xs border-b border-gray-900 dark:text-slate-200 dark:border-gray-600"
        >
          FRN
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="hover:bg-gray-100"
        v-for="(item, index) in items"
        :key="index"
      ></tr>
      <!-- Empties -->
      <tr
        class="hover:bg-gray-100"
        v-for="(empty, index) in empties"
        :key="index"
      >
        <td
          class="border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        ></td>
        <td
          class="text-left text-gray-400 dark:text-gray-200 border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        >
          {{ empty.Company }}
        </td>
        <td
          class="border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        ></td>
        <td
          class="border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        ></td>
        <td
          class="border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        ></td>
        <td
          class="border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        ></td>
        <td
          class="border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        ></td>
        <td
          class="border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        ></td>
      </tr>
      <tr class="border-b border-gray-800"></tr>
    </tbody>
    <tfoot>
      <tr class="border border-gray-800" v-if="items.length > 0">
        <td class="py-4"></td>
        <td class="text-left">Average by Spread</td>
        <td>13</td>
        <td>13</td>
        <td>13</td>
        <td>13</td>
        <td>13</td>
        <td>13</td>
      </tr>
      <tr v-else>
        <td colspan="8" class="text-xl text-center italic">
          No companies found
        </td>
      </tr>
    </tfoot>
  </table>
</template>
