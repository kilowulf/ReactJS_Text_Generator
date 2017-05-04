import React, { Component } from 'react';

class Output extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    onChange(e){
      this.setState({value: e.target.value}, function(){
        this.props.onChange(this.state.value);
      });
    }

    render() {
        return (
          <div className="well output">
          {this.props.value}
          </div>
        )
    }
}

export default Output;
