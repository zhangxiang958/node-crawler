import React    from 'react';
import Layout   from '../components/Layout/index.jsx';
import Header from '../components/Header/index.jsx';
import Nav from '../components/Nav/index.jsx';

import AppStyle from '../static/appStyle.scss';

class App extends React.Component {
  constructor(...props){
    super(...props);
  }

  render () {
    return (
      <div>
        <Header></Header>
        <Layout>
          <Nav>
            
          </Nav>
        </Layout>
      </div>
    );
  }
}

export default App;
