import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Layout from './layout/layout'
import Router from './router'
import './style/app.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter basename={'/interview-test'}>
        <Layout>
          <Router/>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
