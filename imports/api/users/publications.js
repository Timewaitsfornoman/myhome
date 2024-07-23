import { Meteor } from 'meteor/meteor';
import { UsersCollection } from './collection';

Meteor.publish('users', function publishUserss() {
  return UsersCollection.find({});
});
