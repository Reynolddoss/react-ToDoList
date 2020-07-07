import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './components/ListItems';
// import { library } from '@fontawesome-svg-core';
// import {faTrash} from '@fortawesome/free-solid-svg-icons';

// library.add(faTrash)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items : [],
      currentItem :{
        text : "",
        datetime : ""
      }

    }
  }
  inputChanged = (e)=>{
    this.setState({
      currentItem:{
        text : e.target.value,
        datetime : Date.now()
      }
    })
  }

  addClicked = (e)=>{
    e.preventDefault();
    const newItem = this.state.currentItem;
    this.setState({
      items: [...this.state.items,newItem],
      currentItem : {
        text : '',
        datetime:""
      }
    })
    console.log(this.state);
  }

  deleteHandler = (ref_id=>{
    const filteredItems = this.state.items.filter(item=>item.datetime!==ref_id);
    this.setState(
      {items:filteredItems}
    )
  })

  textChanged = (newText,ref_id)=>{
    const holdItems = this.state.items;
    holdItems.map(item=>{
      if(item.datetime===ref_id){
        item.text = newText;
      }
    })
    this.setState({
      items:holdItems
    })
  }

  render() {
    return (
      <div className="APP">
        <header>
            <form id="todo-form">
              <input type='text' placeholder="Enter Here" onChange={this.inputChanged}  value={this.state.currentItem.text} />
              <button type="submit" onClick={this.addClicked} > Add </button>
            </form>
        </header>
        <ListItems item_list = {this.state.items} 
                  deleteItem={this.deleteHandler}
                  modifyText = {this.textChanged}

        />
      </div>
    );
  }
}

export default App;