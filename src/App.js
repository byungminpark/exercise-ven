import './App.css';

import AppHeader from './common/components/AppHeader';
import AppFooter from './common/components/AppFooter';
import AppChat from './common/components/AppChat';

// import Home from './pages/Home/Home';
// import Reservation from './pages/Reservation/Reservation';
// import Introduction from './pages/Introduction/Introduction';

const App = () => {
  return (
    <div className="App">
      <AppHeader />

      <AppChat />

      {/* <Home /> */}
      {/* <Reservation /> */}
      {/* <Introduction /> */}

      <div style={{backgroundColor: 'green'}}>
        ~Template~
      </div>

      <AppFooter />

    </div>
  )
};

export default App;
