import homeImg from '../images/HomeSide.png';
import incomeImg3 from '../images/IncomeSide.png';
import expenseImg from '../images/ExpenseSide.png';
import TotalIncome from '../images/incomeColor.png'
import { useDispatch, useSelector } from 'react-redux';
import totalExpenseImg from '../images/TotalExpense.png'
import totalBalanceImg from '../images/TotalBalance.png'
import totalEconomyImg from '../images/TotalEconomy.png'
import { useState,useEffect, useMemo } from 'react';
import loginImg from '../images/LoginSide.png'
import LogOutSide from '../images/LogOutSide.png'
import signImg from '../images/SignUpSide.png'

export const menu = [
  {
    id: 1,
    title: "General",
    listItems: [
      {
        id: 2,
        title: "Dashboard",
        url: "/",
        icon: homeImg,
      },
      {
        id: 3,
        title: "Income",
        url: "/income",
        icon: incomeImg3,
      },
      {
        id: 4,
        title: "Expense",
        url: "/expense",
        icon: expenseImg,
      },
      {
        id: 5,
        title: "Sign In",
        url: "/signup",
        icon: signImg,
      },
      {
        id: 6,
        title: "Login",
        url: "/login",
        icon: loginImg,
      },
    ],
  },
  {
    id: 8,
    title: "Sign Out", // Îl tratez ca pe un item separat
    url: "/logout",
    icon: LogOutSide,
  },
];

  


