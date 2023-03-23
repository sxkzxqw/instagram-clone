import React from 'react';
import UserBadge from '../UserBadge/UserBadge';
import styles from './DetailedCard.module.css';

const DetailedCard = ({
    nickName,
    avatarUrl,
    id,
    imgUrl,
    likes,
    isLikedByUser,
    comments
}) => {
    return (
        <div>
            <div>
                <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id} />
            </div>
            <div>
                <img src={imgUrl} alt='image' />
            </div>
            <div>
                like 
                comments
            </div>
            <div>
                {`Оценили ${likes} человек`}
            </div>
            <div>
                comment
                comment
                comment
            </div>
            <textarea />
        </div>
    );
};

export default DetailedCard;