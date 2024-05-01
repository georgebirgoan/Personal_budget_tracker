import './categories.scss';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

export default function Categories() {
  return (
    <>
    <div className="allCategories">


      
      {/*container 1 */}
        <div className="container">
          <div className="logo">
              <SearchOutlined/>
          </div>

        <div className="middle">
            <div className="circleName">
                <CircleIcon style={{color:'green',fontSize:13,marginTop:7}}/>
                <span>nume</span>
            </div>

          <div className="list">
              <div className="price">
                <SearchOutlined/>
                <span>12314</span>
              </div>

              <div className="data">
                <SearchOutlined/>
                <span>data</span>
              </div>


              <div className="descriere">
                <SearchOutlined/>
                <span>descriere</span>
              </div>  
          </div>
        </div>
        <div className="button">
                  <DeleteSweepIcon style={{fontSize:35,color:'red'}}/>
        </div>
      </div>
      

      {/*container 2 */}
      <div className="container">
          <div className="logo">
              <SearchOutlined/>
          </div>

        <div className="middle">
            <div className="circleName">
                <CircleIcon style={{color:'green',fontSize:13,marginTop:7}}/>
                <span>nume</span>
            </div>

          <div className="list">
              <div className="price">
                <SearchOutlined/>
                <span>12314</span>
              </div>

              <div className="data">
                <SearchOutlined/>
                <span>data</span>
              </div>

              <div className="descriere">
                <SearchOutlined/>
                <span>descriere</span>
              </div>  
          </div>
        </div>
        <div className="button">
                  <DeleteSweepIcon style={{fontSize:35,color:'red'}}/>
        </div>
      </div>

    

    
      {/*container 3 */}
      <div className="container">
          <div className="logo">
              <SearchOutlined/>
          </div>

        <div className="middle">
            <div className="circleName">
                <CircleIcon style={{color:'green',fontSize:13,marginTop:7}}/>
                <span>nume</span>
            </div>

          <div className="list">
              <div className="price">
                <SearchOutlined/>
                <span>12314</span>
              </div>

              <div className="data">
                <SearchOutlined/>
                <span>data</span>
              </div>

              <div className="descriere">
                <SearchOutlined/>
                <span>descriere</span>
              </div>  
          </div>
        </div>
        <div className="button">
                  <DeleteSweepIcon style={{fontSize:35,color:'red'}}/>
        </div>
      </div>


    {/*CONTAINER */}
      <div className="container">
          <div className="logo">
              <SearchOutlined/>
          </div>

        <div className="middle">
            <div className="circleName">
                <CircleIcon style={{color:'green',fontSize:13,marginTop:7}}/>
                <span>nume</span>
            </div>

          <div className="list">
              <div className="price">
                <SearchOutlined/>
                <span>12314</span>
              </div>

              <div className="data">
                <SearchOutlined/>
                <span>data</span>
              </div>

              <div className="descriere">
                <SearchOutlined/>
                <span>descriere</span>
              </div>  
          </div>
        </div>
        <div className="button">
                  <DeleteSweepIcon style={{fontSize:35,color:'red'}}/>
        </div>
      </div>
    </div>



    </>
  
  )
}
