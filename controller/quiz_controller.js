//get /author
exports.author = function(req, res) {
 res.render('/author');
};
// GET /quizes/question
exports.question = function(req, res) {
	res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

//GET /quizes/answer
exports.answer = function(req, res) {
	if (req.query.respuesta === 'Roma') {
		res.render('quizes/answer', {respuesta: 'correcto'});
	} else {
		res.render('quizes/answer', {respuesta: 'incorrecto'});
	}
};
