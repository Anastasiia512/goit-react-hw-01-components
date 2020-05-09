import React from 'react';
import propTypes from 'prop-types';

const StatsItem = ({ items }) =>
  items.map(item => (
    <li key={item.id} className="item">
      <span className="label">{item.label}</span>
      <span className="percentage">{item.percentage}</span>
    </li>
  ));

StatsItem.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }),
  ).isRequired,
};

export default StatsItem;
