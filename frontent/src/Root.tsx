import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { useSelector } from 'react-redux';
import { selectTheme, selectLangage } from './redux/selectors/settings';
import Routes from './routes';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import { IntlProvider } from 'react-intl';
import { messages } from './locales/messages';

const Root: React.FC = () => {
  const themeSelected = useSelector(selectTheme);
  const localeSelected = useSelector(selectLangage);

  let theme = React.useMemo(
    () =>
      responsiveFontSizes(
        createMuiTheme({
          palette: {
            secondary: {
              main: themeSelected === 'light' ? '#f44336' : '#ba000d',
            },
            primary: {
              main: themeSelected === 'light' ? '#1976d2' : '#004ba0',
            },
            type: themeSelected,
          },
        }),
      ),
    [themeSelected],
  );

  return (
    <IntlProvider locale={localeSelected} messages={messages[localeSelected]}>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <Routes />
      </ThemeProvider>
    </IntlProvider>
  );
};

export default Root;
