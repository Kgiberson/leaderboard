import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const MorningEntries = new Mongo.Collection('morning_entries');

Meteor.methods({
	'morningEntries.insert'(target) {
	// 	check(text, String);

		if (! this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		MorningEntries.insert({
			author: this.userId,
			createdAt: new Date(),
			gratefulFor: {
				first: target.first.value,
				second: target.second.value,
				third: target.third.value
			}
		});
	}
})

