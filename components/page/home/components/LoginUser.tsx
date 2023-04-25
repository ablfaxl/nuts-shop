import { Input } from '@mui/icons-material';
import { Box, Button, Stack, styled, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { width } from '@mui/system';
import React from 'react'
import Drawer from "@mui/material/Drawer";
 
type Prop = {
  flag: boolean;
  closeflag: React.Dispatch<React.SetStateAction<any>>;
};

const BootstrapButton = styled(Button)({
  backgroundColor: '#D96B14',
  marginTop: "20px",
  borderRadius: "8px",
  padding: "10px",
  fontFamily: "Inter",
  textTransform:"capitalize",
  '&:hover': {
    backgroundColor: "#d96914c7",
  },
  '&:focus': {
    // backgroundColor:"",
  },
})
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#505050",
  },
  "& label": {
    color: "#505050",
  },
  "& text": {
    color: "#505050",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#505050",
    },
    "&:hover fieldset": {
      borderColor: "#505050",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#505050",
    },
  },
})
const LoginUser = ({ flag, closeflag }: Prop) => {

  
  return (
    <>
     <Box  className={`h-[100vh]  bg-white `}>
      <Box sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        backgroundImage: 'url(/img/LoginPage.png)',
        backgroundRepeat: 'no-repeat'
      }}>
        <Box className='absolute w-[30%] left-[calc(50vw-15%)] top-[calc(50vh-30%)] flex flex-col '>
          <Typography variant="h3" fontWeight={700} sx={{textAlign:"center" , fontFamily:'Inter'}}>
            Log in
          </Typography>
          <Box className="h-32">
            <Stack className='hidden'>
              {/* payamak taeed */}
            </Stack>
          </Box>
          <CssTextField
          id="outlined-number"
          label="Phone Number?"
          type="text"
          size="small"
          InputLabelProps={{
            shrink: true,
            }}
          // sx={{
          //   marginTop:'120px'
          // }}
          />
          <BootstrapButton variant="contained" disableRipple>Send a Code</BootstrapButton>
        </Box>
      </Box>
      </Box>

    </>
  )
}

export default LoginUser;