'use strict';

var users = require('../models/usersModel')

exports.get_free_user = function(req, res) {
	res.send(users.getFreeUser());
};

exports.lock_user = function(req, res) {
	res.send(users.lockUser(req.params.user));
};

exports.unlock_user = function(req, res) {
	res.send(users.unlockUser(req.params.user));
};

exports.clear_users = function(req, res) {
	res.send(users.clearUsers());
};

exports.get_active_users = function(req, res) {
	res.send(users.getActiveUsers());
};
