import './categories.scss';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { useLocation } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { deleteIncome } from '../../redux/cart/IncomeReducer';

export default function Categories() {
    const location = useLocation();
    const dispatch=useDispatch();
    // const { currentExpense } = useSelector((state) => state.expenses);
    const { currentIncome } = useSelector((state) => state.income);
    console.log(Array.isArray(currentIncome));

    //const isInIncome = location.pathname === '/income';
    //const isInExpenses = location.pathname === '/expenses';

    const handleDelete=(id)=>{
        console.log("id in function",id);
        dispatch(deleteIncome({id:id}));
      }


    console.log("current in categories",currentIncome);
    return (
        <>
        <div className="allCategories">
            { currentIncome.map((income, index) => (
                <div className="container" key={index}>
                    <div className="logo">
                        <SearchOutlined />
                        Logo
                    </div>
    
                    <div className="middle">
                        <div className="circleName">
                            <CircleIcon style={{ color: 'green', fontSize: 13, marginTop: 7 }} />
                            <span>{income.category}</span>
                        </div>
    
                        <div className="list">
                            <div className="price">
                                <span>Price: {income.amount}</span>
                            </div>
                            <div className="data">
                                <span>Date: {income.date}</span>
                            </div>
                            <div className="descriere">
                                <span>Reference: {income.reference}</span>
                            </div>
                         
                        </div>
                    </div>
    
                    {/*Button de stergere*/}
                    <div className="button">
                        <button onClick={()=>handleDelete(income.id)}>
                        <DeleteSweepIcon style={{ fontSize: 35, color: 'red' }} />
                        </button>
                    </div>
                </div>
            ))}
        </div>

        </>
    );
}
