import './editIncome.scss';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateIncome, failureUpdate } from '../../redux/cart/IncomeReducer';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditIncome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams(); // Get the specific user ID from URL parameters
  console.log(id);
  const { currentIncome } = useSelector((state) => state.income);

  const [editIncome, setEditIncome] = useState({
    category: '',
    amount: '',
    date: '',
    option: '',
    goals: '',
    reference: ''
  });

  // Find the specific income record based on the ID
  useEffect(() => {
    const incomeRecord = currentIncome.find((income) => income.id === id);
    if (incomeRecord) {
      setEditIncome({
        category: incomeRecord.category || '',
        amount: incomeRecord.amount || '',
        date: incomeRecord.date || '',
        option: incomeRecord.option || '',
        goals: incomeRecord.goals || '',
        reference: incomeRecord.reference || ''
      });
    }
  }, [id, currentIncome]);

  const handleChange = (e) => {
    setEditIncome({ ...editIncome, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(updateIncome({ id, editIncome }));
      navigate("/income");
    } catch {
      dispatch(failureUpdate());
    }
  };

  return (
    <div className="grid">
      <div className="box inputContainer">
        <span className="titleInput">Update your income</span>
        <form onSubmit={handleSubmit} className="formIncome">
          <input
            onChange={handleChange}
            className="input1"
            type="text"
            id="category"
            value={editIncome.category}
            placeholder="Salary title"
          />
          <input
            onChange={handleChange}
            className="input1"
            type="text"
            id="amount"
            value={editIncome.amount}
            placeholder="Salary Amount"
          />
          <input
            onChange={handleChange}
            className="input1"
            type="date"
            id="date"
            value={editIncome.date}
            placeholder="zz.mm.aaaa"
          />
          <select
            onChange={handleChange}
            className="input1"
            id="option"
            value={editIncome.option}
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
            className="input1"
            id="goals"
            value={editIncome.goals}
            type="text"
            placeholder="Add budget goals"
          />
          <input
            onChange={handleChange}
            className="input1"
            id="reference"
            value={editIncome.reference}
            type="text"
            placeholder="Add a reference"
          />
          <div className="buttonCheck">
            <button type="submit">Update Income</button>
          </div>
        </form>
      </div>
    </div>
  );
}
