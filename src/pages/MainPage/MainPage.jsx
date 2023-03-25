import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DetailedCard from '../../components/DetailedCard/DetailedCard';
import Layout from '../../components/Layout/Layout';
import { getPhotos } from '../../redux/actions/photos';
import styles from './MainPage.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Bars } from 'react-loader-spinner';

const MainPage = () => {
    const photos = useSelector(state => state.photos.photos);
    const loading = useSelector(state => state.photos.isPhotosLoading);
    const total = useSelector(state => state.photos.totalPhotos);
    const authorizedUser = useSelector(state => state.users.authorizedUser)
    const dispatch = useDispatch();

    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(getPhotos(page))
    }, [page])

    const nextHandler = () => {
        setPage(page + 1);
    }

    return (
        <Layout nickName={authorizedUser.nickname} id={authorizedUser.id} avatarUrl={authorizedUser.avatarUrl}>
            <div className={styles.mainpage}>
                {loading ? (<div className={styles.loader}>
                    <Bars color='black' height={100} width={100} />
                </div>) :
                    <InfiniteScroll
                        dataLength={photos.length}
                        next={nextHandler}
                        hasMore={photos.length < total}
                        loader={<div className={styles.loader}>
                            <Bars color='black' height={50} width={50} />
                        </div>}
                        endMessage={
                            <p className={styles.loader}>Все фото прогружены.</p>
                        }
                    >
                        {photos.map(({ author, imgUrl, id, likes, comments }) => {
                            return <DetailedCard
                                key={id}
                                userName={author.nickname}
                                id={author.id}
                                imgUrl={imgUrl}
                                avatarUrl={author.avatarUrl}
                                likes={likes.length}
                                isLikedByUser={true}
                                comments={comments}
                                className={styles.card}
                            />
                        })}
                    </InfiniteScroll>}
            </div>
        </Layout>
    );
};

export default MainPage;