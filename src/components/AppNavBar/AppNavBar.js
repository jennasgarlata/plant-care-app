import {useState} from 'react'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import FormDialogBox from './FormDialogBox';


export default function AppNavBar({setSelectedPage}) {

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [formSelected, setFormSelected] = useState("");

  const isMenuOpen = Boolean(anchorEl);
  const menuId = 'primary-search-account-menu';

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAppBarMenuClose = (event) => {
    setSelectedPage(event.target.innerText);
    setAnchorEl(null);
  };

  const handleCloseForm = () => {
    setOpen(false);
    setAnchorEl(null);

  }
  const handleOpenForm = (type) => {
    setFormSelected(type)
    setOpen(true);
  };

  const renderDialogBox = open === true ? <FormDialogBox type={formSelected} open={open} handleCloseForm={handleCloseForm} setSelectedPage={setSelectedPage}/> : null;

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'}}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'}}
      open={isMenuOpen}
      onClose={handleAppBarMenuClose}>
      <MenuItem onClick={(e) => handleOpenForm("login")}>Log in / Sign up</MenuItem>
      {/* <MenuItem onClick={(e) => handleOpenForm("signUp")}>Sign Up</MenuItem> */}
      {renderDialogBox}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar  sx={{bgcolor:"#014421"}}position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }} >
            PlantCast
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit" >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit">
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
