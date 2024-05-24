import { useEffect, useState } from 'react';
import Categories from '../../components/categories/Categories';
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';
import './income.scss';
import {startIncome,failureIncome,finalIncome,resetState,totIncome, totEconomy, histBalance} from '../../redux/cart/IncomeReducer.js'
import {toast } from  'react-toastify';
import  {useDispatch,useSelector} from 'react-redux';
import { useMemo } from 'react';

export default function Income() {
  const [incomeData,setIncome]=useState({});


  const { totalIncome, totalExpense, totalEconomy } = useSelector((state) => ({
    totalIncome: state.income.totalIncome,
    totalExpense: state.expense.totalExpense,
    totalEconomy: state.income.totalEconomy,
}));


  console.log(totalIncome);
  console.log(totalExpense);
  console.log(totalEconomy);

  
  const currentDate=new Date();
  const balance = useMemo(() => totalIncome - totalExpense - totalEconomy, [totalIncome, totalExpense, totalEconomy]);



  const dispatch=useDispatch();
  //dispatch(resetState());



  const handleChange = (e) => {
    setIncome((prevData) => ({
        ...prevData,
        [e.target.id]: e.target.value,
    }));
    console.log("change", incomeData);
};



  //for submit form
    const handleSubmit=((e)=>{
      e.preventDefault();
      dispatch(startIncome()); 
      
      try{
        console.log("raspuns from income/input",incomeData);

          dispatch(finalIncome(incomeData));
          dispatch(totIncome());
          console.log("dupa tot income");
          dispatch(totEconomy());
          console.log(balance);
          dispatch(histBalance({amount:balance,date:currentDate}));
          
        }catch(error){
          dispatch(failureIncome(error.message));
        }
      })


  return (
    <>
    <div className='Container'>

        <div className="box title">
          <span className='span-title'>Incomes</span>
        </div>

        
            <div className="box totalIncome">
                <span>Total income:</span>
                <span className="price">$ {totalIncome} </span>
            </div>


         
          <div className="box inputContainer">
              <span className='titleInput'>Add your incomes</span>
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
                        <button>+ Add Income</button> 
                </div>
            
              </form>
  
            </div>
            <div className="box categories">
              <Categories/>
            </div>
        </div>
          



    </>
  )
}
