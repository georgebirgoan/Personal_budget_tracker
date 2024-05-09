import './expenses.scss';
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';
import Categories from '../../components/categories/Categories';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {startExpense,failureExpense,finalExpense,deleteExpense, totExpense} from '../../redux/cart/ExpenseReducer.js'
import { toast } from 'react-toastify';

export default function Expenses() {
  const [expenseData,setExpense]=useState({});
  const {totalExpense}=useSelector((state)=>state.expense)

  const dispatch=useDispatch();
  
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
        toast.success("Iieii data succes")


    }catch(error){
      dispatch(failureExpense(error));
      toast.error("eroare date");
    }
  })
  return (
    <>
    <div className='sideContainer2'>
    <SideBar/>
    <div className="navContainer2">
      <Navbar/>

    <div className="mainContainer2">
      <div className="secondContainer2">
        <span className='title2'>Expenses</span>
        
            <div className="totalIncome2">
                <span>Total expenses:</span>
                <span className="price2"> {totalExpense} $</span>
            </div>
        </div>


        
        <div className="inputCategories2">
            <div className="inputContainer2">
              <span className='titleInput'>Add your expenses</span>
          <form onSubmit={handleSubmit} className='formExpenses'>
              <input onChange={handleChange} className='input2' id='category'  type='text' alt='title' placeholder='Expense title' />
              <input onChange={handleChange} className='input2' id='amount'  type='text' alt='amount'  placeholder='Expense Amount' />  
              <input onChange={handleChange} className='input2' id='date'  type='text' alt='date'  placeholder='Enter a date' />
             
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
            <Categories/>
        </div>

        </div>
      </div>
    </div>

    </>




  )
}
