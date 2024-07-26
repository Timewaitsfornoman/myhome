import React from 'react';
import {
  useFind,
  useTracker,
  useSubscribe
} from 'meteor/react-meteor-data';
import {
  TasksCollection
} from '/imports/api/TasksCollection';

export const MyTasks = () => {

  const isLoading = useSubscribe('tasks');
  const tasks = useTracker(() => TasksCollection.find({}).fetch());

  return (
    <div>
      <p>you Tasks</p>
      <ul>
        { tasks.map(task => (<li key={ task._id }>{task.title}</li>)) }
      </ul>
    </div>
  );
};