import thunk from 'redux-thunk';
import axiosInstance from '../../utilities/configureAxios';

const configureMiddlewares = () => {
    const middlewares = [
        thunk.withExtraArgument({
            api: axiosInstance,
        })
    ];
    // we can even add redux-logger to log redux actions in development mode

    return middlewares;
};

export default configureMiddlewares();