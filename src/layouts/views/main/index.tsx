import React, { FC } from 'react';

import { TReactChildren } from '../../../types/react';

const MainLayout: FC<TReactChildren> = ({children}) => {
    return (
      <>
        {children}
      </>
    );
};
  
export default MainLayout;
