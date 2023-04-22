import React from "react";

export default class App extends React.Component<any, { isModalOpen: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { isModalOpen: false };
  }

  render() {
    return <div>33</div>
  }
}
