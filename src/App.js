import blight from './movie.jpg';
import interstaller from "./interstellar.jpg"
import './App.css';
import React,{useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Compoenent/Filter';
import AddMovie from './Compoenent/AddMovie';
import Navbar from "./Compoenent/Navbar"
import starwars from "./starwars.jpg"
import avengers from "./avengers.jpg";
import movie5 from "./movie5.jpg"
import jumanji from "./jumanji.jpg"
import { Link, Route, Switch } from "react-router-dom";
import Trailer from "./Compoenent/Title"

function App() {
  const logo=""
    // const [movies, setMovies] = useState(["bjr","hello","bjr","hello","bjr","hello","bjr","hello","dadza"])
    var [movies, setMovies] = useState([{title:"Bright",rate:4,descrip:"this is gonna be MOVIE1",picture:blight,url:"https://www.youtube.com/embed/MUY3GVByRUs?list=TLPQMDQxMTIwMjDYef6xJwJDlg"},
{    title:"star wars",rate:3,descrip:"this is gonna be MOVIE2",picture:starwars,url:"https://www.youtube.com/embed/8Qn_spdM5Zg?list=TLPQMDQxMTIwMjDYef6xJwJDlg"},
{    title:"avengers",rate:2,descrip:"this is gonna be MOVIE3",picture:avengers,url:"https://www.youtube.com/embed/eOrNdBpGMv8"},
{    title:"interstaller",rate:3,descrip:"this is gonna be MOVIE4",picture:interstaller,url:"https://www.youtube.com/embed/UDVtMYqUAyw?list=TLPQMDQxMTIwMjDYef6xJwJDlg"},
{title:"Scary movie 5",rate:5,descrip:"this is gonna be MOVIE5",picture:movie5,url:"https://www.youtube.com/embed/RMDZ8M47j0I?list=TLPQMDQxMTIwMjDYef6xJwJDlg"},
{    title:"Jumanji 2",rate:1,descrip:"this is gonna be MOVIE6",picture:jumanji,url:"https://www.youtube.com/embed/rBxcF-r9Ibs?list=TLPQMDQxMTIwMjDYef6xJwJDlg"}]  )
    const [title, setTitle] = useState("")
    var [rate, setRate] = useState("")


  const adding=(x)=>setMovies(movies=[...movies,x])
  const ratingChanged = (newRating) => {
    setRate(rate=newRating) 
  }
  const s=(x)=>setTitle(x)
  const Trailers = (e) => (
    <div>
      <Trailer movie={e}/>
    </div>
    
  )
  
  const Home=()=>(
    <>
    <Navbar  s={s} ratingChanged= {ratingChanged}/>
    <div >
      <div className="container">
        <div className="row">
          <Filter movies={movies} rate={rate} title={title} />
          <div className="col-3" style={{padding:"10px"}}>
            <AddMovie x={adding}/>
          </div>
     </div>
      </div>
      
      
    </div>
    </>
  )

// const br=(x)=>(x%4===0)? <br/>:null


  return (
        <div className="App">
         
      
      <Switch>
      <Route path={`/Trailer/:title`}
                 render={ (props) => <Trailer data= {movies} {...props}/>}/>
      {/* <Route exact path="/Trailer"  render={(props) => <Trailer data= {movies} {...props} /> }/> */}
      <Route path="/" component={Home}/>
      </Switch>
  
  </div>
  
  );
}

export default App;
