var mongoose = require('mongoose');

var UserSchema = mongoose.Schema ({
	name: String,
	productOne: {type: Number, default: 0},
	productTwo: {type: Number, default: 0},
	productThree: {type: Number, default: 0},
	createdAt: {type: Date, default: Date.now}
})

var User = mongoose.model('User', UserSchema);

User.schema.path('name').validate(function(value){
		if(!value.trim()){
			return false;
		}
		else {
			return true;
		}
	},
	"blank."
);
