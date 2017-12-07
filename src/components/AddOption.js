import React from 'react';

export default class AddOption extends React.Component {
    state = {
      error: undefined
    };

    handleSubmit = (e) => {
      e.preventDefault();
      const option = e.target.elements.optionName.value.trim();
      const error = this.props.handleAddOption(option);
  
      this.setState(() => {
        return { error };
      });
      if (!error) {
        e.target.elements.optionName.value = '';
      }
    }
  
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="optionName" />
            <button className="button">Add Option</button>
          </form>
        </div>
      );
    }
}