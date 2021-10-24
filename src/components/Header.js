import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector } from "react-redux";
import { carSelector } from "../features/car/carSlice";

const Header = () => {


  const [show, setShow] = useState(false);

  const cars = useSelector(carSelector)
  console.log(cars)

  const carsModelMenu = () => {
    return cars && cars.map((car, index) => (
      <a href="#d" key={index}>{car}</a>
    ))
  }

  return (
    <Container>
      <a href="#d">
        <img src="/images/logo.svg" alt="tesla logo" />
      </a>
      <Menu>
        {carsModelMenu()}
      </Menu>
      <RightMenu>
        <a href="#d">Shop</a>
        <a href="#d" className="pad">
          Tesla
        </a>
        <a href="#d">Account</a>
        <CustonMenu onClick={() => setShow(true)} />
      </RightMenu>

      <BurgerNav showUp={show}>
        <CustomClose onClick={() => setShow(false)} />
        {carsModelMenu().map((carsModel,index) => <li key={index}>
            {carsModel}
        </li>)}
        <li>
          <a href="#d">Existing Inventory</a>     
        </li>
        <li>
          <a href="#d">Used Inventory</a>
        </li>
        <li>
          <a href="#d">Trade-in</a>
        </li>
        <li>
          <a href="#d">Roadaster</a>
        </li>
        <li>
          <a href="#d">Cybertruck</a>
        </li>
        <li>
          <a href="#d">Legacy Fully</a>
        </li>
        <li>
          <a href="#d">Tools & Tech</a>
        </li>
        <li>
          <a href="#d">Use Auth</a>
        </li>
        <li>
          <a href="#d">Account</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding: 20px 3%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;

  a {
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    padding: 0 12px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
  }
`;
const CustonMenu = styled(MenuIcon)`
  cursor: pointer;
  font-weight: bolder;
  margin-left: 15px;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  max-width: 300px;
  width: 100%;
  z-index: 1000000;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) =>
    props.showUp ? "translateX(0)" : "translateX(100%)"};
  transition: 250ms ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: bolder;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  margin-left: auto;
  cursor: pointer;
`;
