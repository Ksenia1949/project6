import React,{useState} from 'react';



function TodoCreateForm(props) {

    const [inputValue,setInputValue]=useState(222);

    const inputOnChange = e => {
        setInputValue(e.target.value)
    };

const onCreate = () =>{
    props.create (inputValue);
    setInputValue('')
}
    return (
        <div >

Todo Create Form
<input value={inputValue} onChange={inputOnChange}/>
<button onClick={onCreate}>create</button>



        </div>
    );
}

export default TodoCreateForm;
