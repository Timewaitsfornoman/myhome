import {
  Meteor
} from 'meteor/meteor';
import {
  UsersCollection
} from '/imports/api/userAccount';
import {
  TasksCollection
} from '/imports/api/TasksCollection';

const insertTask = taskText => TasksCollection.insertAsync({
  title: taskText,
  date: new Date(),
  point: 0,
});

Meteor.startup(async () => {

  // If the Links collection is empty, add some data.
  if (await UsersCollection.find().countAsync() === 0) {
    const user = {
      username: 'test@163.com',
      password: '123456'
    };
    Meteor.call('userAccount.create', user, (error, result) => {});
  }

  if (await TasksCollection.find().countAsync() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(insertTask)
  }

  // We publish the entire Links collection to all clients.
  // In order to be fetched in real-time to the clients
  Meteor.publish("userAccount", function() {
    return UsersCollection.find();
  });
});