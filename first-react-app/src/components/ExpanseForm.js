import React,{useState} from 'react';
 const ExpanseForm=(props)=>{
const [Amount,setEnterAmount]=useState('');
const [Discription,setEnterDiscription]=useState('');
const [Option,setEnterOption]=useState('');
const addAmount=(event)=>{
    setEnterAmount(event.target.value);
}
const addDiscription=(event)=>{
    setEnterDiscription(event.target.value);
}
const addOption=(event)=>{
    setEnterOption(event.target.value)
}
    const SubmitHandler=(event)=>{
            event.preventDefault();
            props.onAddExpanse(Amount,Discription,Option)
            setEnterAmount('')
            setEnterDiscription('');
            setEnterOption('');
            
    }
    
    return(
        <div className='expanse-form'>
            <form onSubmit={SubmitHandler}>
                <div>
                <label htmlFor='A'>Exapnse Amount</label>
                <input type='number' id='A' value={Amount} onChange={addAmount}></input>
                </div>
                <div>
                <label htmlFor='D'>Exapnse Discription</label>
                <input type='text' id='D' value={Discription} onChange={addDiscription}></input>
                </div>
                <div>
                <label htmlFor='C'>Exapnse Category</label>
                <select id='C' value={Option} onChange={addOption}>
                    <option>choose Category </option>
                    <option>fuel</option>
                    <option>tea</option>
                    <option>shoping</option>
                </select>
                </div>
                <div>
                    <button type='submit'> Add New Item</button>
                </div>
            </form>
        </div>
    )
 }
export default ExpanseForm;