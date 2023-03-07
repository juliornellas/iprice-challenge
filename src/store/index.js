import { createStore } from "vuex";
import data from "@/data/data.json";

export default createStore({
  state: {
    items: [],
  },
  getters: {},
  mutations: {
    handleData(state, { Items: items }) {
      const i = items.map(({ Company, DateSent, Id, Preferred, Quote }) => {
        if (Quote) {
          return Quote.map((item) => {
            return {
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
            };
          });
        } else {
          return {
            Company,
            DateSent,
            Id,
            Preferred,
            Quote,
          };
        }
      });
      console.log("Before handle", items);
      console.log("Inside handle data", i);
    },
  },
  actions: {
    readData({ commit }) {
      commit("handleData", data);
    },
  },
  modules: {},
});
