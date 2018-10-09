import React from 'worker-react';

class Todo extends React.Component {
  render() {
    const { onClick, completed, text } = this.props;
    return (<li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {text}
    </li>);
  }
}

export default Todo;
