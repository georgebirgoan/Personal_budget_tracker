import './editExpense.scss'

import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { updateExpense,failureUpdateEx } from '../../redux/cart/ExpenseReducer';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function EditIncome() {
  const [editExpense,setEditExpense]=useState({});
  const {currentExpense}=useSelector((state)=>state.expense)
  const navigate=useNavigate();

  const dispatch=useDispatch();
  const { id } = useParams(); // Obține id-ul unic din URL


  const handleChange=(e)=>{
    setEditExpense({...editExpense,[e.target.id]:e.target.value})
    console.log("edit",editExpense);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();  
    try{
      dispatch(updateExpense({id:id,editExpense}));
      navigate("/expense");
    }catch{
      dispatch(failureUpdateEx());
    }   
  }
  

  
  return (
    
    <div className="grid2">

    <div className="box inputContainer2">
              <span className='titleInput2'>Update your expense</span>
            <form onSubmit={handleSubmit} className='formIncome2'>
              <input onChange={handleChange} className='input2'  type='text' id='category' alt='category' placeholder='Salary title' />
              <input onChange ={handleChange} className='input2'type='text' id='amount' alt='amount'  placeholder='Salary Amount' />
              <input onChange={handleChange} className='input2' type='date' alt='date'  id='date'  placeholder='zz.mm.aaaa' />
              
              <select  onChange={handleChange} className='input2' id="option">
                      <option value="">Select option</option>
                      <option value="job">Finding a new job</option>
                      <option value="freelancing">Freelancing</option>
                      <option value="investments">Investments</option>
                      <option value="business">Starting a business</option>
                      <option value="selling">Selling products or services</option>
                      <option value="rental">Renting out property</option>
                      <option value="online">Online earning</option>
                      <option value="other">Other</option>
              </select>
              <input onChange={handleChange} className='input2' type='text' alt='reference' id='reference'  placeholder='Add a reference' />
              
                <div className="buttonCheck2">
                        <button>Update Expense</button> 
                        
                </div>
                </form>
                </div>

                </div>
  )
}
