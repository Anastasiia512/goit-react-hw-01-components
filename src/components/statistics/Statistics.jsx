import React from 'react';
import propTypes from 'prop-types';
import StatsItem from './Statistics-item';

const Statistics = ({ title = 'Upload stats', stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
    <StatsItem items = {stats}/>
    </ul>
  </section>
);

Statistics.propTypes = {
  title: propTypes.string,
};

export default Statistics;
