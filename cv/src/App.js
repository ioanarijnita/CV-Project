import logo from './logo.svg';
import './App.css';
import picture from './assets/picture.jpeg'
import education from './assets/education.png'
import creativity from './assets/creativity.png'
import phone from './assets/phone.png'
import mail from './assets/mail.png'
import address from './assets/address.png'
import { RibbonContainer,  RightCornerRibbon, LeftLargeRibbon } from "react-ribbons";
import { fontSize, fontWeight, shadows } from '@material-ui/system';
import 'react-circular-progressbar/dist/styles.css';
import english from './assets/english.png'
import french from './assets/french.png'
import movies from './assets/movies.png'
import books from './assets/books.png'
import painting from './assets/painting.png'
import english1 from './assets/english1.PNG'
import french1 from './assets/french1.PNG'
import information from './assets/information.png'
import nationality from './assets/nationality.png'
import gender from './assets/gender.png'
import birthdate from './assets/birthdate.png'


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
    <div style = {{backgroundColor: '#666666', height: 40, width: '90%', marginTop: 20, borderRadius: 10,  boxShadow: '2px 10px 10px grey', display: 'flex'}}>
      <text style = {{fontSize: 24, color: 'white', fontWeight: 'bold', marginLeft: 30}}>{text}</text>
      <div style = {{flexGrow: 1,position: 'relative', display: 'flex', justifyContent: 'flex-end', right: 15}}>
        <img src = {img} style ={{width:30, height: 30, alignSelf: 'center'}}></img>
      </div>
    </div>
  );
}

