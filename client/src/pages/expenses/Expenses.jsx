import './expenses.scss';
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';
import Categories from '../../components/categories/Categories';

export default function Expenses() {
  return (
    <>
    <div className='sideContainer2'>
    <SideBar/>
    <div className="navContainer2">
      <Navbar/>

    <div className="mainContainer2">
      <div className="secondContainer2">
        <span className='title2'>Expenses</span>
        
            <div className="totalIncome2">
                <span>Total expenses:</span>
                <span className="price2"> $1223</span>
            </div>
        </div>


        
        <div className="inputCategories2">
            <div className="inputContainer2">
              <span className='titleInput'>Add your expenses</span>
              <input  type='text' alt='title' placeholder='Salary title' />
              <input type='text' alt='amount'  placeholder='Salary Amount' />
              <input type='text' alt='date'  placeholder='Enter a date' />
              <input type='text' alt='option'  placeholder='Select Option' />
              <input type='text' alt='reference'  placeholder='Add a reference' />
            
              <div className="buttonCheck2">
                  <div className="submit2">
                      <span>+ Add Expense</span>
                  </div>   
              </div>
            
            </div>
            <Categories/>
        </div>

        </div>
      </div>
    </div>

    </>




  )
}
