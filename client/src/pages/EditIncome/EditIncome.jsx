import './editIncome.scss'

import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { updateIncome,failureUpdate} from '../../redux/cart/IncomeReducer';
import { useParams,useNavigate } from 'react-router-dom';

export default function EditIncome() {
  const navigate=useNavigate();
  const [editIncome,setEditIncome]=useState({});
  const {currentIncome}=useSelector((state)=>state.income)
  const dispatch=useDispatch();
  const { id } = useParams(); // Obține id-ul unic din URL
  console.log("id specific user",id);

  const handleChange=(e)=>{
    setEditIncome({...editIncome,[e.target.id]:e.target.value})
    console.log("edit",editIncome);
  }


  const handleSubmit=(e)=>{
    e.preventDefault();
    
    try{
      dispatch(updateIncome({id:id,editIncome}))
      navigate("/income")
    }catch{
      dispatch(failureUpdate());
    }
  }
  

  
  return (
    
    <div className="grid">

    <div className="box inputContainer">
              <span className='titleInput'>Update your income</span>
            <form onSubmit={handleSubmit} className='formIncome'>
              <input onChange={handleChange} className='input1'  type='text' id='category' alt='category' placeholder='Salary title' />
              <input onChange ={handleChange} className='input1'type='text' id='amount' alt='amount'  placeholder='Salary Amount' />
              <input onChange={handleChange} className='input1' type='date' alt='date'  id='date'  placeholder='zz.mm.aaaa' />
              
              <select  onChange={handleChange} className='input1' id="option">
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
              <input onChange={handleChange} className='input1' id='goals'  type='text' alt='goals'  placeholder='Add budget goals' />
              <input onChange={handleChange} className='input1' type='text' alt='reference' id='reference'  placeholder='Add a reference' />
              
                <div className="buttonCheck">
                        <button>Update Income</button> 
                </div>
                </form>
                </div>

              </div>
  )
}
