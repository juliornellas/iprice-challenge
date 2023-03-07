import { createStore } from "vuex";
import data from "@/data/data.json";

export default createStore({
  state: {
    items: [],
    empties: [],
  },
  getters: {},
  mutations: {
    handleData(state, { Items: i }) {
      let data = [];
      let empties = [];
      i.forEach(({ Company, DateSent, Id, Preferred, Quote }) => {
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
          empties.push({
            Company,
            DateSent,
            Id,
            Preferred,
            Quote: false,
          });
        }
      });
      state.items = [...data];
      state.empties = [...empties];
      console.log("DATA", state);
    },
  },
  actions: {
    readData({ commit }) {
      commit("handleData", data);
    },
  },
  modules: {},
});
