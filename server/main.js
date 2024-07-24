import {
  Meteor
} from 'meteor/meteor';
import {
  UsersCollection
} from '/imports/api/userAccount';

Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  if (await UsersCollection.find().countAsync() === 0) {
    const user = {
      username: 'test@163.com',
      password: '123456'
    };
    Meteor.call('userAccount.create', user, (error, result) => {});
  }

  // We publish the entire Links collection to all clients.
  // In order to be fetched in real-time to the clients
  Meteor.publish("userAccount", function() {
    return UsersCollection.find();
  });
});