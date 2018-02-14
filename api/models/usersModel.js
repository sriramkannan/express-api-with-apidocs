var JsonDB = require('node-json-db');


var botUsers = require('../../data/botUsers.json');

var db = new JsonDB('autobotz', true, true);


exports.getFreeUser = function() {
	var freeUser;
	var activeUsers = [];

	try {
		activeUsers = db.getData('/active_users');
		
	} catch(error) {
		console.error('no active users at the moment ' + activeUsers);
	}
	
	if(activeUsers != null && activeUsers.length>0) {
		for(var i=0 ; i< botUsers.length ; i++) {
			if(activeUsers.indexOf(botUsers[i].user)==-1) {
				freeUser = botUsers[i].user;
				break;
			}
		}
		if(freeUser != null)
			activeUsers.push(freeUser);
	} else {
		activeUsers.push(botUsers[0].user);
		freeUser = botUsers[0].user;
	}
	
	db.push('/active_users', activeUsers);
	//db.save();
	console.log(activeUsers);
	return freeUser;
}

exports.lockUser = function(user) {
	var locked = false;
	var activeUsers = [];
	try {
		 activeUsers = db.getData('/active_users');
	}
	
	var index = activeUsers.indexOf(user);
	if(index != -1) {
		activeUsers.push(user);
		locked = true;
	} 
	console.log(activeUsers);
	db.push('/active_users', activeUsers);
	return locked;
}

exports.unlockUser = function(user) {
	var unlocked = false;
	
	var activeUsers = db.getData('/active_users');
	var index = activeUsers.indexOf(user);
	if(index != -1) {
		activeUsers.splice(index, 1);
		unlocked = true;
	}
	console.log(activeUsers);
	db.push('/active_users', activeUsers);
	return unlocked;
}

exports.clearUsers = function() {
	db.push('/active_users', []);
	return true;
}

exports.getActiveUsers = function() {
	var activeUsers;
	try {
		activeUsers =  db.getData('/active_users');
	} catch(error) {
		return false;
	}
	return activeUsers;
}