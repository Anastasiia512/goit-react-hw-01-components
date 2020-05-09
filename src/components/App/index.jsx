import React from 'react';
import Profile from '../profile/Profile';
import user from '../../db/user.json';
import statisticalData from '../../db/statistical-data.json';
import Statistics from '../statistics/Statistics';

const App = props => (
  <>
    <Profile
      name={user.name}
      tag = {user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics  stats = {statisticalData}/>
  </>
);

export default App;
