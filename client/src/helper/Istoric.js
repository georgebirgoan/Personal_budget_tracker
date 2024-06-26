import { useSelector} from "react-redux";



export const Istoric = () => {
    const { currentIncome } = useSelector(state => state.income);
    const { currentExpense } = useSelector(state => state.expense);
   // const dispatch=useDispatch();
    //dispatch(resetState());

    
    const history = [...currentIncome, ...currentExpense];
    history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return history.slice(0, 4);
}

export const IstoricExport = () => {
    const { currentIncome } = useSelector(state => state.income);
    console.log(currentIncome);
    const { currentExpense } = useSelector(state => state.expense);
    const history = [...currentIncome, ...currentExpense];
    
    history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const formattedHistory = history.map(item => ({
        date: item.date, 
        type:item.type,
        category: item.category, 
        amount: item.amount,
        option: item.option, 
        reference: item.reference, 
      }));
    
      return formattedHistory
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




