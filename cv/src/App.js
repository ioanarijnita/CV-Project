import logo from './logo.svg';
import './App.css';
import picture from './assets/picture.jpeg'
import education from './assets/education.png'
import creativity from './assets/creativity.png'
import digital from './assets/digital.png'
import communication from './assets/communication.png'
import phone from './assets/phone.png'
import mail from './assets/mail.png'
import address from './assets/address.png'
import { RibbonContainer,  RightCornerRibbon, LeftLargeRibbon } from "react-ribbons";
import { shadows } from '@material-ui/system';

function Ribbon({text}) {

  return (
    <div className = "content">
      <h1 className = "ribbon" >{text}</h1>
    </div>
  );
}

function CvItem({text, img}) {

  return (
    <div style = {{backgroundColor: '#4C4C4C', height: 30, marginTop: 20, borderRadius: 10,  boxShadow: '2px 10px 10px grey', display: 'flex'}}>
      <text style = {{fontSize: 18, color: 'white', fontWeight: 'bold', marginLeft: 30}}>{text}</text>
      <div style = {{flexGrow: 1,position: 'relative', display: 'flex', marginLeft: 30}}>
        <img src = {img} style ={{width:35, height: 35, alignSelf: 'center'}}></img>
      </div>
    </div>
    

  );
}

function ProfileItem({img}) {

  return (
    <div style = {{width: 45, height: 45, backgroundColor: '#f0cae1', borderWidth: 4, borderRadius: 15, borderStyle: 'solid', borderColor: 'white', display: 'flex', alignItems: 'center', justifyContent:'center', marginLeft: 12, marginBottom: 15}}>
      <img src = {img} style ={{width:35, height: 35}}></img>
    </div>
  );
}

function App() {
  const profile = "Eu sunt, \n Ioana"
  return (
    <div style = {{marginTop: 20, display: 'flex', marginLeft: 300, marginRight: 300, backgroundColor: '#f9e9f2'}}>
      <div style = {{width: 270, height: '100%', backgroundColor: '#ececec'}}>
        <hr style = {{background: 'linear-gradient(to right, #f0cae1, #f9e9f2)', height: 25, borderRightColor: 'transparent', borderRight: 1,  bottom: 8, borderColor: "transparent", position: 'relative'}}></hr>
        <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', bottom: 16}}>
          <div style = {{width: 0, height: 0, borderStyle: 'solid', borderBottomWidth: 0, borderLeftWidth: 10, borderRightWidth: 10, borderTopWidth: 20, borderTopColor: '#f5daea', backgroundColor: 'transparent', borderBottomcolor: "transparent", borderLeftColor: 'transparent', borderRightColor:'transparent'}}></div> 
          <br />
          <img className = "App-picture" src = {picture} style = {{borderWidth: 5, borderColor: 'white', borderStyle: 'solid'}} ></img>
        </div>
        <Ribbon text = {"Profile"}></Ribbon>
        <br/>
        <div style = {{display: 'flex', flexDirection: 'column'}}>
          <ProfileItem img = {phone}></ProfileItem>
          <ProfileItem img = {mail}></ProfileItem>
          <ProfileItem img = {address}></ProfileItem>
        </div>
        <Ribbon text = {"Contact"}></Ribbon>
        <br />
        <br />
        <br />
        <br />
        <br /><br /><br /><br /><br /><br /><br />
      </div>
      

      <div style = {{width: 320, height: '100%', backgroundColor: '#ececec', marginLeft: 15, marginTop: 26, flexDirection: 'column'}}>
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
