<template>
  <div class="flex justify-center">
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <h5 class="text-gray-900 text-xl leading-tight  mb-2 font-bold text-center">公司基本資料</h5>
      <p class="text-gray-700 text-base mb-4">
      
      </p>
      <div class="flex flex-col">
        <!-- table -->
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full ">

                <tbody>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> 代號</td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {{findCompany ? findCompany['公司代號']: "-" }}
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">公司名稱</td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {{findCompany ? findCompany['公司名稱']: "-" }}
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">資本額 (NTD)</td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {{findCompany ? findCompany['實收資本額']: "-" }}
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">成立日期</td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {{findCompany ? findCompany['成立日期']: "-" }}
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">產業別</td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {{findCompany ? findCompany['產業別']: "-" }}
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">網址</td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {{findCompany ?  findCompany['網址'] : "-" }}
                    </td>
                    </tr>
                  <tr class="bg-white">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">電話</td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {{findCompany ? findCompany['總機電話']: "-" }}
                    </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
</div>


    </div>
  </div>
</template>  

<script>
export default {
  props: [ "findCompany" ],
  data() { 
    return {

    }
  },

}



</script>