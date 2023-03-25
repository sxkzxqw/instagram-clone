import { useEffect } from "react";
import { Bars } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import NoAccessPage from "../../pages/NoAccessPage/NoAccessPage";
import UserPage from "../../pages/UserPage/UserPage";
import { getAuthorizedUser } from "../../redux/actions/users";
import styles from './Routes.module.css';


const authorizedRoutes = [
    { path: '/', element: <MainPage />, exact: true },
    { path: '/:id', element: <UserPage />, exact: false },
];

const nonAuthorizedRoutes = [
    <Route path='/' element={<NoAccessPage />} />
];

const RoutesAuth = () => {
    const authorizedUser = useSelector(state => state.users.authorizedUser)
    const isLoading = useSelector(state => state.users.isUserLoading)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAuthorizedUser())
    }, [dispatch])

    if(isLoading) {
        return (
            <div className={styles.bars}>
                <Bars width={100} height={100} color='black' />
            </div>
        )
    }

    return (
        <BrowserRouter>
        <Routes>
        {authorizedUser 
        ? authorizedRoutes.map((item) => <Route {...item} />) 
        : <Route path='/' element={<NoAccessPage />} exact />
        }
        </Routes>
        </BrowserRouter>
    );
};

export default RoutesAuth;