var QueryService = require("../database/query-service");

module.exports = function(connection){
  var queryService = new QueryService(connection);

    this.dogList = function(){
        return queryService.executeQuery('select * from animals where animal_type_id = 1');
    };

};
