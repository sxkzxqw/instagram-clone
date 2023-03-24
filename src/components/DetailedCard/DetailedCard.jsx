import React, { useState } from 'react';
import Comment from '../Comment/Comment';
import UserBadge from '../UserBadge/UserBadge';
import styles from './DetailedCard.module.css';
import cn from 'classnames';
import { nanoid } from 'nanoid';

const DetailedCard = ({
    userName,
    avatarUrl,
    id,
    imgUrl,
    likes,
    isLikedByUser,
    comments,
    className
}) => {
    const [isCommentsShown, setIsCommentsShown] = useState(false);

    const renderComments = () => {
        if (comments.length > 2 && !isCommentsShown) {
            const commentsCopy = [...comments];
            const commentForRender = commentsCopy.splice(comments.length - 2, 2);

            return (
                <>
                    <span className={styles.title} onClick={() => setIsCommentsShown(true)}>{`Показать еще ${comments.length - commentForRender.length} комментариев`}</span>
                    {commentForRender.map((comment) => <Comment {...comment} key={nanoid()} />)}
                </>
            )
        }

        return comments.map((comment) => <Comment {...comment} key={nanoid()} />)
    };

    return (
        <div className={cn(`${styles.CardRoot}`, className)}>
            <div className={styles.header}>
                <UserBadge nickName={userName} avatarUrl={avatarUrl} id={id} />
            </div>
            <div>
                <img src={imgUrl} alt='image' className={styles.image} />
            </div>
            <div className={styles.buttons}>
                <i className={`${isLikedByUser ? 'fas' : 'far'} fa-heart ${styles.like}`} />
                <i className={`fas fa-comment ${styles.comment}`} />
            </div>
            <div className={styles.likes}>
                {`Оценили ${likes} человек`}
            </div>
            <div className={styles.comments}>
                {renderComments()}
            </div>
            <textarea className={styles.input} />
        </div>
    );
};

export default DetailedCard;