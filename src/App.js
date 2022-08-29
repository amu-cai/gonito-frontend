import {ThemeProvider} from 'styled-components';
import theme from './utils/theme';
import LandingPage from './pages/LandingPage';
import Challenges from './pages/Challanges/Challenges';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/elements/NavBar';
import Footer from './components/sections/Footer';
import {CHALLENGE_PAGE, CHALLENGES_PAGE} from './utils/globals';
import Challenge from './pages/Challenge';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import LoginWithEmail from './pages/auth/LoginWithEmail';
import RegisterWithEmail from './pages/auth/RegisterWithEmail';
import KeyCloakService from './services/KeyCloakService';

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <NavBar/>
                <Routes>
                    <Route path='/register-email' element={<RegisterWithEmail/>}/>
                    <Route path='/login-email' element={<LoginWithEmail/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path={`${CHALLENGE_PAGE}/:challengeId`} element={<Challenge/>}/>
                    <Route path={CHALLENGES_PAGE} element={<Challenges/>}/>

                    {
                        KeyCloakService.isLoggedIn() ? <>
                            <Route exact path='/' element={<Challenges/>}/>
                            <Route element={<Challenges/>}/>
                        </> : <>
                            <Route exact path='/' element={<LandingPage/>}/>
                            <Route element={<LandingPage/>}/>
                        </>
                    }
                </Routes>
                <Footer/>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
