import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProfilePage from './ProfileDetailsPage/ProfileDetailsPage';
import SavedAddressPage from './SavedAddressPage/SavedAddressPage';
import MyOrderPage from './MyOrderPage/MyOrderPage';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MyProfilePage() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>

<Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs variant='fullWidth' value={value} onChange={handleChange} aria-label="Profile Tabs" >
          <Tab wrapped label="My Profile" {...a11yProps(0)} />
          <Tab wrapped label="Saved Addresses" {...a11yProps(1)} />
          <Tab wrapped label="My Orders" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ProfilePage/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SavedAddressPage/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <MyOrderPage/>
      </CustomTabPanel>
    </Box>
    </div>

  );
}
