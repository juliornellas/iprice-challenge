import { createStore } from "vuex";
import data from "@/data/data.json";

export default createStore({
  state: {
    items: [],
  },
  getters: {},
  mutations: {
    handleData(state, { Items: items }) {
      let data = [];
      items.forEach(({ Company, DateSent, Id, Preferred, Quote }) => {
        if (Quote) {
          Quote.forEach((item) => {
            data.push({
              Company,
              DateSent,
              Id,
              Preferred,
              Quote: true,
              "3MLSpread": item["3MLSpread"],
              Amount: item.Amount,
              CouponType: item.CouponType,
              Currency: item.Currency,
              Spread: item.Spread,
              Years: item.Years,
              Yield: item.Yield,
            });
          });
        } else {
          data.push({
            Company,
            DateSent,
            Id,
            Preferred,
            Quote: false,
          });
        }
      });
      console.log("DATA", data);
      state.items = [...data];
    },
  },
  actions: {
    readData({ commit }) {
      commit("handleData", data);
    },
  },
  modules: {},
});
