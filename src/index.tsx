import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css"
import '@/global.scss';
import '@/global';

window.React = React
import { Button, message, Modal } from 'antd';
class App extends React.Component<any, { isModalOpen: boolean }> {
  constructor(props) {
    super(props)
    this.state = { isModalOpen : false }
  }
  componentDidCatch(error, info) {
    console.error(Date.now(), error, info)
  }

  changeModal = (isModalOpen) => {
    this.setState({ isModalOpen });
  };


  render() {
    const { isModalOpen  } = this.state || {};
    return <div onClick={() => {

    }}>
      <Button type="primary" onClick={() => this.changeModal(true)}>
        Open Modal
      </Button>
     <Modal title="Basic Modal" visible={isModalOpen} onOk={() => this.changeModal(false)} onCancel={() => this.changeModal(false)}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>2222
    </div>;
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
