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
        <th
          class="border-b border-gray-900 dark:text-slate-200 dark:border-gray-600 p-2"
        >
          DATA SENT
        </th>
        <th
          class="border-b border-gray-900 dark:text-slate-200 dark:border-gray-600 p-2"
        >
          COMPANY
        </th>
        <th
          class="border-b border-gray-900 dark:text-slate-200 dark:border-gray-600 p-2"
        >
          FIX
        </th>
        <th
          class="border-b border-gray-900 dark:text-slate-200 dark:border-gray-600 p-2"
        >
          FRN
        </th>
        <th
          class="border-b border-gray-900 dark:text-slate-200 dark:border-gray-600 p-2"
        >
          FIX
        </th>
        <th
          class="border-b border-gray-900 dark:text-slate-200 dark:border-gray-600 p-2"
        >
          FRN
        </th>
        <th
          class="border-b border-gray-900 dark:text-slate-200 dark:border-gray-600 p-2"
        >
          FIX
        </th>
        <th
          class="border-b border-gray-900 dark:text-slate-200 dark:border-gray-600 p-2"
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
          class="border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
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
    </tbody>
  </table>
</template>
