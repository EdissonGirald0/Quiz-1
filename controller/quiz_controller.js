var models = require('../models/models.js');

//get /author
exports.author = function(req, res) {
 res.render('/author');
};
// GET /quizes/question
exports.question = function(req, res) {
	models.Quiz.findAll().then(function(quiz) {
	res.render('quizes/question', {pregunta: quiz[0].pregunta})
	})
};

//GET /quizes/answer
exports.answer = function(req, res) {
	models.Quiz.findAll().then(function(quiz) {	
	if (req.query.respuesta === quiz[0].respuesta) {
		res.render('quizes/answer', {respuesta: 'correcto'});
	} else {
		res.render('quizes/answer', {respuesta: 'incorrecto'});
	}
})
};

