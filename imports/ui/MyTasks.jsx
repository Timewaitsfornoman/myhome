import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '/imports/api/TasksCollection';

export const MyTasks = () => {

  const tasks = useTracker(() => TasksCollection.find({}).fetch());

  return (
    <div>
      <h1>you Tasks</h1>
      <ul>
        { tasks.map(task => (<li key={ task._id }>{task.title}</li>)) }
      </ul>
    </div>
  );
};