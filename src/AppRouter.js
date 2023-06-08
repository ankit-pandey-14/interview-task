import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LayoutHeader from './components/layout/layoutHeader';
import LayoutFooter from './components/layout/layoutFooter';
import AuthRoutes from './routes/AuthRoutes';

const AppRouter = () => {
    return(
        <BrowserRouter>
            <LayoutHeader />
            <div className='d-flex content'>
                <AuthRoutes />
            </div>
            <LayoutFooter />
        </BrowserRouter>
    );
};

export default AppRouter;