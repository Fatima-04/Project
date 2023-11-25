import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import MainRouter from '../MainRouter';
import theme from '../theme';
import account from '../core/Account'

//import { hot } from 'react-hot-loader'

const App = () => {

  React.useEffect(() => {
    
    // Clean up server-side injected JSS styles
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  function App() {
    return (
      <Router>
        <Switch>
          {/* Other routes */}
          <Route path="/account-settings" component={AccountSettings} />
        </Switch>
      </Router>
    );
  }
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </Router>
  );
};

export default App;
