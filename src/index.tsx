import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css"
import '@/global.scss';
import '@/global';

window.React = React
import { Button, message, Modal } from 'antd';
import { Card } from './components/Card';
class App extends React.Component<any, { isModalOpen: boolean }> {
  constructor(props: any) {
    super(props)
    this.state = { isModalOpen: false }
  }


  render() {
    const { isModalOpen } = this.state || {};
    return <div>
     
    </div>;
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
