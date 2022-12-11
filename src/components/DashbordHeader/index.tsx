import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase";
import Divider from "../Divider";
import Dropdown from "../Dropdown";
import DropdownItem from "../DropdownItem";
import ProfileThumb from "../ProfileThumb";
import * as C from "./styles";
import { toast } from 'react-toastify';

export default function DashboardHeader() {

  const logOut = ()=>{
    signOut(auth).then(()=>{
      localStorage.removeItem('user')
      toast.success('Usuário desconectado!')
    })
    
  }

  return (
    <C.Container>
      <C.Wrapper direction="column">
        <C.WelcomeTitle>Olá, Administrador</C.WelcomeTitle>
        <C.WelcomeBody>Bem-vindo ao dashboard</C.WelcomeBody>
      </C.Wrapper>
      <C.Wrapper direction="row">
        <ProfileThumb photoUrl="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" />
        <Dropdown title="Administrador">
          <DropdownItem title="Sair" onClick={logOut}/>
        </Dropdown>
      </C.Wrapper>
    </C.Container>
  );
}
