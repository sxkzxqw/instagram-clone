import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UserBadge.module.css';

const UserBadge = ({
    id, nickName, avatarUrl
}) => {
    const navigate = useNavigate();
    const userBadgeHandler = () => {
        navigate(`/${id}`)
    }
    return (
        <div className={styles.BadgeRoot} onClick={userBadgeHandler}>
            {avatarUrl ? <img src={avatarUrl} alt='userPicture' className={styles.image} /> : <div className={styles.imagePlaceholder} />}
            <span className={styles.nickName}>{nickName}</span>
        </div>
    );
};

export default UserBadge;