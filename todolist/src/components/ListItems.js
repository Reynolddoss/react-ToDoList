import React from 'react';
import '../App.css';
import Flipmove from 'react-flip-move';
function ListItems(props) {
    const listElements = props.item_list.map((item)=>{
        return (<div className="eachItem" key={item.datetime} >
            <p>
            <input onChange={
                                e=>{
                                    props.modifyText(e.target.value,item.datetime)
                                }
                            } 
                    key={item.datetime} 
                    value={item.text} 

            />
            <span className="removeItem" onClick={()=>props.deleteItem(item.datetime)}  >&times;</span>
            </p>
           
        </div>)
    })
    return (
        <div>
        <Flipmove duration={500} easing= "ease-in-out">
            {listElements}
        </Flipmove>
        </div>
    );
}

export default ListItems;