<script>
import {
  ChevronRightIcon,
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/vue/24/solid";

export default {
  components: {
    ChevronRightIcon,
    ChevronDoubleDownIcon,
    ChevronDoubleUpIcon,
    // ChevronDownIcon,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    // empties: {
    //   type: Array,
    //   required: false,
    // },
  },
  setup() {
    return {
      expand: () => console.log("EXPANDED!"),
      sort: () => console.log("SORT!"),
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
              @click="sort()"
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
            <ChevronDoubleUpIcon
              @click="sort()"
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
      <tr class="hover:bg-gray-100" v-for="(item, index) in items" :key="index">
        <td
          class="border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        >
          <div class="flex items-center">
            <ChevronRightIcon
              @click="expand()"
              v-if="item.DateSent"
              class="h-3 w-3 mr-2"
            />
            {{ item.DateSent }}
          </div>
        </td>
        <td
          class="text-left border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        >
          {{ item.Company }}
        </td>
        <td
          class="bg-yellow-100 border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        >
          {{ item.Years === 5 && item.CouponType === "FIX" && item.Spread }}
        </td>
        <td
          class="border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        >
          {{ item.Years === 5 && item.CouponType === "FRN" && item.Spread }}
        </td>
        <td
          class="border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        >
          {{ item.Years === 10 && item.CouponType === "FIX" && item.Spread }}
        </td>
        <td
          class="border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        >
          {{ item.Years === 10 && item.CouponType === "FRN" && item.Spread }}
        </td>
        <td
          class="border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        >
          {{ item.Years === 40 && item.CouponType === "FIX" && item.Spread }}
        </td>
        <td
          class="border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        >
          {{ item.Years === 40 && item.CouponType === "FRN" && item.Spread }}
        </td>
      </tr>

      <!-- <tr
        class="hover:bg-gray-100"
        v-for="(empty, index) in empties"
        :key="index"
      >
        <td
          class="border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        ></td>
        <td
          class="text-left border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
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
      </tr> -->
      <!-- <tr v-if="item.quote > 0">
        Date / Company / FIX / FRN / FIX / FRN / FIX / FRN
      </tr> -->
      <tr class="border-b border-gray-800"></tr>
    </tbody>
    <tfoot>
      <tr class="border border-gray-800" v-if="items.length > 0">
        <td class="py-4"></td>
        <td class="text-left">Average by Spread</td>
        <td>21,000</td>
        <td>21,000</td>
        <td>21,000</td>
        <td>21,000</td>
        <td>21,000</td>
        <td>21,000</td>
      </tr>
      <tr v-else>
        <td colspan="8" class="text-xl text-center italic">
          No companies found
        </td>
      </tr>
    </tfoot>
  </table>
</template>
