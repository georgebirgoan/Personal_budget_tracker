import { useState } from 'react';
import Categories from '../../components/categories/Categories';
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';
import './income.scss';
import {startIncome,failureIncome,finalIncome,resetState,totIncome, Istoric, totEconomy} from '../../redux/cart/IncomeReducer.js'
import {toast } from  'react-toastify';
import  {useDispatch,useSelector} from 'react-redux';


export default function Income() {
  const [incomeData,setIncome]=useState({});
  const {totalIncome}  = useSelector((state) => state.income);

  const dispatch=useDispatch();
  //dispatch(resetState());

  //for inputs
  const handleChange= ((e)=>{
    setIncome({...incomeData,[e.target.id]:e.target.value});
    console.log("chage",incomeData);
  })


  //for submit form
    const handleSubmit=((e)=>{
      e.preventDefault();
      dispatch(startIncome()); 
      
      try{
        console.log("raspuns from income/input",incomeData);

          dispatch(finalIncome(incomeData));
          dispatch(totIncome());
          dispatch(totEconomy());
          dispatch(Istoric());
          
        }catch(error){
          dispatch(failureIncome(error));
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
