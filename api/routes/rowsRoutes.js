'use strict';
module.exports = function(app) {
    var rowController = require('../controllers/rowsController');

    /**
	 * @api {get} /lockCaption/:processName/:caption Lock a caption within a process
	 * @apiName LockCaption
	 * @apiGroup Row
	 *
	 * @apiParam {String} processName Process Name the bot is working on
	 * @apiParam {String} caption Caption to lock for testing by bot
	 *
	 * @apiSuccess {boolean} locked caption is locked
	 */
    app.route('/lockCaption/:processName/:caption')
        .get(rowController.lock_caption);

    /**
	 * @api {get} /unlockCaption/:processName/:caption Unlock a caption within a process
	 * @apiName UnlockCaption
	 * @apiGroup Row
	 *
	 * @apiParam {String} processName Process Name the bot is working on
	 * @apiParam {String} caption Caption to unlock after testing by bot
	 *
	 * @apiSuccess {boolean} unlocked caption is unlocked
	 */
    app.route('/unlockCaption/:processName/:caption')
        .get(rowController.unlock_caption);

    /**
	 * @api {get} /clearCaptions Clears all locked captions all processes
	 * @apiName ClearCaptions
	 * @apiGroup Row
	 *
	 * @apiSuccess {boolean} cleared All captions cleared
	 */
    app.route('/clearCaptions')
        .get(rowController.clear_captions);

    /**
	 * @api {get} /clearCaptions/:processName Clears all locked captions all processes
	 * @apiName ClearCaptions
	 * @apiGroup Row
	 *
	 * @apiParam {String} processName Process Name to clear all locked cations within
	 *
	 * @apiSuccess {boolean} cleared All captions cleared for process
	 */
    app.route('/clearCaptions/:processName')
        .get(rowController.clear_captions);

    /**
	 * @api {get} /getActiveCaptions Get all active captions across all processes
	 * @apiName GetActiveCaptions
	 * @apiGroup Row
	 *
	 * @apiSuccess {JSON} Get a snapshot all processes and their locked captions
	 */
    app.route('/getActiveCaptions')
        .get(rowController.get_active_captions);

    /**
	 * @api {get} /getActiveCaptions/:processName Get all active captions for a given process name
	 * @apiName GetActiveCaptions
	 * @apiGroup Row
	 *
	 * @apiParam {String} processName Process Name
	 *
	 * @apiSuccess {JSON} captions Get a snapshot of locked captions within a process
	 */
    app.route('/getActiveCaptions/:processName')
        .get(rowController.get_active_captions);

};