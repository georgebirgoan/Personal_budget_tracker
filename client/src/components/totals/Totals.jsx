import './totals.scss';


export default function Totals() {
  return (
    <div className='total'>
        <div className='totalGroup'>
                <div className='income'>
                    <span>Total income</span>
                    <span>$ 2527</span>
                </div>  
                <div className='expense'>
                    <span>Total expense</span>
                    <span>$ 1527</span>
                </div>  

                
        </div>

        <div className='balance'>
            <span>Total balance</span>
            <span>$ 2354</span>
        </div>  
    </div>
  )
}
