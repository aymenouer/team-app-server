const { RESTDataSource } = require('apollo-datasource-rest');

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://randomuser.me/';
  }

  getUsersForHome() {

   
    return this.get(`api?results=50`).then(data=>data.results);
  }

  
}

module.exports = UserAPI;
