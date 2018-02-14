'use strict';

var rowsModel = require('../models/rowsModel')

exports.lock_caption = function(req, res) {
	res.send(rowsModel.lockCaption(req.params.processName, req.params.caption));
};

exports.unlock_caption = function(req, res) {
	res.send(rowsModel.unlockCaption(req.params.processName, req.params.caption));
};

exports.clear_captions = function(req, res) {
	res.send(rowsModel.clearCaptions(req.params.processName));
};

exports.get_active_captions = function(req, res) {
	res.send(rowsModel.getActiveCaptions(req.params.processName));
};