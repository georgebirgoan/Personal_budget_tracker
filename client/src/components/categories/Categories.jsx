import React from 'react';
import './categories.scss';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteIncome,deleteEconomy, updateEconomy } from '../../redux/cart/IncomeReducer'; // Asigură-te că această acțiune este importată corect
import { deleteExpense } from '../../redux/cart/ExpenseReducer';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DateRangeIcon from '@mui/icons-material/DateRange';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import CategoryIcon from '../categoryIcon/CategoryIcon';
import EditIcon from '@mui/icons-material/Edit';

export default function Categories() {
    const location = useLocation();
    const dispatch = useDispatch();
    const isIncome = location.pathname === '/income';
  
    const {currentIncome} =useSelector((state)=>state.income);
    const {currentExpense} =useSelector((state)=>state.expense);

    const handleDeleteIncome = (id) => {
        dispatch(deleteIncome({ id: id }));
    }


    const handleDeleteExpense= (id) => {
        dispatch(deleteExpense({ id: id }));   
    }

    return (
        <div className="allCategories">
            {isIncome ? 
                currentIncome.map((income) => (
                    <div className="container" key={income.id}>
                        <div className="logo">

                            <CategoryIcon
                            style={{ backgroundColor: 'white', padding: '10px', borderRadius: '50%' }} 
                            optionIn={income.option} 
                            />

                            <div className="circleName">
                                <CircleIcon style={{ color: 'green', fontSize: 13, marginTop: 3 }} />
                                <span className='spanCategorie'>{income.category}</span>
                            </div>

                        </div>
    
                        <div className="middle">
                            <div className="list">
                                <div className="price">
                                    <AttachMoneyIcon style={{fontSize:"18px"}}/>
                                    <span>{income.amount}</span>
                                </div>

                                <div className="data">
                                    <DateRangeIcon style={{fontSize:"18px"}}/>
                                    <span> {income.date}</span>
                                </div>

                                <div className="descriere">
                                    <TextsmsRoundedIcon style={{fontSize:"18px"}}/>
                                    <span> {income.reference}</span>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="right">
                 
                        {/*Buton de edit income */}
                        <Link to={`/income/edit/${income.id}`}>
                            <EditIcon style={{ fontSize: 25 }} />
                        </Link>

                            {/*Button de stergere income*/}
                            <div className="button" onClick={() => handleDeleteIncome(income.id)}>
                                <DeleteSweepIcon style={{ fontSize: 30 }} />
                            </div>
                        </div>
                        
                    </div>
                )) : 
                currentExpense.map((expense) => (
                    <div className="container" key={expense.id}>
                        <div className="logo">
                        <CategoryIcon
                        style={{ color: 'black', backgroundColor: 'yellow', padding: '5px', borderRadius: '5px' }}
                        optionEx={expense.option}
                    />


                            <div className="circleName">
                                <CircleIcon style={{ color: 'red', fontSize: 13, marginTop: 3}} />
                                <span className='spanCategorie'>{expense.category}</span>
                            </div>

                        </div>
    
                        <div className="middle">
                        
    
                            <div className="list">
                                <div className="price">
                                    <AttachMoneyIcon style={{fontSize:"18px"}}/>
                                    <span> {expense.amount}</span>
                                </div>
                                <div className="data">
                                    <DateRangeIcon style={{fontSize:"18px"}}/>
                                    <span> {expense.date}</span>
                                </div>
                                <div className="descriere">
                                    <TextsmsRoundedIcon style={{fontSize:"18px"}}/>
                                    <span>{expense.reference}</span>
                                </div>
                            </div>
                        </div>
    
                        {/*Button de edit*/}
                        <div className="right">
                 

                            <Link to={`/expense/edit/${expense.id}`}>
                                <EditIcon style={{ fontSize: 25 }} />
                            </Link>

                         {/*Button de stergere*/}
                            <div  
                                className="button" 
                                onClick={() => handleDeleteExpense(expense.id)}
                                >
                            <DeleteSweepIcon
                            style={{ fontSize:30  }}
                            />
                        </div>

                        </div>
                    </div>
                ))
            }
        </div>
    );
}
