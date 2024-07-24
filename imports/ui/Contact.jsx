import React from 'react';
import { useFind, useSubscribe } from 'meteor/react-meteor-data';
import { UsersCollection } from '../api/userAccount/';

export const Contact = () => {
  
  const isLoading = useSubscribe('userAccount');
  const userAccount = useFind(() => UsersCollection.find());

  if(isLoading()) {
    return <div>Loading...</div>;
  }

  return (
    <div className="userAccount">
      <ul>{userAccount.map(
        user => <li key={user._id}>
          {user.username}
        </li>
      )}</ul>
    </div>
  );
};