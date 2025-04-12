import './editExpense.scss';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateExpense, failureUpdateEx } from '../../redux/cart/ExpenseReducer';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditExpense() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams(); // Get the specific expense ID from URL parameters
  const { currentExpense } = useSelector((state) => state.expense);
  console.log(currentExpense);
  console.log(id);

  const [editExpense, setEditExpense] = useState({
    category: '',
    amount: '',
    date: '',
    option: '',
    goals: '',
    reference: ''
  });

  // Find the specific expense record based on the ID
  useEffect(() => {
    const expenseRecord = currentExpense.find((expense) => expense.id === id);
    console.log(expenseRecord);
    if (expenseRecord) {
      setEditExpense({
        category: expenseRecord.category || '',
        amount: expenseRecord.amount || '',
        date: expenseRecord.date || '',
        option: expenseRecord.option || '',
        reference: expenseRecord.reference || ''
      });
    }
  }, [id, currentExpense]);

  const handleChange = (e) => {
    setEditExpense({ ...editExpense, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(updateExpense({ id, editExpense }));
      navigate("/expense");
    } catch {
      dispatch(failureUpdateEx());
    }
  };

  return (
    <div className="grid2">
      <div className="box inputContainer2">
        <span className="titleInput2">Update your expense</span>
        <form onSubmit={handleSubmit} className="formIncome2">
          <input
            onChange={handleChange}
            className="input2"
            type="text"
            id="category"
            value={editExpense.category}
            placeholder="Expense category"
          />
          <input
            onChange={handleChange}
            className="input2"
            type="text"
            id="amount"
            value={editExpense.amount}
            placeholder="Expense amount"
          />
          <input
            onChange={handleChange}
            className="input2"
            type="date"
            id="date"
            value={editExpense.date}
            placeholder="zz.mm.yyyy"
          />
          <select
            onChange={handleChange}
            className="input2"
            id="option"
            value={editExpense.option}
          >
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
    
          <input
            onChange={handleChange}
            className="input2"
            id="reference"
            value={editExpense.reference}
            type="text"
            placeholder="Add a reference"
          />
          <div className="buttonCheck2">
            <button type="submit">Update Expense</button>
          </div>
        </form>
      </div>
    </div>
  );
}
