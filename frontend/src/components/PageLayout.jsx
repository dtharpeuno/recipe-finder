import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import Header from '../components/Header'

const PageLayout = ({ children, title }) => {
  
  return (
    <Box display='flex'>
      <Header />
      <Box
        sx={{
          maxWidth: 800,
          minWidth: 800,
          backgroundColor: '#fff',
          margin: '7rem auto',
          borderRadius: 2,
          border: '1px solid #d3d3d3',
          display: "flex",
          flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'column'
          },
          boxShadow: 2,
          position: 'relative',
          paddingTop: 1,
          paddingBottom: 4
        }}
      >
        {children}
      </Box>

    </Box>
  );
}

export default PageLayout