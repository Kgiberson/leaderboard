import { Template } from 'meteor/templating';

import { MorningEntries } from '../api/morning_entries.js';
import { EveningEntries } from '../api/evening_entries.js';

import './body.html';

Template.body.events({
	'submit .new-morning-entry'(event) {
		event.preventDefault();

		const target = event.target;


		MorningEntries.insert({
			createdAt: new Date(),
			gratefulFor: {
				first: target.first.value,
				second: target.second.value,
				third: target.third.value
			}
		});

		target.text.value = '';
	}
})

// Template.body.helpers({
// 	entries() {
// 		return Entries.find({});
// 	}
// })