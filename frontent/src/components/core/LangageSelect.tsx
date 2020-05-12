import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Typography, Menu, MenuItem } from '@material-ui/core';
import { Translate as TranslateIcon, ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { selectLangage } from '../../redux/selectors/settings';
import { changeLangage } from '../../redux/actions/settings';

interface ILanguageArgs {
  key: string;
  label: string;
}

interface ILanguage {
  [key: string]: ILanguageArgs;
}
const languages: ILanguage = {
  en: {
    key: 'en',
    label: 'English',
  },
  fr: {
    key: 'fr',
    label: 'Français',
  },
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      color: '#FFF',
    },
    language: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
        margin: theme.spacing(0, 1, 0, 1),
      },
    },
  }),
);

const LangageSelect: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const selectedLang: string = useSelector(selectLangage);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(selectedLang);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (_: React.MouseEvent<HTMLElement>, index: string) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    dispatch(changeLangage(index));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = () => {
    return (
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {Object.keys(languages).map((key: string) => (
          <MenuItem key={key} selected={key === selectedIndex} onClick={(event) => handleMenuItemClick(event, key)}>
            {languages[key].label}
          </MenuItem>
        ))}
      </Menu>
    );
  };

  return (
    <React.Fragment>
      <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.root} onClick={handleClick}>
        <TranslateIcon />
        <Typography className={classes.language} variant="body2">
          {languages[selectedIndex].label}
        </Typography>
        <ExpandMoreIcon />
      </Button>
      {renderMenu()}
    </React.Fragment>
  );
};

export default LangageSelect;
