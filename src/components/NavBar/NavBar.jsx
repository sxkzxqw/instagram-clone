import React from 'react';
import UserBadge from '../UserBadge/UserBadge';
import styles from './NavBar.module.css';

const NavBar = ({nickName, avatarUrl, id}) => {
    return (
        <div className={styles.Navbar}>
            <div className={styles.NavbarWrapper}>
                <span>Instagram</span>
                <UserBadge id={id} nickName={nickName} avatarUrl={avatarUrl} />
            </div>
        </div>
    );
};

export default NavBar;