import React from 'react';
import clsx from 'clsx';
import { Switch, FormControlLabel } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../redux/actions/settings';
import { selectTheme } from '../../redux/selectors/settings';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import Brightness3RoundedIcon from '@material-ui/icons/Brightness3Rounded';
import { yellow, blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    switchBase: {
      color: theme.palette.primary.main,
      '&$checked': {
        color: theme.palette.primary.main,
      },
      '&$checked + $track': {
        backgroundColor: theme.palette.primary.main,
      },
    },
    checked: {},
    track: {},
    flex: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    sun: {
      color: yellow[400],
    },
    moon: {
      color: blueGrey[400],
    },
    root: {
      padding: theme.spacing(0, 1, 0, 1),
    },
  }),
);

const ThemeSlider: React.FC = () => {
  const classes = useStyles();

  const theme = useSelector(selectTheme);
  const [checked, setChecked] = React.useState(theme === 'dark');

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setChecked(checked);
    dispatch(changeTheme(checked ? 'dark' : 'light'));
  };

  return (
    <FormControlLabel
      value="bottom"
      control={
        <Switch
          checked={checked}
          onChange={handleChange}
          className={classes.switchBase}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      }
      label={
        checked ? (
          <span className={clsx(classes.flex, classes.moon)}>
            <Brightness3RoundedIcon color="inherit" /> Dark
          </span>
        ) : (
          <span className={clsx(classes.flex, classes.sun)}>
            <WbSunnyRoundedIcon color="inherit" /> Light
          </span>
        )
      }
      labelPlacement="bottom"
    />
  );
};

export default ThemeSlider;
