import React, { useEffect } from 'react';
import addNotification from 'react-push-notification';
import { useSelector } from 'react-redux';

const ExpenseNotification = () => {
    const { currentExpense }=useSelector(state=>state.expense);
    const isExceedingLimit = currentExpense.some(expense => expense.amount > 2000);
    console.log(isExceedingLimit);
    useEffect(() => {
      if (isExceedingLimit) {
        addNotification({
          title: 'Budget Warning',
          message: 'You have exceeded $2000 in expenses.',
          timeout: 5000,
        });
      }
    }, [currentExpense, isExceedingLimit]);
    
  }

export default ExpenseNotification;
