import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }

  render() {
    return (
      <header>
        <div>Header {this.state.user}</div>
      </header>
    );
  }
}

export default Header;
