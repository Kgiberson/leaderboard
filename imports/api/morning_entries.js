import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const MorningEntries = new Mongo.Collection('morning_entries');

Meteor.methods({
	insertMorningEntries(firstVar) {
	// 	check(text, String);

		if (! this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		MorningEntries.insert({
			// is .userId right or _id
			author: this.userId,
			createdAt: new Date(),
			first: firstVar,
			// second: firstVar[1]
			// gratefulFor: {
			// 	first: firstVar,
			// 	second: secondVar,
			// 	third: thirdVar
			// }
		});
	}
})


