import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/myapps" element={<Navigate replace to="/learn"/>}/>
      <Route path="/learn" element={<Learn/>}>
        <Route path="courses" element={<Courses/>}>
          <Route path=":courseid" element={<CourseId/>}/>
        </Route>
        <Route path="bundles" element={<Bundles/>}/>
      </Route>
      <Route path='/dashboard' element={<DashBoard/>}/>
    </Routes>
  </Router>
);

function Home(){
return(
  <div>
    <h1>Home Route</h1>
  </div>
);
}

function Learn(){
  return(
    <div>
      <h1>Learn</h1>
      <h4>All Courses are listed here</h4>
      <Link className='btn btn-success' to="/learn/courses">Courses</Link>
      <Link className='btn btn-primary' to="/learn/bundles">Bundles</Link>
      <Outlet/>
    </div>
  )
}

function Courses(){
  const courseList=["Angular","Node","CPP","React"]
  const RandomCourseName= courseList[Math.floor(Math.random()* courseList.length)]
  return(
    <div>
      <h1>Course List</h1>
      <h4>Course Card</h4>
      <NavLink 
      style={({isActive})=>{
        return{
          backgroundColor: isActive? "pink":"yellow"
        }
      }}
       to={`/learn/courses/${RandomCourseName}`}>{RandomCourseName}</NavLink>
      <NavLink className="btn btn-light" to={`/learn/courses/test`}>test</NavLink>
      <Outlet/>
    </div>
  )
}

function CourseId()
{
  const navigate=useNavigate();
  const {courseid}=useParams();
  return(
    <div>
      <h1>URL Params is: {courseid}</h1>
      <button 
      onClick={()=>{
        navigate("/dashboard",{state:courseid})
      }}
      className='btn btn-warning'>Click</button>
      <Link to="/dashboard" state="DJANGO">Django</Link>
    </div>
  )
}

function Bundles(){
  return(
    <div>
      <h1>Bundles List</h1>
      <h4>Bundles Card</h4>
    </div>
  )
}

function DashBoard(){
  const location=useLocation();
  return(
    <div>
      <h1>Info got is:{location.state}</h1>
    </div>
  )
}
reportWebVitals();
