import { Template } from 'meteor/templating';

import { MorningEntries } from '../api/morning_entries.js';
import { EveningEntries } from '../api/evening_entries.js';

import './entry.js';
import './body.html';

if(Meteor.isClient){
	Template.body.events({
		'submit .new-morning-entry'(event) {
			event.preventDefault();

			const target = event.target;
			const firstVar = target.first.value;
			const secondVar = target.second.value;
			const thirdVar = target.third.value;
			console.log(firstVar);

			Meteor.call('insertMorningEntries', firstVar, secondVar, thirdVar );

			target.first.value = '';
			target.second.value = '';
			target.third.value = '';
		},
		'mouseover .done': function(){
			console.log("mousing over");
		}
	});
}

Template.body.helpers({
	morningEntries() {
		return MorningEntries.find({}, { sort: { createdAt: -1 } });
	}
});