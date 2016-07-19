import React, { PropTypes, Component } from 'react';
import { DragSource } from 'react-dnd';

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props) {
    return {
      text: props.text
    };
  }
};

class EditorElement extends Component {
  static propTypes = {
    onDelete: React.PropTypes.func
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    // Injected by React DnD:
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    const { isDragging, connectDragSource, text, onDelete } = this.props;
    const { isEditing } = this.state;

    return connectDragSource(
      <div className="editor-line" style={{ opacity: isDragging ? 0.5 : 1 }}>
        {isEditing &&
          <span>
            <input type="text" defaultValue={text} />
          </span>
        }
        {!isEditing &&
          text
        }
        <span className="buttons">
          <i className="icon edit" onClick={this.toggleEdit.bind(this)} />
          <i className="icon trash outline" onClick={onDelete} />
        </span>
      </div>
    );
  }
}

export default DragSource('CARD', cardSource, collect)(EditorElement);
