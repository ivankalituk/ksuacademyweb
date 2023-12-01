import './App.scss';

import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import MainPage from './pages/mainPage/mainPage';
import CoursePage from '../src/pages/coursePage/coursePage'
import ProfilePage from './pages/profilePage/profilePage';
import RegistrationPage from './pages/registrationPage/registrationPage';
import ThemePage from './pages/themePage/themePage';
import SubjectDevelopmentPage from './pages/subjectDvelopmentPage/subjectDevelopmentPage';
import ThemeDevelopmentPage from './pages/themeDevelopmentPage/themeDevelopmentPage';

function App() {
  return (
    <div className="App">
      <Header></Header>

        <div className="pageContent">
          <Routes>
            <Route path='/' Component={MainPage} />
            <Route path='/сourse/:id' Component={CoursePage} />
            <Route path='/profile' Component={ProfilePage} />
            <Route path='/registration' Component={RegistrationPage} />
            <Route path='/course/:id/theme/:idr' Component={ThemePage}/>
            <Route path='/SubjectDevelopment' Component={SubjectDevelopmentPage} />
            <Route path='/SubjectDevelopment/:ids/ThemeDevelopment/:idt' Component={ThemeDevelopmentPage} />
          </Routes>
        </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
