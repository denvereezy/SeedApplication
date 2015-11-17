
exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT name, color, breed, area, description, DATE_FORMAT(date_found,"%d %b %y") as date_found from animal where animal_type_id = 1',[], function(err, results) {
			 connection.query('SELECT name, color, breed, area, description, DATE_FORMAT(date_found,"%d %b %y") as date_found from animal where animal_type_id = 2', [], function(err, cats) {
				 connection.query('select * from cat_comments', [], function(err, kitten) {
					 connection.query('select * from dog_comments', [], function(err, dogs) {
        if (err) return next(err);
    		res.render( 'dog', {
					animals : results,
					 cats : cats,
					 cat_comment : kitten,
					 dogs : dogs
    		});
			});
			});
       });
		 });
	});
};

exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		var input = JSON.parse(JSON.stringify(req.body));
		var data = {
					ownerName : input.ownerName,
					phoneNumber : input.phoneNumber,
					email : input.email,
					lastSeen : input.lastSeen,
					animal_type_id : 1,
      		description : input.description,
  	};
		connection.query('insert into dog_comments set ?', data, function(err, results) {
			console.log(err);
  		if (err) return next(err);
			res.redirect('/');
		});
	});
};

exports.update = function(req, res, next){

	var data = JSON.parse(JSON.stringify(req.body));
  var id = req.params.id;
  req.getConnection(function(err, connection){
			connection.query('UPDATE dog_comments SET ? WHERE id = ?', [data, id], function(err, rows){
    			if (err) next(err);
          res.redirect('/');
    		});

    });
};
