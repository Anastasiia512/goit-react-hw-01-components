import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.module.css';


const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({id, name, avatar, isOnline}) => (
      <li key={id} className={styles.item}>
        <span
          className={isOnline ? styles.status : styles.statusOff}
        ></span>
        <img className={styles.avatar} src={avatar} alt="" width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
      id: propTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
