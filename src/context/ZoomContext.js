import React, {createContext} from 'react';

const ZoomContext = createContext();

const apiKeys = {
  apiKey: process.env.REACT_APP_ZOOM_API_KEY,
  apiSecret: process.env.REACT_APP_ZOOM_API_SECRET_KEY,
};

export const ZoomProvider = ({children}) => {
  return (
    <ZoomContext.Provider value={{apiKeys}}>{children}</ZoomContext.Provider>
  );
};

export default ZoomContext;
