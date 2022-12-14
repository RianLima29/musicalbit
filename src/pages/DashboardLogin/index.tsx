import React from "react";
import * as C from "./styles";
import { Button, TextField } from "@mui/material";
import { spacing } from "../../config";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginWithCredentials, User } from "../../types/login";
import { auth } from "../../firebase/index";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { useGetUserRoleMutation } from "../../redux/api/apiSlice";
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  email: yup
    .string()
    .required("O e-mail precisa ser preenchido")
    .email("Precisa ser um email válido"),
  password: yup
    .string()
    .required("A senha precisa ser preenchida")
    .min(6, "O mínimo são 6 caracteres"),
});

export default function DashboardLogin() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginWithCredentials>({ resolver: yupResolver(schema) });
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [authError, setAuthError] = React.useState<boolean | undefined>(
    undefined
  );
  const [getUserRole] = useGetUserRoleMutation();
  const navigate = useNavigate()

  const onSubmit = (data: LoginWithCredentials) => {
    signInWithEmailAndPassword(data.email, data.password).then((user) => {
      if (user) {
        getUserRole(user.user.uid).then((data: any) => {
          if (data?.data === "admin") {
            let userData: User = { ...user, role: data.data };
            localStorage.setItem("user", JSON.stringify(userData));
            setAuthError(false);
            toast.success("Login efetuado!");
            document.location.reload()
          } else {
            toast.error("Credenciais inválidas!");
            setAuthError(true);
          }
        });
      } else {
        toast.error("Credenciais inválidas!");
        setAuthError(true);
      }
    });
  };
  const onError = (data: any) => {
    console.log(data);
  };

  return (
    <C.MainContainer>
      <C.LoginContainer>
        <C.LeftContainer>
          <C.LoginIllustration />
        </C.LeftContainer>
        <C.RightContainer>
          <C.LoginText>Faça seu login</C.LoginText>
          <C.LoginForm onSubmit={handleSubmit(onSubmit, onError)}>
            <C.Wrapper>
              <TextField
                {...register("email")}
                helperText={errors?.email?.message}
                error={!!errors?.password || !!authError}
                sx={{ marginTop: spacing(2)}}
                variant="outlined"
                label="E-mail"
              />
              <TextField
                {...register("password")}
                helperText={errors?.password?.message}
                error={!!errors?.password || !!authError}
                sx={{ marginTop: spacing(2) }}
                variant="outlined"
                label="Senha"
                type="password"
              />
            </C.Wrapper>
            <Button type="submit" variant="contained">
              Enviar
            </Button>
          </C.LoginForm>
        </C.RightContainer>
      </C.LoginContainer>
    </C.MainContainer>
  );
}
