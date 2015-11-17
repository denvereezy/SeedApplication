exports.showComment = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('select * from cat_comments', [], function(err, kitten) {
// console.log(results);
        if (err) return next(err);
    		res.render( 'index', {
					cat_comment : kitten
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
					animal_type_id : 2,
      		description : input.description,
  	};
		connection.query('insert into cat_comments set ?', data, function(err, results) {
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
			connection.query('UPDATE cat_comments SET ? WHERE id = ?', [data, id], function(err, rows){
    			if (err) next(err);
          res.redirect('/');
    		});

    });
};
