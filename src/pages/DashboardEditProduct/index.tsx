import React from "react";
import * as C from "./styles";
import DashboardPartial from "../../partials/DashboardPartial/DashboardPartial";
import { spacing } from "../../config";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  InputLabel,
  Select,
  FormHelperText,
  FormControl,
  MenuItem,
} from "@mui/material";
import { Product } from "../../types/product";
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../redux/api/apiSlice";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { AddProductForm } from "../../types/productForm";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { deleteObject, getDownloadURL, listAll } from "firebase/storage";
import { ref } from "firebase/storage";
import { storage } from "../../firebase";
import { UploadFile } from "@mui/icons-material";
import { useUploadFile } from "react-firebase-hooks/storage";
import { toast } from "react-toastify";

const schema = yup.object().shape({
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

export default function DashboardEditProduct() {
  const {
    watch,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AddProductForm>({
    resolver: yupResolver(schema),
  });
  const params = useParams();
  const mainPhotoRef =
    React.useRef() as React.MutableRefObject<HTMLParagraphElement>;
  const secondaryPhotosRef =
    React.useRef() as React.MutableRefObject<HTMLParagraphElement>;
  const [alterPhoto, setAlterPhoto] = React.useState<boolean>(false);
  const {
    data: apiData,
    isLoading,
    isError,
  } = useGetProductQuery(params.id as string);
  const canDisplayData = !!apiData && !isLoading && !isError;
  const [updateProduct] = useUpdateProductMutation();
  const [secondaryPhotoUrls, setSecondaryPhotoUrls] = React.useState<string[]>(
    []
  );
  const [mainPhotoUrl, setMainPhotoUrl] = React.useState<string>("");
  const [uploadFile] = useUploadFile();
  const [disabledButton, setDisabledButton] = React.useState<boolean>(false);
  const [disabledPhotosButton, setDisabledPhotosButton] =
    React.useState<boolean>(true);

  React.useEffect(() => {
    if (
      watch("secondaryPhotos")?.length > 0 &&
      watch("mainPhoto")?.length > 0
    ) {
      setDisabledPhotosButton(false);
    }
  }, [watch("secondaryPhotos"), watch("mainPhoto")]);

  React.useEffect(() => {
    if (disabledButton && secondaryPhotoUrls && mainPhotoUrl) {
      setDisabledButton(false);
      toast.dismiss();
    }
  }, [secondaryPhotoUrls, setSecondaryPhotoUrls]);

  React.useEffect(() => {
    if (alterPhoto) {
      setDisabledButton(true);
    }
  }, [alterPhoto]);

  const uploadSecondaryPhoto = async (file: File | null) => {
    if (file) {
      await uploadFile(
        ref(storage, `products/${apiData?.name}/secondaryPhotos/${file.name}`),
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
        ref(storage, `products/${apiData?.name}/MainPhoto/${file.name}`),
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
        listAll(
          ref(storage, `products/${apiData?.name}/secondaryPhotos/`)
        ).then(async (res) => {
          const { items } = res;
          const urls = await Promise.all(
            items.map((item) => getDownloadURL(item))
          );
          console.log(urls);
          setSecondaryPhotoUrls([]);
          setSecondaryPhotoUrls(urls);
        });
      });
    }
  };
  const handleMainPhotoChange = async (files: FileList) => {
    uploadMainPhoto(files.item(0)).then((value) => {
      listAll(ref(storage, `products/${apiData?.name}/MainPhoto/`)).then(
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

  const deleteSecondaryPhotos = async () => {
    listAll(ref(storage, `products/${apiData?.name}/secondaryPhotos/`)).then(
      async (res) => {
        const { items } = res;
        Promise.all(items.map((item) => deleteObject(item)));
      }
    );
  };
  const deleteMainPhotos = async () => {
    listAll(ref(storage, `products/${apiData?.name}/MainPhoto/`)).then(
      async (res) => {
        const { items } = res;
        Promise.all(items.map((item) => deleteObject(item)));
      }
    );
  };

  const sendPhotos = () => {
    let mainPhoto = watch("mainPhoto");
    let secondaryPhotos = watch("secondaryPhotos");
    if (secondaryPhotos.length > 0 && mainPhoto.length > 0) {
      toast.loading("Enviando fotos, aguarde para prosseguir");
      Promise.all([deleteMainPhotos(), deleteSecondaryPhotos()]).then(() => {
        handleMainPhotoChange(watch("mainPhoto"));
        handleSecondaryPhotosChange(watch("secondaryPhotos"));
      });
    }
  };

  const onSubmit = (data: AddProductForm) => {
    if (
      data.mainPhoto?.length > 0 ||
      (data.secondaryPhotos?.length > 0 && secondaryPhotoUrls && mainPhotoUrl)
    ) {
      updateProduct({
        name: data.name,
        categories: data.categories,
        depth: data.depth,
        width: data.width,
        height: data.height,
        weight: data.weight,
        description: data.description,
        inStock: data.inStock,
        price: data.price,
        mainPhoto: mainPhotoUrl,
        secondaryPhotos: secondaryPhotoUrls,
        path: apiData?.path,
      })
        .unwrap()
        .then(() => toast.success("Item alterado com sucesso!"));
      console.log("Sem foto");
    } else {
      updateProduct({
        name: data.name,
        categories: data.categories,
        depth: data.depth,
        width: data.width,
        height: data.height,
        weight: data.weight,
        description: data.description,
        inStock: data.inStock,
        price: data.price,
        mainPhoto: apiData?.mainPhoto,
        secondaryPhotos: apiData?.secondaryPhotos,
        path: apiData?.path,
      })
        .unwrap()
        .then(() => toast.success("Item alterado com sucesso!"));
      console.log("Sem foto");
    }
  };

  const onError = (data: any) => {
    console.log(data);
  };

  return (
    <DashboardPartial>
      <C.ContentContainer onSubmit={handleSubmit(onSubmit, onError)}>
        {isLoading && <Loading />}
        {canDisplayData && (
          <>
            <C.LeftSide>
              <TextField
                sx={{ margin: spacing(1) }}
                {...register("name")}
                variant="outlined"
                label="Nome do produto"
                error={!!errors.name}
                helperText={errors.name?.message}
                defaultValue={apiData.name}
              />
              <FormControl sx={{ margin: spacing(1) }}>
                <InputLabel id="cat-label">Categoria</InputLabel>
                <Select
                  labelId="cat-label"
                  label="Categoria"
                  error={!!errors.categories}
                  {...register("categories")}
                  defaultValue={apiData.categories}
                >
                  <MenuItem value="Violões">Violões</MenuItem>
                  <MenuItem value="Guitarras">Guitarras</MenuItem>
                  <MenuItem value="Percussão">Percussão</MenuItem>
                </Select>
                {errors.categories && (
                  <FormHelperText error={true}>
                    {errors.categories.message}
                  </FormHelperText>
                )}
              </FormControl>
              <TextField
                sx={{ margin: spacing(1) }}
                {...register("description")}
                variant="outlined"
                label="Descrição"
                error={!!errors.description}
                helperText={errors.description?.message}
                defaultValue={apiData.description}
              />
              <TextField
                sx={{ margin: spacing(1) }}
                {...register("price")}
                inputProps={{ inputMode: "numeric" }}
                variant="outlined"
                label="Preço"
                error={!!errors.price}
                helperText={errors.price?.message}
                defaultValue={apiData.price}
              />
              <TextField
                sx={{ margin: spacing(1) }}
                {...register("inStock")}
                inputProps={{ inputMode: "numeric" }}
                variant="outlined"
                label="Em estoque"
                error={!!errors.inStock}
                helperText={errors.inStock?.message}
                defaultValue={apiData.inStock}
              />

              <TextField
                sx={{ margin: spacing(1) }}
                {...register("weight")}
                inputProps={{ inputMode: "numeric" }}
                variant="outlined"
                label="Peso (kg)"
                error={!!errors.weight}
                helperText={errors.weight?.message}
                defaultValue={apiData.weight}
              />
              <TextField
                sx={{ margin: spacing(1) }}
                {...register("height")}
                inputProps={{ inputMode: "numeric" }}
                variant="outlined"
                label="Altura (cm)"
                error={!!errors.height}
                helperText={errors.height?.message}
                defaultValue={apiData.height}
              />

              <TextField
                sx={{ margin: spacing(1) }}
                {...register("width")}
                inputProps={{ inputMode: "numeric" }}
                variant="outlined"
                label="Largura (cm)"
                error={!!errors.width}
                helperText={errors.width?.message}
                defaultValue={apiData.width}
              />
              <TextField
                sx={{ margin: spacing(1) }}
                {...register("depth")}
                inputProps={{ inputMode: "numeric" }}
                variant="outlined"
                label="Profundidade (cm)"
                error={!!errors.depth}
                helperText={errors.depth?.message}
                defaultValue={apiData.depth}
              />
            </C.LeftSide>
            <C.RightSide>
              {!alterPhoto && (
                <Button onClick={() => setAlterPhoto(true)}>
                  Trocar fotos
                </Button>
              )}
              {alterPhoto && (
                <>
                  <C.FileSelectorWrapper error={!!errors.mainPhoto}>
                    <input
                      type="file"
                      accept="image/*"
                      {...register("mainPhoto", {
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
                  <C.FileSelectorWrapper error={!!errors.secondaryPhotos}>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      {...register("secondaryPhotos", {
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
                  <Button
                    disabled={disabledPhotosButton}
                    sx={{ margin: spacing(1) }}
                    onClick={() => sendPhotos()}
                    variant="contained"
                  >
                    Enviar fotos
                  </Button>
                </>
              )}
            </C.RightSide>

            <C.ButtonWrapper>
              <Button
                disabled={disabledButton}
                variant="contained"
                type="submit"
              >
                Enviar
              </Button>
            </C.ButtonWrapper>
          </>
        )}
      </C.ContentContainer>
    </DashboardPartial>
  );
}
