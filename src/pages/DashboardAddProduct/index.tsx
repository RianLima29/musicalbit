import React from "react";
import DashboardPartial from "../../partials/DashboardPartial/DashboardPartial";
import * as C from "./styles";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AddProductForm } from "../../types/productForm";
import { useUploadFile } from "react-firebase-hooks/storage";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../../firebase";
import { useAddProductMutation } from "../../redux/api/apiSlice";
import { useNavigate } from "react-router-dom";
import { spacing } from "../../config";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";
import { registerVersion } from "firebase/app";

const stepTwoSchema = yup.object().shape({
  price: yup
    .string()
    .required("O produto precisa de um preço")
    .matches(/[\d+][\.]*[\d+]*,[\d+]/, {
      message: "Exemplo: 99,99 ou 99.99,99",
    }),
  description: yup.string().required("O produto precisa de uma descrição"),
  inStock: yup
    .number()
    .typeError("Informe um número")
    .required("É preciso informar quantos produtos há em estoque"),
  weight: yup
    .number()
    .typeError("Informe um número")
    .required("É preciso informar o peso"),
  height: yup
    .number()
    .typeError("Informe um número")
    .required("É preciso informar a altura"),
  width: yup
    .number()
    .typeError("Informe um número")
    .required("É preciso informar a largura"),
  depth: yup
    .number()
    .typeError("Informe um número")
    .required("É preciso informar a profundidade"),
  categories: yup
    .string()
    .required("É preciso informar ao menos uma categoria"),
});

