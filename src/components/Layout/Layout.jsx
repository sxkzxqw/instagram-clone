import React from 'react';
import NavBar from '../NavBar/NavBar';
import styles from './Layout.module.css';

const Layout = ({
    nickName,
    avatarUrl,
    id,
    children
}) => {
    return (
        <div className={styles.LayoutRoot}>
            <NavBar nickName={nickName} avatarUrl={avatarUrl} id={id}></NavBar>
            <main className={styles.LayoutBody}>
                {children}
            </main>
        </div>
    );
};

export default Layout;