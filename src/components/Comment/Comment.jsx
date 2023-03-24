import React from 'react';
import styles from './Comment.module.css';

const Comment = ({text, nickname}) => {
    return (
        <div className={styles.comments}>
            <span className={styles.name}>{nickname}:</span>
            <span>{text}</span>
        </div>
    );
};

export default Comment;