function ProfileItem({img, text}) {

  return (
    <div style = {{display: 'flex', flexDirection: 'row'}}>
      <div style = {img === nationality || gender || birthdate ? {width: 30, height: 30, backgroundColor: '#f0cae1', borderWidth: 4, borderRadius: 15, borderStyle: 'solid', borderColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'center', marginLeft: 12, marginBottom: 15} : {width: 45, height: 45, backgroundColor: '#f0cae1', borderWidth: 4, borderRadius: 15, borderStyle: 'solid', borderColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'center', marginLeft: 12, marginBottom: 15}}>
          <img src = {img} style ={img === nationality || gender || birthdate ? {width:20, height: 20} : {width:35, height: 35}}></img>
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

function DegreeItem({degree, university, date, fieldOfStudy, list}) {

    return (
        <div style = {{display: 'flex', alignSelf: 'flex-start', flexDirection: 'column', flexWrap: 'wrap'}}>
          <br />  
          <text style ={{fontSize: 20, color: 'black', fontWeight: 'bold', position: 'relative', left: 40}}>{degree}</text>
          <p style ={{fontSize: 17, position:'relative', marginLeft: 40}}>
            <text style = {{color: 'black', fontWeight: 'bold', fontStyle: 'italic', }}>{university}</text>
            <br />
            <text>{date}</text>
            <br/><br/>
            <text style = {{color: 'black', fontWeight: 'bold' }} >Address: </text>
            <text>Timisoara (Romania)</text>
            <br/><br/>
            <text style = {{color: 'black', fontWeight: 'bold' }} >Field(s) of study:  </text>
            <text>{fieldOfStudy}</text>
            <br/><br/>
            <ul>
            {list.map(item => (
              <li>
                {item}
              </li>
            ))
            }
            </ul>
          </p>
        </div>
    );
}
function SkillsItem({name, list}){
 return(
    <div style = {{display: 'flex', alignSelf: 'flex-start', flexDirection: 'column'}}>
      <p style ={{fontSize: 20, color: 'black', fontWeight: 'bold', position: 'relative', left: 40}}>{name}</p>
        <ul style = {{marginLeft: 40}}>
        {list.map(item => (
          <li>
            {item}
          </li>
        ))
        }
        </ul>
    </div>
 )

}
function App() {
  const percentage = 66;

  const listPoli = ["Intermediate Java knowledge, OOP", "Intermediate C programming language: pointers, dynamic allocation, data structures and algorithms", "Basic knowledge in functional programming using OCaml and Lisp", "Familiar with Agile Development and Linux"];
  const listUvt = ["Advanced knowledge in statistics, econometrics, microeconomy and macroeconomy", "Intermediate knowledge in accounting, financial management and marketing, public finance and  corporate finance", "Basic knowledge in capital markets, financial control and baking operations"];
  const listDigital =["MS Office (MS Word, MS Excel, MS PowerPoint, MS Access, MS Outlook)", " Qualification certificate “ECDLCore, 7 Modules”", "Good Internet and E-mail skills"];
  const listCommunication = ["Team-working skills", "Good communication skills gained as a student through 2-4 member projects for university", "Good communicator and listener", "Organizational and planning skills"];
  return (
    <div style = {{marginTop: 20, display: 'flex', marginLeft: 190, marginRight: 190, backgroundColor: 'white'}}>
      <div style = {{width: 400 , height: '100%', backgroundColor: '#b4b4bc'}}>
        <hr style = {{background: 'linear-gradient(to right, #f0cae1, #f9e9f2)', height: 25, borderRightColor: 'transparent', borderRight: 1,  bottom: 8, borderColor: "transparent", position: 'relative'}}></hr>
        <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', bottom: 16}}>
          <div style = {{width: 0, height: 0, borderStyle: 'solid', borderBottomWidth: 0, borderLeftWidth: 10, borderRightWidth: 10, borderTopWidth: 20, borderTopColor: '#f5daea', backgroundColor: 'transparent', borderBottomcolor: "transparent", borderLeftColor: 'transparent', borderRightColor:'transparent'}}></div> 
          <br />
          <img className = "App-picture" src = {picture} style = {{width: 120, height: 120, borderWidth: 5, borderColor: 'white', borderStyle: 'solid', borderRadius: 100}} ></img>
        </div>
        <Ribbon text = {"Profile"}></Ribbon>
        <ProfileItem img = {nationality} text = "Nationality: Romanian"></ProfileItem>
        <ProfileItem img = {gender} text = "Gender: Female"></ProfileItem>
        <ProfileItem img = {birthdate} text = "Date of birth: 03/02/1999"></ProfileItem>
        <br/>
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
        <div style = {{marginLeft: 5}}>
          <text style = {{fontStyle: 'italic', marginLeft: 15, position: 'relative', left: 5, color: 'white'}}>I enjoy going to the theatre and watching old movies (favorite directors: </text>
          <a href = "https://www.imdb.com/name/nm0000033/" style = {{color: 'white'}}>
            <text style = {{color: 'white', fontStyle: 'italic'}}>Alfred Hitchcock </text>
          </a>
          <text style = {{color: 'white', fontStyle: 'italic'}}>and </text>
          <a href = "https://www.imdb.com/name/nm0000419/" style = {{color: 'white'}}>
            <text style = {{color: 'white', fontStyle: 'italic'}}>Jean-Luc Godard</text>
          </a>
          <text style = {{color: 'white', fontStyle: 'italic'}}>).</text>
        </div>
        <br/><br/>
        <ProfileItem img ={books}></ProfileItem>
        <div style = {{marginLeft: 5}}>
          <text style = {{fontStyle: 'italic', marginLeft: 15, position: 'relative', left: 5, color: 'white'}}>Because my study field is technical, I really like spending some time reading classical books from
  authors such as .</text>
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
        </div>
<br/><br/>
        <ProfileItem img ={painting}></ProfileItem>
        <div style = {{marginLeft: 5}}>
          <text style = {{fontStyle: 'italic', marginLeft: 15, position: 'relative', left: 5, color: 'white'}}>Another passion that I have is on the creative side: painting. I also enjoy buying pieces of art from
every town/country I am travelling to.</text>
        </div>
        <br /><br /><br /><br /><br /><br /><br />
      </div>
      

      <div style = {{backgroundColor: '#f8f8ff', flexDirection: 'column', display: 'flex', alignItems: 'center'}}>
        <hr style = {{background: 'linear-gradient(to left, #f0cae1, #f9e9f2)', bottom: 7.5, width: 650, height: 25, borderRightColor: 'transparent', borderLeftColor: ' transparent', borderTopColor: 'transparent', borderRight: 1,   borderColor: "transparent", position: 'relative'}}></hr>
        <text style = {{position: 'relative', top: 70, fontStyle: 'italic', fontWeight: 'bold', fontSize: 24}}>Ioana Rîjniță</text>
        <hr style = {{width: 230, position: 'relative', bottom: -75, borderWidth: 1, borderColor: 'black' }}></hr>
        <text style = {{position: 'relative', bottom: -75, fontStyle: 'italic', fontSize: 18}}>Student</text>
        <CircularProgress  style = {{width: 200, height: 200, bottom: 70, position: 'relative', color: 'black' }} thickness = {1}></CircularProgress>
        <CvItem text = "Education and training" img = {education}></CvItem>
        {/* incepe */}
        <DegreeItem degree = "Bachelor's Degree" university = "Polytechnic University of Timisoara, Faculty of Automation and Computing" date = "[ 23/09/2019 – Current ]" fieldOfStudy = "Computers and Information Technology in romanian language" list = {listPoli}></DegreeItem>
        <DegreeItem degree = "Bachelor's Degree" university = "University of West, Faculty of Economy and Business Administration" date = "[ 30/09/2019 – Current ]"fieldOfStudy = "Finance and Banking in English language" list = {listUvt}></DegreeItem>
        <DegreeItem degree ="High School Diploma" university = "Colegiul Național Bănățean" date = "[ 15/09/2014 – 29/05/2018 ]" fieldOfStudy = "Mathematics and Informatics" list = {["Basic C++ programming"]}></DegreeItem>
        <br />
        <CvItem text = "Personal skills" img = {creativity}></CvItem>

        <div style = {{display: 'flex', alignSelf: 'flex-start', flexDirection: 'column'}}>
          <SkillsItem name = "Digital skills" list = {listDigital}></SkillsItem>
          <SkillsItem name = "Communication skills" list = {listCommunication}></SkillsItem>
          
        </div>
        <CvItem text = "Additional information" img = {information}></CvItem>
        <div style = {{display: 'flex', alignSelf: 'flex-start', flexDirection: 'column'}}>
          <p style ={{fontSize: 20, color: 'black', fontWeight: 'bold', position: 'relative', left: 40}}>Honours and awards</p>
          <ul>
            <li>
            4<sup>th</sup> Prize at the "Constantin Salceanu" Physics Contest, 2018
            </li>
            <li>
              <text>2<sup>nd</sup>  Prize at the County Contest of Romanian language and participation at the National Level of the 
              same contest, 2018 (the highest result from the Timis county)</text>
            </li>
            <li>
            ECDL certificate (7 modules)
            </li>
          </ul>
          
          <p style ={{fontSize: 20, color: 'black', fontWeight: 'bold', position: 'relative', left: 40}}>Projects</p>
          <ul>
            <li>
            Website for the Highschool informatics certificate using HTML and CSS. (about Mircea Eliade)
            </li>
            <li>
            Smart Banking App (using Java programming language, JafaFx, Scene-Builder, Nitrite Database and
Gradle). Project on going in a team of 2 members.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
