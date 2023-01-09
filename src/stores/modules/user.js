import { defineStore } from 'pinia';
// import csv from "../../data.csv";

// 第一個是store名稱，第二個是屬性參數
export const userStore = defineStore('userStore', {
  // 對應data
  state: () => ({
    // rawData: JSON.parse(JSON.stringify(csv)),
    token: '',
    confirm: '已成功引入 pinia',
    login: false, // 是否是登入狀態
  }),
  // 物件型式 對應屬性，有緩存功能
  getters: {
    // getCompanyInfo: (state) => { 
    //   return state.rawData;
    // }
  },
  //對應methods ，封裝業務邏輯來處理state
  actions: {
    // getCompanyData() { 
    //   this.rawData = JSON.parse(JSON.stringify(csv));
    // }
  }
})
