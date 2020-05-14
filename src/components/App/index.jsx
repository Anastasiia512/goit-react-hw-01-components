import React from 'react';
import Profile from '../profile/Profile';
import user from '../../db/user.json';
import statisticalData from '../../db/statistical-data.json';
import Statistics from '../statistics/Statistics';
import friends from '../../db/friends-list.json';
import FriendList from '../friends-list/index';
import transactions from '../../db/transactions.json';
import TransactionHistory from '../transactions/index';


const App = props => (
  <>
    <Profile
      name={user.name}
      tag = {user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title = "Upload stats" stats = {statisticalData}/>
    <FriendList friends={friends} />
    <TransactionHistory items={transactions}/>
  </>
);

export default App;
