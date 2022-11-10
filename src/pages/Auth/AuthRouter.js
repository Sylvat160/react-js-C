import React from 'react';
import { Routes , Route} from 'react-router-dom';

import Login from '@pages/Auth/Login';
import Error from '@pages/_utils/Error';

const AuthRouter = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default AuthRouter;