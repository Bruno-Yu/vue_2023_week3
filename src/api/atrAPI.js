import Api from '@/assets/js/api';
// import qs from 'qs';

const apiPrefix = import.meta.env.VITE_APP_API;
const apiPath = import.meta.env.VITE_APP_PATH;
// const apiPrefix = import.meta.env.VITE_LOCAL_API;

// Api 自 Api 繼承所有屬性與方法
class atrApi extends Api {
  // 註冊
  // static async signUp({
  //   email, password, nickName, roleId,
  // }) {
  //   const params = {
  //     email, password, nickName, roleId,
  //   };
  //   const res = await this.callAxios('POST', `${apiPrefix}signup`, params, undefined, false);
  //   return res;
  // }

  // 註冊新增 collections 欄
  // static async signAddCollection({
  //   userId,
  // }) {
  //   const params = {
  //     userId,
  //     attractionId: [],
  //   };
  //   const res = await this.callAxios('POST', `${apiPrefix}collections`, params, undefined, false);
  //   return res;
  // }

  // 登入
  static async login({ username, password }) {
    const params = {
      username, password,
    };
    const res = await this.callAxios('POST', `${apiPrefix}admin/signin`, params, undefined, undefined, false);
    return res;
  }

  // admin取得景點
  static async getAdminProducts() {
    // const params = {
    //   rocNumOrBan,
    // };
    const res = await this.callAxios('GET', `${apiPrefix}api/${apiPath}/admin/products/all`, null, undefined, undefined, true);
    return res;
  }

  // 更新
  static async editAdminProduct(id, {title, category, origin_price, price, unit, description, content, is_enabled,imageUrl, imagesUrl }) {
    const params = {
    'data':{ 
      title,
      category,
      origin_price,
      price,
      unit,
      description,
      content,
      is_enabled,
      imageUrl,
      imagesUrl,
      }
    };
    const res = await this.callAxios('PUT', `${apiPrefix}api/${apiPath}/admin/product/${id}`, params, undefined, undefined, true);
    return res;
  }
    // 新增
  static async addAdminProduct( {title, category, origin_price, price, unit, description, content, is_enabled,imageUrl, imagesUrl }) {
    const params = {
    'data':{ 
      title,
      category,
      origin_price,
      price,
      unit,
      description,
      content,
      is_enabled,
      imageUrl,
      imagesUrl,
      }
    };
    const res = await this.callAxios('POST', `${apiPrefix}api/${apiPath}/admin/product/`, params, undefined, undefined, true);
    return res;
  }

  // 刪除
    static async deleteAdminProduct(id) {
    const res = await this.callAxios('DELETE', `${apiPrefix}api/${apiPath}/admin/product/${id}`, null, undefined, undefined, true);
    return res;
  }



  // 取得單一景點
  // static async getAttraction(id) {
  //   const res = await this.callAxios('GET', `${apiPrefix}attractions/${id}`, null, undefined, false);
  //   return res;
  // }

  // // 編輯單一景點
  // static async editAttraction(id, {
  //   name, description, image, address, GoogleRate,
  // }) {
  //   const params = {
  //     id, name, description, image, address, GoogleRate,
  //   };
  //   const res = await this.callAxios('PATCH', `${apiPrefix}attractions/${id}`, params, undefined, true);
  //   return res;
  // }

  // // 刪除單一景點
  // static async deleteAttraction(id) {
  //   const res = await this.callAxios('DELETE', `${apiPrefix}attractions/${id}`, null, undefined, true);
  //   return res;
  // }

  // // 新增單一景點
  // static async addAttraction({
  //   name, description, image, address, GoogleRate,
  // }) {
  //   const params = {
  //     name, description, image, address, GoogleRate,
  //   };
  //   const res = await this.callAxios('POST', `${apiPrefix}attractions`, params, undefined, true);
  //   return res;
  // }

  // //  取得蒐藏 Id
  // static async getCollectionId(id) {
  //   const res = await this.callAxios('GET', `${apiPrefix}users/${id}/collections`, null, undefined, false);
  //   return res;
  // }

  // // 取得蒐藏
  // static async getCollections(id) {
  //   const res = await this.callAxios('GET', `${apiPrefix}collections/${id}`, null, undefined, false);
  //   return res;
  // }

  // //  新增蒐藏
  // static async editCollections(id, { attractionId }) {
  //   const params = {
  //     attractionId,
  //   };
  //   const res = await this.callAxios('PATCH', `${apiPrefix}collections/${id}`, params, undefined, true);

  //   return res;
  // }
}

export default atrApi;
