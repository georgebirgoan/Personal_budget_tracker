import { useSelector,useDispatch} from "react-redux";
import {startIncome,failureIncome,finalIncome,resetState,totIncome} from '../../redux/cart/IncomeReducer.js'

export const Istoric = () => {
    const { currentIncome } = useSelector(state => state.income);
    const { currentExpense } = useSelector(state => state.expense);
    //const dispatch=useDispatch();
    //dispatch(resetState());
    // Concatenează tranzacțiile din currentIncome și currentExpense
    const history = [...currentIncome, ...currentExpense];
    
    // Sortează istoricul în ordinea descrescătoare a datelor de creare
    history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // Returnează primele 3 tranzacții din istoric
    return history.slice(0, 4);
}
