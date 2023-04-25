import { Box } from "@mui/material";
import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { BsHeart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiShoppingBag } from "react-icons/bi";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import TemporaryDrawer from "./drawerNavbar";
import LoginUser from "./LoginUser";
const Search = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  WebkitBorderTopLeftRadius: "10px",
  WebkitBorderTopRightRadius: "10px",
  WebkitBorderBottomLeftRadius: "10px",
  WebkitBorderBottomRightRadius: "10px",
  height: "32px",
  width: "100%",
  border: "1px solid #7575759f",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: "#6f6f6f",
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& input::placeholder": {
    fontSize: "13px",
  },
  "& input": {
    fontSize: "13px",
  },
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
      fontFamily: "Poppins",
    },
  },
}));
type propList = {
  name: string;
  address: string;
};
const Navbar = () => {
  const [flag, setFlag] = useState(false);
  const [flagDrawer, setFlagDrawer] = useState(false);

  const arrProduct = [
    {
      name: "Nuts",
      product: [
        { name: "Raw Nuts", address: "/#" },
        { name: "Roasted Nuts", address: "/#" },
        { name: "Almonds", address: "/#" },
        { name: "Cashews", address: "/#" },
        { name: "Pistachios", address: "/#" },
        { name: "Brazil Nuts", address: "/#" },
        { name: "Macadamia", address: "/#" },
        { name: "Pecans", address: "/#" },
        { name: "Peanuts", address: "/#" },
        { name: "Hazelnuts", address: "/#" },
      ],
    },
    {
      name: "DriedFruits",
      product: [
        { name: "Berries", address: "/#" },
        { name: "Slices", address: "/#" },
        { name: "Candies", address: "/#" },
        { name: "Cubes", address: "/#" },
      ],
    },
    {
      name: "Seeds",
      product: [
        { name: "Pumpkins", address: "/#" },
        { name: "SunFlower", address: "/#" },
      ],
    },
    {
      name: "In kitchen",
      product: [
        { name: "Safrons", address: "/#" },
        { name: "Cooking / Baking", address: "/#" },
        { name: "Tea", address: "/#" },
        { name: "Coffee", address: "/#" },
        { name: "Honey", address: "/#" },
        { name: "Dried Vegtables  ", address: "/#" },
        { name: "Butters", address: "/#" },
        { name: "Oils", address: "/#" },
      ],
    },
    {
      name: "Organics",
      product: [
        { name: "Nuts", address: "/#" },
        { name: "Dried Fruits", address: "/#" },
        { name: "Dried Fruits", address: "/#" },
        { name: "Spices", address: "/#" },
        { name: "Grains", address: "/#" },
        { name: "Beens", address: "/#" },
      ],
    },
    { name: "Mixes", product: [] },
    { name: "Boxes", product: [] },
  ];
  const [product, setProduct] = useState(arrProduct[0].product);
  console.log(product);
  const ShowList = (e: propList[]) => {
    setProduct(e);
  };
  return (
    <nav className="h-[52px] w-full flex justify-center items-center">
      <LoginUser flag={flagDrawer} closeflag={setFlagDrawer} />
      <Box className=" h-[100%] w-[85%] flex items-center border-b-[1px] border-[#D96B14] ">
        <Box className=" h-[28px] w-[28px] ml-2">
          <img src="/icons/Group.png" />
        </Box>
        <Box
          className="ml-24 h-[30px] items-center flex "
          sx={{ fontFamily: "Inter" }}
        >
          <ul className="flex gap-7 font-medium text-base text-[#757575] transition-all duration-500">
            <li className="headerNavbar">Home</li>
            <li
              onMouseEnter={() => setFlag(true)}
              onMouseLeave={() => setFlag(false)}
            >
              <p
                className={`${
                  flag ? "text-[#D96B14] duration-500 cursor-pointer" : null
                }`}
              >
                Product{" "}
                {flag ? (
                  <KeyboardArrowDownOutlinedIcon />
                ) : (
                  <KeyboardArrowUpOutlinedIcon />
                )}
              </p>

              {flag && (
                <>
                  <Box
                    className={
                      "fixed h-[450px] w-[85%] z-[100]  translate-x-[-16.1%]"
                    }
                  >
                    <Box
                      className={
                        "fixed ml-[225px] bg-[#FFFFFF] h-5 w-5 rotate-45 z-[60] border-t-[0.01px] border-l-[0.01px] border-orange-100"
                      }
                    ></Box>
                    <Box
                      className={
                        "relative  bg-[url('/img/BackgroundP.png')] bg-cover bg-no-repeat shadow shadow-orange-200 w-[100%] rounded-[30px] h-[81%] mt-[10px] z-[50] flex p-0 m-0 "
                      }
                    >
                      <Box
                        className={
                          "w-[18.7%]  h-[85%] border-r-black border-r-[1px] p-2 mt-7"
                        }
                      >
                        <ul
                          style={{ fontFamily: "Poppins", marginLeft: "45px" }}
                          className={"flex flex-col gap-5"}
                        >
                          {arrProduct.map((e) => {
                            return (
                              <li
                                key={e.name}
                                onMouseOver={() => ShowList(e.product)}
                                className="ProductLi "
                              >
                                {e.name}
                              </li>
                            );
                          })}
                        </ul>
                      </Box>
                      <Box className={"w-[23.7%]  h-[85%]  p-2 mt-7"}>
                        <ul
                          style={{ fontFamily: "Poppins", marginLeft: "45px" }}
                          className={"flex flex-col gap-1"}
                        >
                          {product.map((item) => {
                            return (
                              <li className="text-[14px] duration-500 transition-all headerNavbar">
                                {item.name}
                              </li>
                            );
                          })}
                        </ul>
                      </Box>
                    </Box>
                  </Box>
                </>
              )}
            </li>
            <li className="headerNavbar ">Blog</li>
            <li className="headerNavbar ">FAQ</li>
            <li className="headerNavbar">About Us</li>
            <li className="headerNavbar">Contact Us</li>
          </ul>
        </Box>
        <Box className={"flex items-center gap-8 ml-auto"}>
          <Search>
            <SearchIconWrapper>
              <img src="/icons/search-normal.png" height={23} width={23} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <BsHeart className="text-[23px] headerNavbar text-[#757575]" />
          <CgProfile className="text-[23px] headerNavbar text-[#757575]" />
          <BiShoppingBag
            onClick={() => setFlagDrawer(!flagDrawer)}
            className="text-[23px]  headerNavbar text-[#757575]"
          />
        </Box>
      </Box>
    </nav>
  );
};

export default Navbar;
