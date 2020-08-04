import React from 'react';



function TodoList(props) {
    return (
        <div >

To do List
            {props.list.map(el =>
                <li key={el.id}>{el.title}</li>)}


        </div>
    );
}

export default TodoList;
