import React from "react";

const UpdatedComponent = Counter => {
  class NewCompo extends React.Component {
    state = {
      counter: 0
    };

    onincrement = () => {
      this.setState(prevState => {
        return { counter: prevState.counter + 1 };
      });
    };

    render() {
      return (
        <Counter
          counter={this.state.counter}
          increment={this.onincrement} 
        />
      );
    }
  }

  return NewCompo;
};

export default UpdatedComponent;