import './App.css';
import bgimg from '../src/assets/vRs0PSJL-wallha.com.jpg'
import { useState } from 'react';
import axios from 'axios';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { MDBFooter } from 'mdb-react-ui-kit';

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '170vh',
  };
  const [movie,setMovie] = useState("")
  const [movieData, setMovieData] = useState(null)
  console.log(movie);
  const fetchData = async()=>{
    const response = await axios.get(`https://www.omdbapi.com/?t=${movie}&apikey=951b0476`)
    console.log(response.data);
    setMovieData(response.data)
  }
  return (
    <div style={backgroundStyle} className="App" >
      <div className='header'>
      <MDBNavbar style={{backgroundColor:'rgba(0,0,0,0.85)'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand style={{color:'white'}} href='/'>
          <i class="fa-solid fa-film mx-2 text-warning"></i> Film Hunt
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      </div>
      <main>
      <div style={{width:'100%', alignItems:'center', justifyContent:'center'}} className="row pt-3">
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}} className="my-5">
          <input style={{width:'400px', border:'none', boxShadow:'1px 1px 3px black', paddingInline:'20px'}} onChange={(e)=>setMovie(e.target.value)} className='form-control' type="text" placeholder='Enter movie name' />
          <button style={{boxShadow:'1px 1px 3px black'}} onClick={fetchData} className='btn btn-warning ms-4'>Search</button>
        </div>
        {
          movieData &&(
          <div id='movrow' className='p-5 mb-5' style={{backgroundColor:'rgba(0,0,0,0.85)', width:'1000px', color:'white', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <div>
            <img className='mb-2' style={{marginRight:'50px'}} src={movieData.Poster} alt="" />
          </div>
          <div className=''>
            <div className='d-flex'>
            <h1 className='me-4'>{movieData.Title}</h1>
            <i class="fa-solid fa-star mt-3 text-warning">&nbsp;&nbsp;{movieData.imdbRating}</i>
            </div>
            <h6>({movieData.Year}&nbsp;{movieData.Type})</h6>
            <h6><span>Director: </span>{movieData.Director}</h6>
            <h6><span>Cast: </span>{movieData.Actors}</h6>
            <h6><span>Language: </span>{movieData.Language}</h6>
            <h6><span>Genre: </span>{movieData.Genre}</h6>
            <h6><span>Writer: </span>{movieData.Writer}</h6>
            <h6><span>Released: </span>{movieData.Released}</h6>
            <h6><span>Box Office: </span>{movieData.BoxOffice}</h6>
            <h6><span>Runtime: </span>{movieData.Runtime}</h6>
            <p><span>Plot: </span>{movieData.Plot}</p>
          </div>
        </div>
          )
        }
      </div></main>
      <div>
      <MDBFooter style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', color:'white', width:'100%' }} className='footer text-center text-lg-left'>
      <div className='text-center p-3'>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a style={{textDecoration:'none', color:'white'}} href='/'>filmhunt.com</a>
      </div>
    </MDBFooter>
      </div>
    </div>
  );
}

export default App;
