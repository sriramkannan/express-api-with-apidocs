'use strict';
module.exports = function(app) {
  var users = require('../controllers/usersController');

	 /**
	 * @api {get} /freeUser Get a free user among available bot users
	 * @apiName GetFreeUser
	 * @apiGroup User
	 *
	 * @apiSuccess {String} User id for bot to use
	 */
	 app.route('/freeUser')
	    .get(users.get_free_user);

    /**
	 * @api {get} /lockUser/:user Lock a user
	 * @apiName LockUser
	 * @apiGroup User
	 *
	 * @apiParam {String} user User ID to lock
	 *
	 * @apiSuccess {boolean} locked user is locked
	 */
  	app.route('/lockUser/:user')
    	.put(users.lock_user);

    /**
	 * @api {get} /unlockUser/:user Unlock a user
	 * @apiName UnlockUser
	 * @apiGroup User
	 *
	 * @apiParam {String} user User ID to unlock
	 *
	 * @apiSuccess {boolean} unlocked User is unlocked
	 */
  app.route('/unlockUser/:user')
  	.get(users.unlock_user);

  	/**
	 * @api {get} /clearUsers Clear all locked users (unlock all)
	 * @apiName ClearUsers
	 * @apiGroup User
	 *
	 * @apiSuccess {boolean} cleared All users unlocked
	 */
  app.route('/clearUsers')
  	.get(users.clear_users);

  	/**
	 * @api {get} /getActiveUsers Get a snapshot of all active users
	 * @apiName GetActiveUsers
	 * @apiGroup User
	 *
	 * @apiSuccess {JSON} users JSON Array of all active users (locked users)
	 */
  app.route('/getActiveUsers')
  	.get(users.get_active_users);

};
