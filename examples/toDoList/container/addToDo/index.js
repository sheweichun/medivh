

import React from 'worker-react';
import { connect } from 'worker-react-redux';
import { addTodo } from '../../actions';
import './index.less';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    const { value } = this.state;
    const { dispatch } = this.props;
        // console.log('props :',this.props);
    return (
      <div styleName="container">
        <div style={{ width: '100%' }}>
          <input
            style={{ width: '100%', marginRight: '24px' }}
            value={value}
            onChange={(val) => {
              this.setState({
                value: val,
              });
            }}
          />
        </div>
        <button
          style={{ width: '180px', marginTop: '24px', fontSize: '18px' }}
          type="primary"
          onClick={() => {
            if (!value.trim()) {
              return;
            }
            dispatch(addTodo(value));
            this.setState({
              value: '',
            });
          }}
        >
                Add Todo
        </button>
      </div>
    );
  }
}
export default connect()(AddTodo);
