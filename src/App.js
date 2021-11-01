import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import BookingHistory from './components/BookingHistory/BookingHistory';
import BookingNow from './components/BookingNow/BookingNow';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import PageNotFount from './components/PageNotFount/PageNotFount';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Servicess from './components/Servicess/Servicess';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Servicess></Servicess>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <PrivateRoute path="/bookingnow/:serviceId">
              <BookingNow></BookingNow>
            </PrivateRoute>
            <PrivateRoute path="/bookinghistory">
              <BookingHistory></BookingHistory>
            </PrivateRoute>
            <Route exact path="*">
              <PageNotFount></PageNotFount>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
