import './expenses.scss';
import Navbar from '../../components/navbar/Navbar.jsx';
import SideBar from '../../components/sidebar/SideBar.jsx';
import Categories from '../../components/categories/Categories.jsx';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {startExpense,failureExpense,finalExpense,deleteExpense, totExpense, updateExpense} from '../../redux/cart/ExpenseReducer.js'
import { toast } from 'react-toastify';
import { Istoric, failureUpdate } from '../../redux/cart/IncomeReducer.js';
import { resetState } from '../../redux/cart/IncomeReducer.js';

export default function Expenses() {
  const [expenseData,setExpense]=useState({});
  const {totalExpense}=useSelector((state)=>state.expense)

  const dispatch=useDispatch();
  //dispatch(resetState());

  const handleChange= ((e)=>{
    setExpense({...expenseData,[e.target.id]:e.target.value});
  })
  
  //console.log("expense",expenseData);
  
  const handleSubmit=((e)=>{
    e.preventDefault();
    
    try{
      dispatch(startExpense());
      const response=expenseData;

      if(response.success === false){
        console.log(response.message);
        dispatch(failureExpense(response.message));
        return;
      }

        dispatch(finalExpense(response));
        dispatch(totExpense());
       // dispatch(Istoric());
        toast.success("Iieii data succes")


    }catch(error){
      dispatch(failureExpense(error));
      toast.error("Eroare date!");
    }
  })
  return (
    <>
    <div className='Container2'>

      <div className="box2 title2">
        <span className='span-title2'>Expense</span>
      </div>


    <div className="box2 totalExpense2">
        <span>Total expense:</span>
        <span className="price2">$ {totalExpense} </span>
    </div>


        
      <div className="box2 inputContainer2">
              <span className='titleInput2'>Add your expenses</span>
          <form onSubmit={handleSubmit} className='formExpense2'>
              <input onChange={handleChange} className='input2' id='category'  type='text' alt='title' placeholder='Expense title' />
              <input onChange={handleChange} className='input2' id='amount'  type='text' alt='amount'  placeholder='Expense Amount' />  
              <input onChange={handleChange} className='input2' id='date'  type='date' alt='date' placeholder='zz.mm.aaaa' />
             
              <select onChange={handleChange} className='input2' id="option">
                <option value="">Select option</option>
                <option value="food">Food</option>
                <option value="housing">Housing</option>
                <option value="transportation">Transportation</option>
                <option value="utilities">Utilities</option>
                <option value="healthcare">Healthcare</option>
                <option value="insurance">Insurance</option>
                <option value="education">Education</option>
                <option value="entertainment">Entertainment</option>
                <option value="other">Other</option>
              </select>

              
              
              
              <input onChange={handleChange} className='input2' id='reference'  type='text' alt='reference'  placeholder='Add a reference' />            
            
             <div className="buttonCheck2">
                <button type="submit" className="submit2">
                 <span className='textBt'> + Add Expense</span>
                </button>
            </div>
          </form>
              
            </div>

            <div className="box2 categories2">
              <Categories/>
            </div>
        </div>



    </>




  )
}