const stepOneSchema = yup.object().shape({
  secondaryPhotos: yup
    .mixed()
    .test("required", "You need to provide a file", (files) => {
      if (files.length > 0) return true;
      return false;
    }),
  mainPhoto: yup
    .mixed()
    .test("required", "You need to provide a file", (files) => {
      if (files.length > 0) return true;
      return false;
    }),
  name: yup.string().required("O produto precisa de um nome"),
});
export default function DashboardAddProduct() {
  const mainPhotoRef =
    React.useRef() as React.MutableRefObject<HTMLParagraphElement>;
  const secondaryPhotosRef =
    React.useRef() as React.MutableRefObject<HTMLParagraphElement>;
  const navigate = useNavigate();
  const [productName, setProductName] = React.useState<string>("");
  const [addProduct] = useAddProductMutation();
  const [uploadFile] = useUploadFile();
  const [currentStep, setCurrentStep] = React.useState<1 | 2>(1);
  const {
    handleSubmit: stepTwoHandleSubmit,
    register: stepTwoRegister,
    formState: { errors: stepTwoErrors },
  } = useForm<AddProductForm>({
    resolver: yupResolver(stepTwoSchema),
  });
  const {
    handleSubmit: stepOneHandleSubmit,
    register: stepOneRegister,
    formState: { errors: stepOneErrors },
  } = useForm<AddProductForm>({
    resolver: yupResolver(stepOneSchema),
  });
  const [secondaryPhotoUrls, setSecondaryPhotoUrls] = React.useState<string[]>(
    []
  );
  const [MainPhotoUrl, setMainPhotoUrl] = React.useState<string>("");
  const canShowSecondStep =
    currentStep == 2 && MainPhotoUrl && secondaryPhotoUrls;
  const uploadSecondaryPhoto = async (file: File | null) => {
    if (file) {
      await uploadFile(
        ref(storage, `products/${productName}/secondaryPhotos/${file.name}`),
        file,
        {
          contentType: "image/*",
        }
      );
    }
  };
  const uploadMainPhoto = async (file: File | null) => {
    if (file) {
      await uploadFile(
        ref(storage, `products/${productName}/MainPhoto/${file.name}`),
        file,
        {
          contentType: "image/*",
        }
      );
    }
  };

  const handleSecondaryPhotosChange = async (files: FileList) => {
    for (let i = 0; i < files.length; i++) {
      uploadSecondaryPhoto(files.item(i)).then((value) => {
        listAll(ref(storage, `products/${productName}/secondaryPhotos/`)).then(
          async (res) => {
            const { items } = res;
            const urls = await Promise.all(
              items.map((item) => getDownloadURL(item))
            );
            console.log(urls);
            setSecondaryPhotoUrls([]);
            setSecondaryPhotoUrls(urls);
          }
        );
      });
    }
  };
  const handleMainPhotoChange = async (files: FileList) => {
    uploadMainPhoto(files.item(0)).then((value) => {
      listAll(ref(storage, `products/${productName}/MainPhoto/`)).then(
        async (res) => {
          const { items } = res;
          const urls = await Promise.all(
            items.map((item) => getDownloadURL(item))
          );
          setMainPhotoUrl("");
          console.log(urls);
          setMainPhotoUrl(urls[0]);
        }
      );
    });
  };

  const stepTwoOnSubmit = (data: AddProductForm) => {
    addProduct({
      name: productName,
      categories: data.categories,
      depth: data.depth,
      width: data.width,
      height: data.height,
      weight: data.weight,
      description: data.description,
      inStock: data.inStock,
      price: data.price,
      mainPhoto: MainPhotoUrl,
      secondaryPhotos: secondaryPhotoUrls,
    }).then(() => {
      toast.success('Produto adicionado')
      navigate("/dashboard/stock");
    });
  };

  const stepTwoOnError = (a: any) => {
    console.log(a);
  };

  const stepOneOnSubmit = (data: AddProductForm) => {
    setProductName(data.name);
    handleMainPhotoChange(data.mainPhoto);
    handleSecondaryPhotosChange(data.secondaryPhotos);
    setCurrentStep(2);
  };
  const stepOneOnError = (data: any) => {
    console.log(stepOneErrors);
  };
  return (
    <DashboardPartial>
      <>
        {currentStep == 2 && !canShowSecondStep && <Loading />}
        {currentStep == 1 && (
          <C.FormContainer
            onSubmit={stepOneHandleSubmit(stepOneOnSubmit, stepOneOnError)}
          >
            <C.CurrentStepText>Etapa {currentStep} de 2</C.CurrentStepText>
            <TextField
              sx={{ margin: spacing(1), width: "100%" }}
              {...stepOneRegister("name", {
                onChange: (e: React.FormEvent<HTMLInputElement>) => {
                  setProductName(e.currentTarget.value);
                },
              })}
              error={!!stepOneErrors.name}
              helperText={stepOneErrors.name?.message}
              variant="outlined"
              label="Nome do produto"
            />
            <C.Wrapper>
              <C.FileSelectorWrapper error={!!stepOneErrors.mainPhoto}>
                <input
                  type="file"
                  accept="image/*"
                  {...stepOneRegister("mainPhoto", {
                    onChange: (e: React.FormEvent<HTMLInputElement>) => {
                      if (e.currentTarget.files) {
                        mainPhotoRef.current.innerHTML =
                          e.currentTarget.files?.length > 1
                            ? e.currentTarget.files?.length +
                              " arquivos selecionados"
                            : e.currentTarget.files?.length +
                              " arquivo selecionado";
                        if (e.currentTarget.files.length == 0) {
                          mainPhotoRef.current.innerHTML =
                            "Nenhum arquivo selecionado";
                        }
                      }
                    },
                  })}
                />
                <p ref={mainPhotoRef}>Foto principal</p>
              </C.FileSelectorWrapper>
              <C.FileSelectorWrapper error={!!stepOneErrors.secondaryPhotos}>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  {...stepOneRegister("secondaryPhotos", {
                    onChange: (e: React.FormEvent<HTMLInputElement>) => {
                      if (e.currentTarget.files) {
                        secondaryPhotosRef.current.innerHTML =
                          e.currentTarget.files?.length > 1
                            ? e.currentTarget.files?.length +
                              " arquivos selecionados"
                            : e.currentTarget.files?.length +
                              " arquivo selecionado";
                        if (e.currentTarget.files.length == 0) {
                          secondaryPhotosRef.current.innerHTML =
                            "Nenhum arquivo selecionado";
                        }
                      }
                    },
                  })}
                />
                <p ref={secondaryPhotosRef}>Fotos secundarias</p>
              </C.FileSelectorWrapper>
            </C.Wrapper>
            <C.ButtonWrapper>
              <Button variant="contained" type="submit">
                Enviar e seguir
              </Button>
            </C.ButtonWrapper>
          </C.FormContainer>
        )}
        {canShowSecondStep && (
          <C.FormContainer
            onSubmit={stepTwoHandleSubmit(stepTwoOnSubmit, stepTwoOnError)}
          >
            <C.CurrentStepText>Etapa {currentStep} de 2</C.CurrentStepText>
            <C.Wrapper>
            <FormControl sx={{width: '230px', margin: spacing(1)}}>
        <InputLabel id="cat-label">Categoria</InputLabel>
        <Select
          labelId="cat-label"
          label="Age"
          error={!!stepTwoErrors.categories}
          {...stepTwoRegister('categories')}
        >
          <MenuItem value="Violões">Violões</MenuItem>
          <MenuItem value="Guitarras">Guitarras</MenuItem>
          <MenuItem value="Percussão">Percussão</MenuItem>
        </Select>
        {stepTwoErrors.categories && <FormHelperText error={true}>{stepTwoErrors.categories.message}</FormHelperText>}
      </FormControl>

              <TextField
                sx={{ margin: spacing(1) }}
                {...stepTwoRegister("description")}
                variant="outlined"
                label="Descrição"
                error={!!stepTwoErrors.description}
                helperText={stepTwoErrors.description?.message}
              />
            </C.Wrapper>
            <C.Wrapper>
              <TextField
                sx={{ margin: spacing(1) }}
                {...stepTwoRegister("price")}
                inputProps={{ inputMode: "numeric" }}
                variant="outlined"
                label="Preço"
                error={!!stepTwoErrors.price}
                helperText={stepTwoErrors.price?.message}
              />
              <TextField
                sx={{ margin: spacing(1) }}
                {...stepTwoRegister("inStock")}
                inputProps={{ inputMode: "numeric" }}
                variant="outlined"
                label="Em estoque"
                error={!!stepTwoErrors.inStock}
                helperText={stepTwoErrors.inStock?.message}
              />
            </C.Wrapper>
            <C.Wrapper>
              <TextField
                sx={{ margin: spacing(1) }}
                {...stepTwoRegister("weight")}
                inputProps={{ inputMode: "numeric" }}
                variant="outlined"
                label="Peso (kg)"
                error={!!stepTwoErrors.weight}
                helperText={stepTwoErrors.weight?.message}
              />
              <TextField
                sx={{ margin: spacing(1) }}
                {...stepTwoRegister("height")}
                inputProps={{ inputMode: "numeric" }}
                variant="outlined"
                label="Altura (cm)"
                error={!!stepTwoErrors.height}
                helperText={stepTwoErrors.height?.message}
              />
            </C.Wrapper>
            <C.Wrapper>
              <TextField
                sx={{ margin: spacing(1) }}
                {...stepTwoRegister("width")}
                inputProps={{ inputMode: "numeric" }}
                variant="outlined"
                label="Largura (cm)"
                error={!!stepTwoErrors.width}
                helperText={stepTwoErrors.width?.message}
              />
              <TextField
                sx={{ margin: spacing(1) }}
                {...stepTwoRegister("depth")}
                inputProps={{ inputMode: "numeric" }}
                variant="outlined"
                label="Profundidade (cm)"
                error={!!stepTwoErrors.depth}
                helperText={stepTwoErrors.depth?.message}
              />
            </C.Wrapper>
            <C.ButtonWrapper>
              <Button variant="contained" type="submit">
                Enviar
              </Button>
            </C.ButtonWrapper>
          </C.FormContainer>
        )}
      </>
    </DashboardPartial>
  );
}
