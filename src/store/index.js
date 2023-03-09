import { createStore } from "vuex";
import data from "@/data/data.json";

export default createStore({
  state: {
    items: [],
    empties: [],
    items2: [],
    empties2: [],
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
      console.log("Before", i);
      console.log("DATA", state);
    },

    handleData2(state, { Items: i }) {
      let data = [];
      let empties = [];
      i.forEach(({ Company, DateSent, Id, Preferred, Quote }) => {
        if (Quote) {
          //Base variables for each ROW
          let baseSpread = {
            DateSent,
            Company,
            Currency: "",
            Years: "",
            Type: "Spread",
            Fix5yrs: [],
            Frn5yrs: [],
            Fix10yrs: [],
            Frn10yrs: [],
            Fix40yrs: [],
            Frn40yrs: [],
          };
          let baseYield = {
            DateSent,
            Company,
            Currency: "",
            Years: "",
            Type: "Yield",
            Fix5yrs: [],
            Frn5yrs: [],
            Fix10yrs: [],
            Frn10yrs: [],
            Fix40yrs: [],
            Frn40yrs: [],
          };
          let base3MLSpread = {
            DateSent,
            Company,
            Currency: "",
            Years: "",
            Type: "3MLSpread",
            Fix5yrs: [],
            Frn5yrs: [],
            Fix10yrs: [],
            Frn10yrs: [],
            Fix40yrs: [],
            Frn40yrs: [],
          };
          //Loop inside a Quote
          Quote.forEach((item) => {
            baseSpread.Years = item.Years;
            base3MLSpread.Years = item.Years;
            baseYield.Years = item.Years;
            baseSpread.Currency = item.Currency;
            base3MLSpread.Currency = item.Currency;
            baseYield.Currency = item.Currency;
            if (item.Years === 5) {
              if (item.CouponType === "FIX") {
                baseSpread.Fix5yrs.push(item.Spread);
                baseYield.Fix5yrs.push(item.Yield);
                base3MLSpread.Fix5yrs.push(item["3MLSpread"]);
              } else {
                baseSpread.Frn5yrs.push(item.Spread);
                baseYield.Frn5yrs.push(item.Yield);
                base3MLSpread.Frn5yrs.push(item["3MLSpread"]);
              }
            }
            if (item.Years === 10) {
              if (item.CouponType === "FIX") {
                baseSpread.Fix10yrs.push(item.Spread);
                baseYield.Fix10yrs.push(item.Yield);
                base3MLSpread.Fix10yrs.push(item["3MLSpread"]);
              } else {
                baseSpread.Frn10yrs.push(item.Spread);
                baseYield.Frn10yrs.push(item.Yield);
                base3MLSpread.Frn10yrs.push(item["3MLSpread"]);
              }
            }
            if (item.Years === 40) {
              if (item.CouponType === "FIX") {
                baseSpread.Fix40yrs.push(item.Spread);
                baseYield.Fix40yrs.push(item.Yield);
                base3MLSpread.Fix40yrs.push(item["3MLSpread"]);
              } else {
                baseSpread.Frn40yrs.push(item.Spread);
                baseYield.Frn40yrs.push(item.Yield);
                base3MLSpread.Frn40yrs.push(item["3MLSpread"]);
              }
            }
          });
          //Push each base variable to the main arra data
          data.push(baseSpread);
          data.push(baseYield);
          data.push(base3MLSpread);
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
      console.log("Before NEW FORMAT", i);
      console.log("DATA - NEW FORMAT", state.items);

      // let array = {
      //   Openlane: {
      //     Spread: {
      //       Fix5yrs: [50],
      //       Frn5yrs: [],
      //       Fix10yrs: [50, 90],
      //       Frn10yrs: [94],
      //       Fix40yrs: [],
      //       Frn40yrs: [128],
      //     },
      //     Yield: {
      //       Fix5yrs: [0.873],
      //       Frn5yrs: [],
      //       Fix10yrs: [1.209, 1.828],
      //       Frn10yrs: [1.826],
      //       Fix40yrs: [],
      //       Frn40yrs: [2.962],
      //     },
      //     "3MLSpread": {
      //       Fix5yrs: [86],
      //       Frn5yrs: [],
      //       Fix10yrs: [13, 88],
      //       Frn10yrs: [86],
      //       Fix40yrs: [],
      //       Frn40yrs: [150],
      //     },
      //   },
      // };
      // console.table("New array", array);

      // let array2 = {
      //   DateSent: "2020-12-30",
      //   Company: "Openlane",
      //   Type: "Spread",
      //   Fix5yrs: [86],
      //   Frn5yrs: [],
      //   Fix10yrs: [13, 88],
      //   Frn10yrs: [86],
      //   Fix40yrs: [],
      //   Frn40yrs: [150],
      // };
      // console.table("New array 2", array2);
    },
  },
  actions: {
    readData({ commit }) {
      commit("handleData2", data);
    },
  },
  modules: {},
});
