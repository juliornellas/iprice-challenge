<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
<template>
  <table class="w-full bg-white dark:bg-slate-800 text-sm shadow-sm">
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th colspan="2" class="border-b border-gray-800">5 YRS</th>
        <th colspan="2" class="border-b border-gray-800">10 YRS</th>
        <th colspan="2" class="border-b border-gray-800">40 YRS</th>
      </tr>
      <tr class="text-gray-400">
        <th
          scope="col"
          class="w-2/12 border-b border-gray-900 dark:text-slate-200 dark:border-gray-600"
        >
          DATA SENT
        </th>
        <th
          scope="col"
          class="w-5/12 text-left border-b border-gray-900 dark:text-slate-200 dark:border-gray-600"
        >
          COMPANY
        </th>
        <th
          scope="col"
          class="w-1/12 border-b border-gray-900 dark:text-slate-200 dark:border-gray-600"
        >
          FIX
        </th>
        <th
          scope="col"
          class="w-1/12 border-b border-gray-900 dark:text-slate-200 dark:border-gray-600"
        >
          FRN
        </th>
        <th
          scope="col"
          class="w-1/12 border-b border-gray-900 dark:text-slate-200 dark:border-gray-600"
        >
          FIX
        </th>
        <th
          scope="col"
          class="w-1/12 border-b border-gray-900 dark:text-slate-200 dark:border-gray-600"
        >
          FRN
        </th>
        <th
          scope="col"
          class="w-1/12 border-b border-gray-900 dark:text-slate-200 dark:border-gray-600"
        >
          FIX
        </th>
        <th
          scope="col"
          class="w-1/12 border-b border-gray-900 dark:text-slate-200 dark:border-gray-600"
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
          {{ item.DateSent }}
        </td>
        <td
          class="text-left border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        >
          {{ item.Company }}
        </td>
        <td
          class="border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        >
          latitude
        </td>
        <td
          class="border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        >
          longitude
        </td>
        <td
          class="border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        >
          longitude
        </td>
        <td
          class="border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        >
          longitude
        </td>
        <td
          class="border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        >
          longitude
        </td>
        <td
          class="border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
        >
          longitude
        </td>
      </tr>
      <tr class="border-b border-gray-800"></tr>
    </tbody>
    <tfoot>
      <tr class="border border-gray-800">
        <td class="py-4"></td>
        <td class="text-left">Average by Spread</td>
        <td>21,000</td>
        <td>21,000</td>
        <td>21,000</td>
        <td>21,000</td>
        <td>21,000</td>
        <td>21,000</td>
      </tr>
    </tfoot>
  </table>
</template>
