import React from 'react'

class Checkbox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isChecked: false,
      };
    }
    toggleChange = () => {
      this.setState({
        isChecked: !this.state.isChecked,
      });
    }
    render() {
      return (
        <label>
          <input type="checkbox"
            checked={this.state.isChecked}
            onChange={this.toggleChange}
          />
          {this.props.children}
         </label>
      );
    }
  }

export default Checkbox