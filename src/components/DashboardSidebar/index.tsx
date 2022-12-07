import React from "react";
import * as C from "./styles";
import { CiBoxes } from "react-icons/ci";
import { TbNewSection } from "react-icons/tb";
import { BiTask, BiHomeAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function DashboardSidebar() {
  const [active, setActive] = React.useState<boolean>(false);
  const navigate = useNavigate()
  const path = useLocation()
  const handleHamburguerClick = () => {
    setActive(!active);
  };

  return (
    <>
      <C.Gap active={active} />
      <C.Container active={active}>
        <C.Hamburguer
          onClick={handleHamburguerClick}
          style={{ transform: active ? "rotate(90deg)" : "rotate(0deg)" }}
        />
        <C.SidebarItem path={path.pathname} slug='/dashboard/' onClick={()=>navigate('/dashboard/')} active={active}>
          <C.IconWrapper>
            <BiHomeAlt/>
          </C.IconWrapper>
          <C.SidebarItemText>Home</C.SidebarItemText>
        </C.SidebarItem>
        <C.SidebarItem path={path.pathname} slug='/dashboard/stock' onClick={()=>navigate('/dashboard/stock')} active={active}>
          <C.IconWrapper>
            <CiBoxes />
          </C.IconWrapper>
          <C.SidebarItemText>Estoque</C.SidebarItemText>
        </C.SidebarItem>
        <C.SidebarItem path={path.pathname} slug='/dashboard/add-product' onClick={()=>navigate('/dashboard/add-product')} active={active}>
          <C.IconWrapper>
            <TbNewSection />
          </C.IconWrapper>
          <C.SidebarItemText>Adicionar produto</C.SidebarItemText>
        </C.SidebarItem>
        <C.SidebarItem path={path.pathname} slug='/dashboard/orders' onClick={()=>navigate('/dashboard/orders')} active={active}>
          <C.IconWrapper>
            <BiTask />
          </C.IconWrapper>
          <C.SidebarItemText>Pedidos</C.SidebarItemText>
        </C.SidebarItem>
      </C.Container>
    </>
  );
}
