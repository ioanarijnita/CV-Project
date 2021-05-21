import logo from './logo.svg';
import './App.css';
import picture from './assets/picture.jpeg'
import education from './assets/education.png'
import creativity from './assets/creativity.png'
import phone from './assets/phone.png'
import mail from './assets/mail.png'
import address from './assets/address.png'
import { RibbonContainer,  RightCornerRibbon, LeftLargeRibbon } from "react-ribbons";
import { fontWeight, shadows } from '@material-ui/system';
import 'react-circular-progressbar/dist/styles.css';
import english from './assets/english.png'
import french from './assets/french.png'
import movies from './assets/movies.png'
import books from './assets/books.png'
import painting from './assets/painting.png'
import english1 from './assets/english1.PNG'
import french1 from './assets/french1.PNG'

import { CircularProgressbar } from 'react-circular-progressbar';
import CircularProgress from '@material-ui/core/CircularProgress';

function Ribbon({text}) {

  return (
    <div className = "content">
      <h1 className = "ribbon" >{text}</h1>
    </div>
  );
}

function CvItem({text, img}) {

  return (
    <div style = {{backgroundColor: '#666666', height: 30, marginTop: 20, borderRadius: 10,  boxShadow: '2px 10px 10px grey', display: 'flex', marginLeft: 45, marginRight: 45}}>
      <text style = {{fontSize: 18, color: 'white', fontWeight: 'bold', marginLeft: 30}}>{text}</text>
      <div style = {{flexGrow: 1,position: 'relative', display: 'flex', marginLeft: 30}}>
        <img src = {img} style ={{width:35, height: 35, alignSelf: 'center'}}></img>
      </div>
    </div>
    

  );
}

function ProfileItem({img, text}) {

  return (
    <div style = {{display: 'flex', flexDirection: 'row'}}>
      <div style = {{width: 45, height: 45, backgroundColor: '#f0cae1', borderWidth: 4, borderRadius: 15, borderStyle: 'solid', borderColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'center', marginLeft: 12, marginBottom: 15}}>
          <img src = {img} style ={{width:35, height: 35}}></img>
      </div>
      {text === "ioanarijnita@gmail.com" ?
      <a href = "mailto:ioanarijnita@gmail.com" style = {{width: 145, height: 20, position: 'relative', top: 15, color: 'white' }}>
        <text style ={{display: 'flex', alignSelf: 'center', position: 'relative', left: 10, color: 'white', fontWeight: 'bold', fontSize: 12}}>{text}</text>
      </a>
      : <text style ={{display: 'flex', alignSelf: 'center', position: 'relative', left: 10, bottom: 5, color: 'white', fontWeight: 'bold', fontSize: 12}}>{text}</text>
      }
    </div>
  );
}

