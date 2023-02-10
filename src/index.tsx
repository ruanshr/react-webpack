import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import '@/global.scss';
import '@/global';
class App extends React.Component {

  componentDidCatch(error, info) {
    console.error(Date.now(), error, info)
  }


  render() {
    console.log(window.CORE?.CCheckbax, Date.now(), window.CORE)
    const { CRadio } = window.CORE;
    return <div onClick={() => {

    }}>
      1111
      <CRadio></CRadio>
    </div>;
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
