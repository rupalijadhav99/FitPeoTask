import React from 'react';
import styles from '../../styles/Header.module.css';
import { FiSearch } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.searchContainer}>
        <FiSearch className={styles.searchIcon} />
        <input type="text" placeholder="Search" className={styles.searchInput} />
        <IoMdNotificationsOutline className={styles.bellIcon} />
      </div>
      <div className={styles.avatarButtons}>
        <div className={styles.emojiAvatar}>🧒🏻</div>
        <button className={styles.plus}>+</button>
      </div>

    </header>
  );
};

export default Header;
