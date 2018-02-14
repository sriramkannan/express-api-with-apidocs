var JsonDB = require('node-json-db');

var db = new JsonDB('autobotz', true, true);

exports.lockCaption = function(processName, caption) {
    

    var activeCaptions = [];

    var locked = true;

    try {
        activeCaptions = db.getData('/active_captions/' + processName);

        console.log("Existing captions: " + activeCaptions);

    } catch (error) {
        console.error('no active captions at the moment ' + activeCaptions);
    }

    if (activeCaptions != null) {
        if (activeCaptions.indexOf(caption) != -1) {
            locked = false;
        }
    }

    if (locked) {
        activeCaptions.push(caption);
        db.push('/active_captions/' + processName, activeCaptions);
    }
    console.log("activeCaptions: " + activeCaptions);

    return locked;
}

exports.unlockCaption = function(processName, caption) {
    
    var activeCaptions = [];
    try {
        activeCaptions = db.getData('/active_captions/' + processName);
    } catch (error) {
        console.error('no active captions at the moment ' + activeCaptions);
    }
    var index = activeCaptions.indexOf(caption);
    if (index != -1) activeCaptions.splice(index, 1);
    console.log(activeCaptions);
    db.push('/active_captions/' + processName, activeCaptions);
    return true;
}

exports.clearCaptions = function(processName) {
	if(processName != null) {
		db.push('/active_captions/'+processName, {});
	} else {
		db.push('/active_captions', {});
	}
	
	return true;
}

exports.getActiveCaptions = function(processName) {
	if(processName != null) {
		try {
			return db.getData('/active_captions/'+processName);
		} catch(error) {
			return null;
		}
	} else {
		try {
			return db.getData('/active_captions');
		} catch(error) {
			return null;
		}
	}
}