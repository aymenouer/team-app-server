const resolvers = {
    Query: {
      // returns an array of Users that will be displayed in client
      usersForHome: (_, __, { dataSources }) => {
        return dataSources.UserAPI.getUsersForHome();
      },
  
     
    },
    

  };
  
  module.exports = resolvers;
  