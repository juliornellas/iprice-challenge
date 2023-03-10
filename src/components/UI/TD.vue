<script>
import { computed, defineComponent } from "vue";
export default defineComponent({
  props: ["item", "column"],
  setup(props) {
    const prop = { ...props };
    const i = computed(() => {
      if (!prop.item[props.column][0]?.value) return ``;
      let sufix = "",
        prefix = "";
      prop.item.Type !== "Yield"
        ? ((prefix = "+"), (sufix = "bp"))
        : (sufix = "%");

      return `${prefix}${prop.item[props.column][0]?.value}${sufix}`;
    });

    return {
      i,
    };
  },
});
</script>

<template>
  <td
    class="border-b border-gray-300 dark:border-gray-700 p-2 dark:text-slate-400"
  >
    {{ i }}
  </td>
</template>