export function MyComponent() {
    
    //const dispatch=useDispatch();
    const { currentIncome, totalIncome, totalEconomy, currentEconomy } = useSelector((state) => state.income);
    const { currentExpense, totalExpense } = useSelector((state) => state.expense);
    

    console.log("curentIncome",currentIncome);
      console.log("E\CURRENT ECONOMY:",currentEconomy);
      console.log("CURRENT EXPENSE",currentExpense);
    
    
    const balance = useMemo(() => (totalIncome - totalExpense) - totalEconomy, [totalIncome, totalExpense, totalEconomy]);

    /*
    const [balanceChanges, setBalanceChanges] = useState([
      { balance: 0, date: new Date(2024, 0, 15).toISOString().split('T')[0] }, // 15 January 2024 (Month 0)
      { balance: 100, date: new Date(2024, 1, 15).toISOString().split('T')[0] }, // 15 February 2024
      { balance: 200, date: new Date(2024, 2, 15).toISOString().split('T')[0] }, // 15 March 2024
      { balance: 300, date: new Date(2024, 11, 15).toISOString().split('T')[0] } // 15 December 2024
    ]);
    
    console.log(balanceChanges);
    
    // Effect for saving balance changes
    useEffect(() => {
      const today = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
      setBalanceChanges(prev => [...prev, { balance, date: today }]);
    }, [balance]);
    
    // Function to calculate percentage change
    const calculatePercentageChange = () => {
      const today = new Date();
      let currentMonth = today.getMonth(); // 0-11
      let currentYear = today.getFullYear();
    
      // Adjust for January (previous month is December of the previous year)
      let previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      let previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;
      
      console.log(previousMonth);
      console.log(previousYear);

      console.log("Current Date:", today);
      console.log("Previous Month:", previousMonth, "Previous Year:", previousYear);
    
      // Filter for previous month's balance
      const previousMonthBalance = balanceChanges.filter(change => {
        const changeDate = new Date(change.date); // date from balanceChanges
        console.log("Checking Change Date:", changeDate, "Balance:", change.balance);
    
        // Normalize date (ignore time)
        const changeMonth = changeDate.getMonth();
        const changeYear = changeDate.getFullYear();
    
        return changeMonth === previousMonth && changeYear === previousYear;
      });
    
      
      // If we found previous month's balance, calculate percentage change
      if (previousMonthBalance.length > 0) {
        const lastBalanceOfPreviousMonth = previousMonthBalance[previousMonthBalance.length - 1].balance;
        const percentageChange = ((balance - lastBalanceOfPreviousMonth) / lastBalanceOfPreviousMonth) * 100;
        return percentageChange.toFixed(2);
      }
      console.log("Previous Month Balance:", previousMonthBalance);
    
      return (0.0).toFixed(2); // Return 0.0 if no balance found for the previous month
    };
    
    const percentageChange = calculatePercentageChange();
    console.log(percentageChange);
    */
      
    

  const chartDataBalance = currentIncome.reduce((acc, item) => {
    const date = item.date || 'Unknown Date'; // Data curentă
    const id = item.id || "Unknown id"; // ID-ul curent

    // Căutăm dacă există deja o intrare pentru această dată
    let existingEntry = acc.find(entry => entry.name === date);
    
    // Calculăm venitul pentru această dată
    const income = parseFloat(item.amount) || 0;
    
    // Căutăm cheltuiala pentru aceeași dată
    const expenseItem = Array.isArray(currentExpense) && currentExpense.length > 0
      ? currentExpense.find(expense => expense.date === date)
      : null;
    const expense = expenseItem ? parseFloat(expenseItem.amount) || 0 : 0;
    
    // Căutăm economiile pentru aceeași dată
    const economyItems = Array.isArray(currentEconomy) ? currentEconomy.filter(economy => economy.date === date) : [];
    const totalEconomy = economyItems.reduce((sum, economyItem) => {
        return sum + (parseFloat(economyItem.goals) || 0); // Adunăm toate valorile goals
    }, 0);
    

    // console.log('Income:', income);
    // console.log('Expense:', expense);
    // console.log('Total Economy:', totalEconomy);

    // Calculăm soldul: venitul total - cheltuiala totală + economiile totale
    const balance = income - expense - totalEconomy;
    console.log('Balance:', balance);
    
    // Actualizăm sau adăugăm intrarea în acumulare
    if (existingEntry) {
      existingEntry.balance += balance; // Adăugăm la soldul existent
    } else {
      acc.push({ name: date, balance }); // Creăm o nouă intrare
    }
    
    return acc; // Returnăm acumularea
}, []);




    const chartDataEconomy = Array.isArray(currentEconomy) ? currentEconomy.reduce((acc, item) => {
      const existingEntry = acc.find(entry => entry.name === item.date); // Asigură-te că ai un câmp 'date' în item
      if (existingEntry) {
          existingEntry.economy += parseFloat(item.goals) || 0; // Adună valorile din 'goals', nu 'amount'
      } else {
          acc.push({ name: item.date || 'Unknown Date', economy: parseFloat(item.goals) || 0 }); // Folosește 'goals' în loc de 'amount'
      }
      return acc;
  }, []) : []; 
  



const chartDataIncome = currentIncome.reduce((acc, item) => {
    const existingEntry = acc.find(entry => entry.name === item.date);
    if (existingEntry) {
        existingEntry.income += item.amount;
    } else {
        acc.push({ name: item.date, income: item.amount });
    }
    return acc;
  }, []);


const chartDataExpense = currentExpense.reduce((acc, item) => {
const existingEntry = acc.find(entry => entry.name === item.date);
  if (existingEntry) {
      existingEntry.expense += item.amount;
  } else {
      acc.push({ name: item.date, expense: item.amount });
  }
  return acc;
  }, []);

  


// Funcție pentru a filtra veniturile dintr-o anumită lună
function filterAllValuesByMonth(entries, year, month) {
  if (month < 0) {
    year -= 1; // Adjust for previous year when month is negative
    month = 11; // December of the previous year
  }
  if (!Array.isArray(entries)) {
    console.error("Expected an array, but got:", entries);
    return []; // Return an empty array to prevent errors
  }
  
  return entries.filter(entry => {
    const entryDate = new Date(entry.date || entry.createdAt);  
    return entryDate.getFullYear() === year && entryDate.getMonth() === month;
  });
}

// Funcție pentru a calcula venitul total dintr-o listă de venituri
function calculateTotalForAll(entries) {
  return entries.reduce((total, entry) => total + parseFloat(entry.amount || 0), 0);
}


function calculateTotalForEconomy(incomes) {
  return incomes.reduce((total, income) => total + parseFloat(income.goals), 0);
}

// Obține luna curentă și luna anterioară
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();  // zero-based, adică ianuarie este 0

// Venituri pentru luna curentă
const currentMonthIncome = filterAllValuesByMonth(currentIncome, currentYear, currentMonth);
const currentMonthExpense=filterAllValuesByMonth(currentExpense,currentYear,currentMonth);
const currentMonthBalance = filterAllValuesByMonth(balance, currentYear, currentMonth);



const currentMonthEconomy=filterAllValuesByMonth(currentEconomy,currentYear,currentMonth);


console.log("currentMonthIncome",currentMonthIncome);
console.log("currentMonthExpense",currentMonthExpense);
console.log("currentMonthEconomy",currentMonthEconomy);
console.log("currentMonthBalance",currentMonthBalance);



// Venituri pentru luna anterioară
const previousMonthIncome = filterAllValuesByMonth(currentIncome, currentYear, currentMonth - 1);
const previousMonthExpense = filterAllValuesByMonth(currentExpense, currentYear, currentMonth - 1);
const previousMonthEconomy= filterAllValuesByMonth(currentEconomy, currentYear, currentMonth - 1);
const previousMonthBalance = filterAllValuesByMonth(balance, currentYear, currentMonth - 1);



// Calculăm venitul total pentru luna curentă și luna anterioară
//Income
const totalCurrentMonthIncome = calculateTotalForAll(currentMonthIncome);
const totalPreviousMonthIncome = calculateTotalForAll(previousMonthIncome);

//for expense
const totalCurrentMonthExpense = calculateTotalForAll(currentMonthExpense);
const totalPreviousMonthExpense = calculateTotalForAll(previousMonthExpense);


//for balance
const totalCurrentMonthBalance = calculateTotalForAll(currentMonthBalance);
const totalPreviousMonthBalance = calculateTotalForAll(previousMonthBalance);


//for economy
const totalCurrentMonthEconomy = calculateTotalForEconomy(currentMonthEconomy);
const totalPreviousMonthEconomy = calculateTotalForEconomy(previousMonthEconomy);





console.log("totalCurrentMonthIncome",totalCurrentMonthIncome);
console.log("totalPreviousMonthIncome",totalPreviousMonthIncome);

console.log("totalCurrentMonthExpense",totalCurrentMonthExpense);
console.log("totalPreviousMonthExpense",totalPreviousMonthExpense);

console.log("totalCurrentMonthEconomy",totalCurrentMonthEconomy);
console.log("totalPreviousMonthEconomy",totalPreviousMonthEconomy);



console.log("totalCurrentMonthBalance",totalCurrentMonthBalance);
console.log("totalPreviousMonthBalance",totalPreviousMonthBalance);



// Calculăm procentajul de creștere sau scădere
let percentageChangeIncome = 0;
let percentageChangeExpense = 0;
let percentageChangeEconomy = 0;
let percentageChangeBalance = 0;
if (totalPreviousMonthIncome > 0 || totalPreviousMonthExpense > 0 || totalPreviousMonthEconomy > 0 || totalPreviousMonthBalance > 0) {
  if (totalPreviousMonthIncome > 0) {
    percentageChangeIncome = ((totalCurrentMonthIncome - totalPreviousMonthIncome) / totalPreviousMonthIncome) * 100;
  } else {
    percentageChangeIncome = 0; // Dacă nu există venituri în luna anterioară
  }

  if (totalPreviousMonthExpense > 0) {
    percentageChangeExpense = ((totalCurrentMonthExpense - totalPreviousMonthExpense) / totalPreviousMonthExpense) * 100;
  } else {
    percentageChangeExpense = 0; // Dacă nu există cheltuieli în luna anterioară
  }

  if (totalPreviousMonthEconomy > 0) {
    percentageChangeEconomy = ((totalCurrentMonthEconomy - totalPreviousMonthEconomy) / totalPreviousMonthEconomy) * 100;
  } else {
    percentageChangeEconomy = 0; // Dacă nu există economie în luna anterioară
  }

 
  if (totalPreviousMonthBalance > 0) {
    percentageChangeBalance = ((totalCurrentMonthBalance - totalPreviousMonthBalance) / totalPreviousMonthBalance) * 100;
  } else {
    percentageChangeBalance = totalCurrentMonthBalance > 0 ? 100 : 0;
  }
}




console.log(percentageChangeExpense.toFixed(2));

console.log(`Venitul total din luna curentă: ${totalCurrentMonthEconomy}`);
console.log(`Venitul total din luna anterioară: ${totalPreviousMonthEconomy}`);


const chartBoxEconomy = {
  color: "#8884d8",
  icon: totalEconomyImg,
  title: "Total Economy",
  number: totalEconomy,
  dataKey: "economy",
  percentage: percentageChangeEconomy.toFixed(2),
  chartData: chartDataEconomy
};


    const chartBoxIncome = {
        color: "#8884d8",
        icon:TotalIncome,
        title: "Total income",
        number: totalIncome,
        dataKey: "income",
        percentage: percentageChangeIncome.toFixed(2),
        chartData: chartDataIncome
    }
   

    const chartBoxExpense = {
        color: "#8884d8",
        icon:totalExpenseImg ,
        title: "Total Expenses",
        number: totalExpense,
        dataKey: "expense",
        percentage: percentageChangeExpense.toFixed(2),
        chartData:chartDataExpense
    };

    
 const chartBoxBalance = {
  color: "#8884d8",
  icon: totalBalanceImg,
  title: "Total Balance",
  number: balance,
  dataKey: "balance",
  percentage: percentageChangeBalance.toFixed(2),
  chartData:chartDataBalance
};

    

   
    return { chartBoxIncome, chartBoxExpense,chartBoxEconomy,chartBoxBalance};
}

  
