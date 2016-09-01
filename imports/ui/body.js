import { Template } from 'meteor/templating';

import { MorningEntries } from '../api/morning_entries.js';
import { EveningEntries } from '../api/evening_entries.js';

import './entry.js';
import './body.html';

Template.body.events({
	'submit .new-morning-entry'(event) {
		event.preventDefault();

		const target = event.target;
		const firstVar = target.first.value;
		const secondVar = target.second.value;
		const thirdVar = target.third.value;

		Meteor.call('morningEntries.insert', firstVar, secondVar, thirdVar );

		target.first.value = '';
		target.second.value = '';
		target.third.value = '';
	}
});

Template.body.helpers({
	morningEntries() {
		return MorningEntries.find({}, { sort: { createdAt: -1 } });
	}
});

if(Meteor.isClient){
	Template.body.events({
		'mouseover .done': function(){
			console.log("mousing over");
		}
	})
}