function App() {
  const percentage = 66;

<CircularProgressbar value={percentage} text={`${percentage}%`} />;

  return (
    <div style = {{marginTop: 20, display: 'flex', marginLeft: 190, marginRight: 190, backgroundColor: 'white'}}>
      <div style = {{width: 300 , height: '100%', backgroundColor: '#b4b4bc'}}>
        <hr style = {{background: 'linear-gradient(to right, #f0cae1, #f9e9f2)', height: 25, borderRightColor: 'transparent', borderRight: 1,  bottom: 8, borderColor: "transparent", position: 'relative'}}></hr>
        <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', bottom: 16}}>
          <div style = {{width: 0, height: 0, borderStyle: 'solid', borderBottomWidth: 0, borderLeftWidth: 10, borderRightWidth: 10, borderTopWidth: 20, borderTopColor: '#f5daea', backgroundColor: 'transparent', borderBottomcolor: "transparent", borderLeftColor: 'transparent', borderRightColor:'transparent'}}></div> 
          <br />
          <img className = "App-picture" src = {picture} style = {{width: 120, height: 120, borderWidth: 5, borderColor: 'white', borderStyle: 'solid', borderRadius: 100}} ></img>
        </div>
        <Ribbon text = {"Profile"}></Ribbon>
        <br/>
        <br />
        <br />
        <br />
        <Ribbon text = {"Contact"}></Ribbon>
        <div style = {{display: 'flex', flexDirection: 'column'}}>
          <ProfileItem img = {phone} text = {"0737903025"} ></ProfileItem>
          <ProfileItem img = {mail} text = {"ioanarijnita@gmail.com"}></ProfileItem>
          <ProfileItem img = {address} text = {"Romulus Street, 74, 300350 Timisoara (Romania) "}></ProfileItem>
        </div>
        <Ribbon text = {"Language"}></Ribbon>
        <div style = {{display: 'flex', flexDirection: 'column'}}>
          <div className = "englishHover">
            <ProfileItem img = {english}  text = {"English"}></ProfileItem>
          </div>
          <div className = "hide">
            <img src = {english1}></img>
          </div>
          <br />
          <br />

          <div className = "englishHover">
            <ProfileItem img = {french}  text = {"French"}></ProfileItem>
          </div>
          <div className = "hide">
            <img src = {french1}></img>
          </div>
      
        </div>
        <Ribbon text = {"Hobbies"}></Ribbon>
        <ProfileItem img ={movies}></ProfileItem>
        <text style = {{fontStyle: 'italic', marginLeft: 15, position: 'relative', left: 5, color: 'white'}}>I enjoy going to the theatre and watching old movies (favorite directors: </text>
        <a href = "https://www.imdb.com/name/nm0000033/" style = {{color: 'white'}}>
          <text style = {{color: 'white', fontStyle: 'italic'}}>Alfred Hitchcock </text>
        </a>
        <text style = {{color: 'white', fontStyle: 'italic'}}>and </text>
        <a href = "https://www.imdb.com/name/nm0000419/" style = {{color: 'white'}}>
          <text style = {{color: 'white', fontStyle: 'italic'}}>Jean-Luc Godard</text>
        </a>
        <text style = {{color: 'white', fontStyle: 'italic'}}>).</text>
        <br/><br/>
        <ProfileItem img ={books}></ProfileItem>
        <text style = {{fontStyle: 'italic', marginLeft: 15, position: 'relative', left: 5, color: 'white'}}>Because my study field is technical, I really like spending some time reading classical books from
authors such as </text>
<a href = "https://en.wikipedia.org/wiki/Fyodor_Dostoevsky" style = {{color: 'white'}}>
          <text style = {{color: 'white', fontStyle: 'italic'}}>Dostoievski</text>
        </a>
        <text style = {{color: 'white', fontStyle: 'italic'}}>, </text>
        <a href = "https://en.wikipedia.org/wiki/Honor%C3%A9_de_Balzac" style = {{color: 'white'}}>
          <text style = {{color: 'white', fontStyle: 'italic'}}>Balzac</text>
        </a>
        <text style = {{color: 'white', fontStyle: 'italic'}}> and </text>
        <a href = "https://en.wikipedia.org/wiki/Mircea_Eliade" style = {{color: 'white'}}>
          <text style = {{color: 'white', fontStyle: 'italic'}}>Mircea Eliade.</text>
        </a>
<br/><br/>
        <ProfileItem img ={painting}></ProfileItem>
        <text style = {{fontStyle: 'italic', marginLeft: 15, position: 'relative', left: 5, color: 'white'}}>Another passion that I have is on the creative side: painting. I also enjoy buying pieces of art from
every town/country I am travelling to.</text>
        <br /><br /><br /><br /><br /><br /><br />
      </div>
      

      <div style = {{backgroundColor: '#f8f8ff', flexDirection: 'column', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
        <hr style = {{background: 'linear-gradient(to left, #f0cae1, #f9e9f2)', bottom: 7.5, width: 650, height: 25, borderRightColor: 'transparent', borderLeftColor: ' transparent', borderTopColor: 'transparent', borderRight: 1,   borderColor: "transparent", position: 'relative'}}></hr>
        <text style = {{position: 'relative', top: 70, fontStyle: 'italic', fontWeight: 'bold', fontSize: 24}}>Ioana Rîjniță</text>
        <hr style = {{width: 230, position: 'relative', bottom: -75, borderWidth: 1, borderColor: 'black' }}></hr>
        <text style = {{position: 'relative', bottom: -75, fontStyle: 'italic', fontSize: 18}}>Student</text>
        <CircularProgress  style = {{width: 200, height: 200, bottom: 70, position: 'relative', color: 'black' }} thickness = {1}></CircularProgress>
        <CvItem text = "Education and training" img = {education}></CvItem>
        <br />
        <br />
        <br />
        <br /><br /><br /><br />
        <CvItem text = "Personal skills" img = {creativity}></CvItem>
      </div>
    </div>
  );
}

export default App;
