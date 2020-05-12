import React, { Fragment } from 'react';
import clsx from 'clsx';
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Button,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  AccountCircle,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  MoreVert as MoreIcon,
  HomeRounded,
  ChevronLeft,
} from '@material-ui/icons';
import { useStyles } from '../../../assets/styles/TopBar.style';
import { selectStatusOfUser } from '../../../redux/selectors/users';
import { useSelector } from 'react-redux';
import ThemeSlider from '../ThemeSlider';
import LangageSelect from '../LangageSelect';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';
import { useIntl } from 'react-intl';

const MenuList = [
  {
    label: 'Home',
    pathname: '/',
    icon: <HomeRounded />,
  },
];

export default function DefaultTopBar() {
  //#region Constants
  const classes = useStyles();
  const location = useLocation();
  const intl = useIntl();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  //#endregion

  //#region Redux Selector

  const isAuthenticated = useSelector(selectStatusOfUser);

  //#endregion

  //#region Handler

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  //#endregion

  //#region SubComponent
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const renderMenuDrawer = (
    <SwipeableDrawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
      <div className={classes.drawerHeader} id="menu-drawer">
        <Link to="/" className={classes.iconBtn}>
          <img src={logo} alt="" width={40} />
          <span className={classes.tagline}>Readable Application</span>
        </Link>
        <IconButton onClick={toggleDrawer(false)} color="inherit">
          <ChevronLeft color="inherit" />
        </IconButton>
      </div>
      <Divider />
      <div
        className={clsx(classes.list)}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {MenuList.map((menu) => (
            <ListItem
              component={Link}
              to={{ pathname: menu.pathname, search: location.search }}
              key={menu.label}
              button
              selected={location.pathname === menu.pathname}
            >
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.label} />
            </ListItem>
          ))}
        </List>
      </div>
    </SwipeableDrawer>
  );
  //#endregion

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          {renderMenuDrawer}
          <Typography className={classes.title} variant="h6" noWrap>
            Readable
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={`${intl.formatMessage({ id: 'topbar.searchText' })}...`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <Divider orientation="vertical" flexItem className={classes.divider} />
          <LangageSelect />
          <Divider orientation="vertical" flexItem className={classes.divider} />
          <ThemeSlider />
          <Divider orientation="vertical" flexItem className={classes.divider} />
          {isAuthenticated ? (
            <Fragment>
              <div className={classes.sectionDesktop}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton aria-label="show 17 new notifications" color="inherit">
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Fragment>
          ) : (
            <Button color="inherit">{intl.formatMessage({ id: 'topbar.loginText' })}</Button>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Fragment>
  );
}
