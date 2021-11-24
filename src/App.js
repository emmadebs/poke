import './App.css';
import PrimarySearchAppBar from './components/Navbar'
import Button from '@mui/material/Button';
import Widget_Attaque from './Widgets/Widget_Attaque';
//mport titre from './images/titre.png'
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>


function App() {
      return(
        <div class ="container">
          <PrimarySearchAppBar/>
          <div class = "row">

          <div class = "col-12 center">
           {/* <img src={titre}/> */}
          </div>
            <div class = "col-12 center">
              
              <Widget_Attaque/>

            </div>
          </div>
        </div>
      );
}

export default App;