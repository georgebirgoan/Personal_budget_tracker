import { useSelector} from "react-redux";

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



export const MinSal = () => {
    const { currentIncome } = useSelector(state => state.income);
    
    const findMin = () => {
        if (currentIncome.length === 0) {
            return 0;
        }

        let min = currentIncome[0].amount;    
        for (let i = 1; i < currentIncome.length; i++) {
            if (currentIncome[i].amount < min) {
                min = currentIncome[i].amount;
            }
        }
        return min;
    };

    const minAmount = findMin();
    return (
        <div>
            <div>
                <p>{minAmount}</p>
            </div>
        </div>
    );
};


export const MaxSal = () => {
    const { currentIncome } = useSelector(state => state.income);
    
    const findMax = () => {
        if (currentIncome.length === 0) {
            return 0;
        }

        let max = currentIncome[0].amount;
        for (let i = 1; i < currentIncome.length; i++) {
            if (currentIncome[i].amount > max) {
                max = currentIncome[i].amount;
            }
        }
        return max;
    };
    const maxAmount = findMax();


    return (
        <div>
            <div>
                <p>{maxAmount} </p>
            </div>
        </div>
    );
};


export const MinExpense = () => {
    const { currentExpense } = useSelector(state => state.expense);
    
    const findMin = () => {
        if (currentExpense.length === 0) {
            return 0;
        }

        let min = currentExpense[0].amount;    
        for (let i = 1; i < currentExpense.length; i++) {
            if (currentExpense[i].amount < min) {
                min = currentExpense[i].amount;
            }
        }
        return min;
    };

    const minAmount = findMin();
    return (
        <div>
            <div>
                <p>{minAmount}</p>
            </div>
        </div>
    );
};


export const MaxExpense = () => {
    const { currentExpense } = useSelector(state => state.expense);
    
    const findMax = () => {
        if (currentExpense.length === 0) {
            return 0;
        }

        let max = currentExpense[0].amount;
        for (let i = 1; i < currentExpense.length; i++) {
            if (currentExpense[i].amount > max) {
                max = currentExpense[i].amount;
            }
        }
        return max;
    };
    const maxAmount = findMax();


    return (
        <div>
            <div>
                <p>{maxAmount} </p>
            </div>
        </div>
    );
};
