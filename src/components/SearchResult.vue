<template>
  <div>
    <div class="flex justify-center">
  <div class="block p-4 rounded-lg border-2  bg-white max-w-sm">
    <h5 class="text-gray-900 text-2xl leading-tight font-bold mb-2">搜尋結果</h5>
 <!-- 下面兩種方法都可以，前面記得改成Router-view -->
 <!-- 注意: 掛載處與被掛載處的差異 -->
    <!-- path: `/CompanyView/${item['公司代號']}` --> 
 <!--  name: 'CompanyView', params: { id: `${item['公司代號']}`} -->
 <!-- name的這方法要注意companyView 要是字串'' -->
      <RouterLink  :to="{ path: `/CompanyView/${item['公司代號']}`}"  v-for="item in companies" :key="item['公司代號']">
        <div class="block p-6 rounded-lg shadow-lg border  bg-white max-w-sm relative overflow-hidden mb-5 bg-no-repeat bg-cover ">
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-60 transition duration-300 ease-in-out bg-blue-400"></div>
          <h5 class="text-gray-900 text-xl leading-tight font-bold mb-2">{{item['公司名稱']}}</h5>
          <p class="text-gray-700 text-base ">
            {{`公司代號: ${item['公司代號']}, 地址: ${item['住址']}`}}
          </p>
        </div>
      </RouterLink>
      
  
  </div>
</div>
  
  
  
  </div>
</template>


<script>
import { RouterLink } from 'vue-router';

export default {
  props: ["findCompanies"],
  components: { RouterLink },
  data() { 
    return {
      companies: [],
    }
  },
  updated() {
    this.companies = this.findCompanies;
  }


}


</script>