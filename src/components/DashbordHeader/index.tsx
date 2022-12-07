import React from "react";
import Divider from "../Divider";
import Dropdown from "../Dropdown";
import DropdownItem from "../DropdownItem";
import ProfileThumb from "../ProfileThumb";
import * as C from "./styles";

export default function DashboardHeader() {
  return (
    <C.Container>
      <C.Wrapper direction="column">
        <C.WelcomeTitle>Olá, Pessoa</C.WelcomeTitle>
        <C.WelcomeBody>Bem-vindo ao dashboard</C.WelcomeBody>
      </C.Wrapper>
      <C.Wrapper direction="row">
        <ProfileThumb photoUrl="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" />
        <Dropdown title="Pessoa">
          <DropdownItem title="Sair" onClick={()=>alert('saiu')}/>
        </Dropdown>
      </C.Wrapper>
    </C.Container>
  );
}
