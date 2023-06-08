import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import DetailsScreen from '../screens/DetailsScreen';

const HomeScreen = lazy(() => import('../screens/HomeScreen'));

const AuthRoutes = () => {
    return (
        <Suspense fallback={ <div>Loading.....</div> }>
            <Routes>
                <Route path={ROUTES.HOME} element={ <HomeScreen /> } />
                <Route path={ROUTES.HOTEL_DETAILS} element={ <DetailsScreen /> } />
                <Route path={ROUTES.PLACE_DETAILS} element={ <DetailsScreen /> } />
                <Route path='*' element={ <Navigate to={ROUTES.HOME} /> } />
            </Routes>
        </Suspense>
    );
};

export default AuthRoutes;