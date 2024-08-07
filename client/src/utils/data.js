import homeImg from '../images/homeImg.png';
import incomeImg3 from '../images/incomeImg3.png';
import expenseImg from '../images/expenseImg.png';
import totalIncomeImg from '../images/totalIncome.png'
import { useDispatch, useSelector } from 'react-redux';
import totalExpenseImg from '../images/totalExpenseImg.png'
import totalBalanceImg from '../images/totalBalanceImg.png'
import totalEconomyImg from '../images/totalEconomyImg.png'
import { useState,useEffect } from 'react';
import { histBalance } from '../redux/cart/IncomeReducer';
import loginImg from '../images/loginImg.png'
import signImg from '../images/singImg.png'

export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Dashboard",
        url: "/",
          icon: homeImg,
        },
        {
          id: 2,
          title: "Income",
          url: "/income",
          icon: incomeImg3
        },
        {
          id: 3,
          title: "Expense",
          url: "/expense",
          icon: expenseImg,
        },
        {
          id: 4,
          title: "SignUp",
          url: "/signup",
          icon: signImg,
        },
        
        {
          id: 5,
          title: "Login",
          url: "/login",
          icon: loginImg,
        },
        
      

      ],
    },


    
    {
      id: 2,
      title: "lists",
      listItems: [
        {
          id: 1,
          title: "Users",
          url: "/",
          icon: "#",
        },
        {
          id: 2,
          title: "Products",
          url: "/",
          icon: "#",
        },
        {
          id: 3,
          title: "Orders",
          url: "/",
          icon: "#",
        },
        {
          id: 4,
          title: "Posts",
          url: "/",
          icon: "#",
        },
      ],
    },
    {
      id: 3,
      title: "general",
      listItems: [
        {
          id: 1,
          title: "Elements",
          url: "/",
          icon: "#",
        },
        {
          id: 2,
          title: "Notes",
          url: "/",
          icon: "#",
        },
        {
          id: 3,
          title: "Forms",
          url: "/",
          icon: "#",
        },
        {
          id: 4,
          title: "Calendar",
          url: "/",
          icon: "#",
        },
      ],
    },
    {
      id: 4,
      title: "Maintenance",
      listItems: [
        {
          id: 1,
          title: "Settings",
          url: "/",
          icon: "#",
        },
        {
          id: 2,
          title: "Backups",
          url: "/",
          icon: "#",
        },
      ],
    },
    {
      id: 5,
      title: "analytics",
      listItems: [
        {
          id: 1,
          title: "Charts",
          url: "/",
          icon: "#",
        },
        {
          id: 2,
          title: "Logs",
          url: "/",
          icon: "#",
        },
      ],
    },
  ];
  


export function MyComponent() {
    
    //const dispatch=useDispatch();
    const { currentIncome, totalIncome, totalEconomy, economyChanges, balanceChanges } = useSelector((state) => state.income);
    const { currentExpense, totalExpense } = useSelector((state) => state.expense);
   console.log(totalIncome);
  const balance=(totalIncome-totalExpense)-totalEconomy;
  console.log(balance);

//const currentDate=new Date();
//dispatch(histBalance(balance,currentDate));
  
let chartDataBalance = []; 
if (balanceChanges && balanceChanges.length > 0) {
  chartDataBalance = balanceChanges.map(change => ({
    name: change.date,
    balance: change.amount
  }));
}

console.log(chartDataBalance);

 const chartBoxBalance = {
      color: "#8884d8",
      icon: totalBalanceImg,
      title: "Total Balance",
      number: balance,
      dataKey: "balance",
      percentage: -12,
      chartData: chartDataBalance
    };



let chartDataEconomy = []; 
if (economyChanges && economyChanges.length > 0) {
   chartDataEconomy = economyChanges.map(change => ({
    name: change.date,
    economy: change.amount
  }));
}

const chartBoxEconomy = {
  color: "#8884d8",
  icon: totalEconomyImg,
  title: "Total Economy",
  number: totalEconomy,
  dataKey: "economy",
  percentage: -12,
  chartData: chartDataEconomy
};


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



    const chartBoxIncome = {
        color: "#8884d8",
        icon: totalIncomeImg,
        title: "Total income",
        number: totalIncome,
        dataKey: "income",
        percentage: 24,
        chartData: chartDataIncome
    }
   

    const chartBoxExpense = {
        color: "#8884d8",
        icon:totalExpenseImg ,
        title: "Total Expenses",
        number: totalExpense,
        dataKey: "expense",
        percentage: -11,
        chartData:chartDataExpense
    };
    

   
    return { chartBoxIncome, chartBoxExpense,chartBoxEconomy,chartBoxBalance};
}

  
