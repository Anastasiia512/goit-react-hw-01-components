import React from 'react';
import propTypes from 'prop-types';
import './styles.scss';
import { colorPicker } from './color-picker';
import { colors } from './colors';
import styled from 'styled-components';

const StyledLi = styled.li`
  background-color: ${colorPicker(colors)};
`;
const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <StyledLi key={id} className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </StyledLi>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
