import React from 'react';

let mainStyle = {
  margin: '0 auto',
  width: '80%'
}

const Layout = ({children}) => {
  return (
    <div className="main" style={ mainStyle }>
        <div className="content">
          {children}
        </div>
    </div>
  );
}


export default Layout;