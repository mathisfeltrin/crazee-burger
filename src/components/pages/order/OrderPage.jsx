import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import OrderContext from "../../../context/OrderContext";

export default function OrderPage() {
  // state
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");

  // comportements

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    isEditSelected,
    setIsEditSelected,
    isAddSelected,
    setIsAddSelected,
    currentTabSelected,
    setCurrentTabSelected,
  };

  // affichage
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
