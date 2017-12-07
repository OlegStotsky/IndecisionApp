import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './AddOption.js';
import Header from './Header.js';
import Option from './Option.js';
import Options from './Options.js';
import Action from './Action.js';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
      options: [],
      selectedOption: undefined
    };
    
    componentDidMount() {
      try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if (!options) 
        return;
  
        this.setState(() => {
          return { options }
        });
      } catch (e) {
  
      }
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length != this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
    
    handleClearSelectedOption = () => {
      this.setState(() => ({ selectedOption: undefined }));
    }

    handleDeleteOptions = () => {
      this.setState(() => ({ options: [] }));
    }
  
    handlePick = () => {  
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      this.setState(() => ({ selectedOption: option }));
    }
  
    handleDeleteOption = (optionText) => {
      const newOptions = this.state.options.filter((option) => option !== optionText);
      this.setState(() => ({options: newOptions}));
    }
  
    handleAddOption = (option) => {
      if (!option) {
        return 'Option can\'t be empty';
      }
      if (this.state.options.indexOf(option) != -1) {
        return 'Option already exists';
      }
  
      this.setState((prevState) => {
        const newOptions = this.state.options.concat([option]);
        return {
          options: newOptions
        };
      });
    }
  
    render() {
      const title = "Indecision App";
      const subtitle = "Some subtitle";
      return (
        <div>
          <Header title={title} subtitle={subtitle} />
          <div className="container">
            <Action 
              handlePick={this.handlePick} 
              hasOptions={this.state.options.length > 0} 
            />
            <div className="widget">
              <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
              />
              <AddOption handleAddOption={this.handleAddOption} />
            </div>
            <OptionModal
              selectedOption={this.state.selectedOption}
              handleClearSelectedOption={this.handleClearSelectedOption}
            />
          </div>
        </div>
      );
    }
}