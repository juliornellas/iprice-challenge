import { createStore } from "vuex";
import data from "@/data/data.json";

export default createStore({
  state: {
    items: [],
    empties: [],
    items2: [],
    empties2: [],
    filters: {
      currency: "USD",
      type: "Spread",
      years5: true,
      years10: true,
      years40: true,
      search: "",
    },
  },
  getters: {
    getItems(state) {
      return state.items;
    },
    getCurrency(state) {
      return state.filters.currency;
    },
  },
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

    handleData2(state, { Items }) {
      let data = [];
      let empties = [];
      Items.forEach(({ Company, DateSent, Id, Preferred, Quote }) => {
        if (Quote) {
          //Base variables for each ROW
          let baseSpread = {
            DateSent,
            Company,
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
            //inserir o filtro AQUI???
            if (item.Years === 5) {
              if (item.CouponType === "FIX") {
                // baseSpread.Fix5yrs = Object.assign({
                //   value: item.Spread,
                //   currency: item.Currency,
                //   years: item.Years,
                // });
                // baseYield.Fix5yrs = Object.assign({
                //   value: item.Yield,
                //   currency: item.Currency,
                //   years: item.Years,
                // });
                // base3MLSpread.Fix5yrs = Object.assign({
                //   value: item["3MLSpread"],
                //   currency: item.Currency,
                //   years: item.Years,
                // });
                baseSpread.Fix5yrs.push({
                  value: item.Spread,
                  currency: item.Currency,
                  years: item.Years,
                });
                baseYield.Fix5yrs.push({
                  value: item.Yield,
                  currency: item.Currency,
                  years: item.Years,
                });
                base3MLSpread.Fix5yrs.push({
                  value: item["3MLSpread"],
                  currency: item.Currency,
                  years: item.Years,
                });
                // baseSpread.Fix5yrs.push(item.Spread);
                // baseYield.Fix5yrs.push(item.Yield);
                // base3MLSpread.Fix5yrs.push(item["3MLSpread"]);
              } else {
                baseSpread.Frn5yrs.push({
                  value: item.Spread,
                  currency: item.Currency,
                  years: item.Years,
                });
                baseYield.Frn5yrs.push({
                  value: item.Yield,
                  currency: item.Currency,
                  years: item.Years,
                });
                base3MLSpread.Frn5yrs.push({
                  value: item["3MLSpread"],
                  currency: item.Currency,
                  years: item.Years,
                });
                // baseSpread.Frn5yrs = Object.assign({
                //   value: item.Spread,
                //   currency: item.Currency,
                //   years: item.Years,
                // });
                // baseYield.Frn5yrs = Object.assign({
                //   value: item.Yield,
                //   currency: item.Currency,
                //   years: item.Years,
                // });
                // base3MLSpread.Frn5yrs = Object.assign({
                //   value: item["3MLSpread"],
                //   currency: item.Currency,
                //   years: item.Years,
                // });
                // baseSpread.Frn5yrs.push(item.Spread);
                // baseYield.Frn5yrs.push(item.Yield);
                // base3MLSpread.Frn5yrs.push(item["3MLSpread"]);
              }
            }
            if (item.Years === 10) {
              if (item.CouponType === "FIX") {
                baseSpread.Fix10yrs.push({
                  value: item.Spread,
                  currency: item.Currency,
                  years: item.Years,
                });
                baseYield.Fix10yrs.push({
                  value: item.Yield,
                  currency: item.Currency,
                  years: item.Years,
                });
                base3MLSpread.Fix10yrs.push({
                  value: item["3MLSpread"],
                  currency: item.Currency,
                  years: item.Years,
                });
                // baseSpread.Fix10yrs = Object.assign({
                //   value: item.Spread,
                //   currency: item.Currency,
                //   years: item.Years,
                // });
                // baseYield.Fix10yrs = Object.assign({
                //   value: item.Yield,
                //   currency: item.Currency,
                //   years: item.Years,
                // });
                // base3MLSpread.Fix10yrs = Object.assign({
                //   value: item["3MLSpread"],
                //   currency: item.Currency,
                //   years: item.Years,
                // });
                // baseSpread.Fix10yrs.push(item.Spread);
                // baseYield.Fix10yrs.push(item.Yield);
                // base3MLSpread.Fix10yrs.push(item["3MLSpread"]);
              } else {
                baseSpread.Frn10yrs.push({
                  value: item.Spread,
                  currency: item.Currency,
                  years: item.Years,
                });
                baseYield.Frn10yrs.push({
                  value: item.Yield,
                  currency: item.Currency,
                  years: item.Years,
                });
                base3MLSpread.Frn10yrs.push({
                  value: item["3MLSpread"],
                  currency: item.Currency,
                  years: item.Years,
                });
                // baseSpread.Frn10yrs = Object.assign({
                //   value: item.Spread,
                //   currency: item.Currency,
                //   years: item.Years,
                // });
                // baseYield.Frn10yrs = Object.assign({
                //   value: item.Yield,
                //   currency: item.Currency,
                //   years: item.Years,
                // });
                // base3MLSpread.Frn10yrs = Object.assign({
                //   value: item["3MLSpread"],
                //   currency: item.Currency,
                //   years: item.Years,
                // });
                // baseSpread.Frn10yrs.push(item.Spread);
                // baseYield.Frn10yrs.push(item.Yield);
                // base3MLSpread.Frn10yrs.push(item["3MLSpread"]);
              }
            }
            if (item.Years === 40) {
              if (item.CouponType === "FIX") {
                baseSpread.Fix40yrs.push({
                  value: item.Spread,
                  currency: item.Currency,
                  years: item.Years,
                });
                baseYield.Fix40yrs.push({
                  value: item.Yield,
                  currency: item.Currency,
                  years: item.Years,
                });
                base3MLSpread.Fix40yrs.push({
                  value: item["3MLSpread"],
                  currency: item.Currency,
                  years: item.Years,
                });
                // baseSpread.Fix40yrs = Object.assign({
                //   value: item.Spread,
                //   currency: item.Currency,
                //   years: item.Years,
                // });
                // baseYield.Fix40yrs = Object.assign({
                //   value: item.Yield,
                //   currency: item.Currency,
                //   years: item.Years,
                // });
                // base3MLSpread.Fix40yrs = Object.assign({
                //   value: item["3MLSpread"],
                //   currency: item.Currency,
                //   years: item.Years,
                // });
                // baseSpread.Fix40yrs.push(item.Spread);
                // baseYield.Fix40yrs.push(item.Yield);
                // base3MLSpread.Fix40yrs.push(item["3MLSpread"]);
              } else {
                baseSpread.Frn40yrs.push({
                  value: item.Spread,
                  currency: item.Currency,
                  years: item.Years,
                });
                baseYield.Frn40yrs.push({
                  value: item.Yield,
                  currency: item.Currency,
                  years: item.Years,
                });
                base3MLSpread.Frn40yrs.push({
                  value: item["3MLSpread"],
                  currency: item.Currency,
                  years: item.Years,
                });
                // baseSpread.Frn40yrs = Object.assign({
                //   value: item.Spread,
                //   currency: item.Currency,
                //   years: item.Years,
                // });
                // baseYield.Frn40yrs = Object.assign({
                //   value: item.Yield,
                //   currency: item.Currency,
                //   years: item.Years,
                // });
                // base3MLSpread.Frn40yrs = Object.assign({
                //   value: item["3MLSpread"],
                //   currency: item.Currency,
                //   years: item.Years,
                // });
                // baseSpread.Frn40yrs.push(item.Spread);
                // baseYield.Frn40yrs.push(item.Yield);
                // base3MLSpread.Frn40yrs.push(item["3MLSpread"]);
              }
            }
          });
          //Push each base variable to the main array data
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
      console.log("Before NEW FORMAT", Items);
      // console.log("DATA - NEW FORMAT", state.items);
    },

    setFilterCurrency(state, payload) {
      state.filters.currency = payload;
      this.commit("handleData2", data);
    },

    setFilterYears(state, payload) {
      if (payload === 5) state.filters.years5 = payload;
      if (payload === 10) state.filters.years10 = payload;
      if (payload === 40) state.filters.years40 = payload;
    },
    setFilterSearch(state, payload) {
      state.filters.search = payload;
    },
  },
  actions: {
    readData({ commit }) {
      commit("handleData2", data);
    },
    setFilterCurrency({ commit }, payload) {
      console.log("setFilterCurrency", payload);
      commit("setFilterCurrency", payload);
    },
    setFilterYears({ commit }, payload) {
      console.log("setFilterYears", payload);
      commit("setFilterYears", payload);
    },
    setFilterSearch({ commit }, payload) {
      commit("setFilterSearch", payload);
    },
  },
  modules: {},
});
