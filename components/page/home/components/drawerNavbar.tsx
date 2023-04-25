import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Progress } from "@material-tailwind/react";
import { Button } from "@mui/material";
type Prop = {
  flag: boolean;
  closeflag: React.Dispatch<React.SetStateAction<any>>;
};
export default function TemporaryDrawer({ flag, closeflag }: Prop) {
  const list = () => (
    <>
      <Box className={"h-[100vh] w-[522px] bg-white"}>
        <Box
          onClick={() => closeflag(!flag)}
          className={
            "h-[52px] w-[522px] bg-white border-b-black border-b-[1px] flex items-center cursor-pointer gap-3"
          }
        >
          <Box className={"flex items-center gap-3 ml-4"}>
            <ArrowForwardIosOutlinedIcon
              className="headerNavbar "
              sx={{ fontSize: "18px", transition: "0.5s" }}
            />
            Continue shopping
          </Box>
        </Box>
        <Box
          className={
            "flex items-center gap-3 border-b-[1px] border-black h-[170px] flex-wrap justify-center"
          }
        >
          <Box className={"w-full h-12 flex flex-wrap justify-center mt-5 "}>
            <Progress
              className="rounded-[100px] w-[485px] bg-[#7575754d]"
              color={"orange"}
              value={1}
              label="Completed"
            />
            <label className="block">0% Completed</label>
          </Box>

          <Box className={"h-6 w-[60%] rounded-[100px] bg-blue-gray-50"}></Box>
        </Box>
        <Box
          sx={{ fontFamily: "Poppins" }}
          className={
            "w-[80%] ml-[10%] mt-[220px] gap-11  h-[200px] flex flex-col items-center "
          }
        >
          <p className="text-[20px] font-[400]">Your Basket is Empty</p>
          <p className="text-[24px] font-[800]">
            You Have no Item in your Card
          </p>
          <Button
            sx={{
              backgroundColor: "#D96B14",
              "&:hover": { backgroundColor: "#D96B14" },
            }}
            variant="contained"
          >
            Shop Now
          </Button>
        </Box>
      </Box>
    </>
  );
  return (
    <div>
      <Drawer anchor={"right"} open={flag} onClose={() => closeflag(!flag)}>
        {list()}
      </Drawer>
    </div>
  );
}
