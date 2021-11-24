import './App.css';
import Button from '@mui/material/Button';
import Widget_Attaque from './Widgets/Widget_Attaque';
import titre from './images/titre.png'
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>


function App() {
      return(
        <div class ="container">
          <div class = "row">
            <div class = "col-6 center">
              
              <Widget_Attaque/>
              <img src={titre}/>

          </div>
        </div>
      </div>
      );
}

export default App;