import { useCallback, useState } from 'react';
import Categories from '../../../components/categories/Categories.jsx';
import './income.scss';
import {startIncome,failureIncome,addEconomy,addIncome, stopIncome} from '../../../redux/cart/IncomeReducer.js'
import  {useDispatch,useSelector} from 'react-redux';

export default function Income() {
  const [incomeData,setIncome]=useState({});

  const {totalIncome}=useSelector((state)=>state.income);

  
  const dispatch=useDispatch();
  // dispatch(resetState());


  const handleChange = useCallback((e) => {
    setIncome((prevData) => ({
        ...prevData,
        [e.target.id]: e.target.value,
    }));
},[]);


    const handleSubmit=useCallback((e)=>{
      e.preventDefault();
      try{
        
        dispatch(startIncome());

        // Add income entry
        dispatch(addIncome(incomeData));
    
        // Optionally add economy data if it exists
        if (incomeData.goals) {
          dispatch(addEconomy(incomeData));
        }
    
        dispatch(stopIncome());
      } catch (error) {
        dispatch(failureIncome(error.message));
      }
      },[incomeData,dispatch])


  return (
    <>
    <div className='Container'>
      <div className='box top'>

          {/* <div className="box title">
            <span className='span-title'>Incomes</span>
          </div> */}

        
            <div className="box totalIncome">
                <span>Total income:</span>
                <span className="price">$ {totalIncome} </span>
            </div>
        </div> 

         <div className='box allInMiddle'>
          <div className="box inputContainer">
              <span className='titleInput'>Add your incomes</span>
            <form onSubmit={handleSubmit} className='formIncome'>
              <input onChange={handleChange} className='input1'  type='text' id='category' alt='category' placeholder='Salary title' />
              <input onChange ={handleChange} className='input1'type='number' id='amount' alt='amount'  placeholder='Salary Amount' />
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
              
              {/* add income */}
                <div className="buttonCheck">
                        <button>+ Add Income</button> 
                </div>
              </form>
            </div>
              <div className="box categories">
                  <Categories/>
                </div>
            </div>


        </div>
          



    </>
  )
}
