import React, { FC } from 'react';

import MainLayout from './main';

import { TReactChildren } from '../../types/react';

const ViewsLayout: FC<TReactChildren> = ({children}) => {
    return (
        <MainLayout>
            {children}
        </MainLayout>
    );
};


export default ViewsLayout;
