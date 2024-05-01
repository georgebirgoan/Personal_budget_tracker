import Categories from '../../components/categories/Categories';
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';
import './income.scss';

export default function Income() {
  return (
    <>
    <div className='sideContainer'>
    <SideBar/>
    <div className="navContainer">
      <Navbar/>

    <div className="mainContainer">
      <div className="secondContainer">
        <span className='title'>Incomes</span>
        
            <div className="totalIncome">
                <span>Total income:</span>
                <span className="price"> $1223</span>
            </div>
        </div>


        <span>error</span>
        <div className="inputCategories">
            <div className="inputContainer">
            <span className='titleInput2'>Add your incomes</span>
              <input  type='text' alt='title' placeholder='Salary title' />
              <input type='text' alt='amount'  placeholder='Salary Amount' />
              <input type='text' alt='date'  placeholder='Enter a date' />
              <input type='text' alt='option'  placeholder='Select Option' />
              <input type='text' alt='reference'  placeholder='Add a reference' />
            
              <div className="buttonCheck">
                  <div className="submit">
                    <span>+ Add income</span>
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
