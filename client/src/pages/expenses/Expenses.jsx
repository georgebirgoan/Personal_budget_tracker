import './expenses.scss';
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';
import Categories from '../../components/categories/Categories';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {startExpense,failureExpense,finalExpense,deleteExpense} from '../../redux/cart/ExpenseReducer.js'
import { toast } from 'react-toastify';

export default function Expenses() {
  const [expenseData,setExpense]=useState({});
  const {currentExpense}=useSelector((state)=>state.expense)
  //console.log(currentExpense);
  console.log("expense current",currentExpense);

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
                <span className="price2"> $1223</span>
            </div>
        </div>


        
        <div className="inputCategories2">
            <div className="inputContainer2">
              <span className='titleInput'>Add your expenses</span>
          <form onSubmit={handleSubmit} className='formExpenses'>
              <input onChange={handleChange} className='input2' id='category'  type='text' alt='title' placeholder='Salary title' />
              <input onChange={handleChange} className='input2' id='amount'  type='text' alt='amount'  placeholder='Salary Amount' />
              <input onChange={handleChange} className='input2' id='date'  type='text' alt='date'  placeholder='Enter a date' />
              <input onChange={handleChange} className='input2' id='option' type='text' alt='option'  placeholder='Select Option' />
              <input onChange={handleChange} className='input2' id='reference'  type='text' alt='reference'  placeholder='Add a reference' />
            
              <div className="buttonCheck2">
                  <div className="submit2">
                      <button>+ Add Expense</button>
                  </div>   
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
