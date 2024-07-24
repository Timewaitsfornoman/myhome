import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { UsersCollection } from './collection';

export async function create(data) {
  return UsersCollection.insertAsync({ ...data });
}

export async function update(_id, data) {
  check(_id, String);
  return UsersCollection.updateAsync(_id, { ...data });
}

export async function remove(_id) {
  check(_id, String);
  return UsersCollection.removeAsync(_id);
}

export async function findById(_id) {
  check(_id, String);
  return UsersCollection.findOneAsync(_id);
}

export async function findUser(user = {}) {
  check(user, Object);
  return UsersCollection.find(user).fetch();
}

Meteor.methods({
  'userAccount.create': create,
  'userAccount.update': update,
  'userAccount.remove': remove,
  'userAccount.find': findById,
  'userAccount.findUser': findUser,
});