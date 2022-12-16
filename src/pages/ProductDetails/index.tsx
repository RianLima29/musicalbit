import { Button } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import NumberSelector from "../../components/NumberSelector";
import { useGetProductQuery } from "../../redux/api/apiSlice";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import * as C from "./styles";
import { radius, spacing } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addProduct } from "../../redux/slices/cartSlice";

export default function ProductDetails() {
  const params = useParams();
  const { data, isLoading, isError } = useGetProductQuery(params.id ?? "");
  const [productCount, setProductCount] = React.useState<number>(1);
  const cartData = useSelector((state: RootState) => state.cart);
  const [mainPhoto, setMainPhoto] = React.useState<string>('')
  const dispatch = useDispatch();

  console.log(
    data?.price,
    data?.price.replaceAll(".", "").replaceAll(",", ".") ?? ""
  );

  React.useEffect(()=>{
    if(data?.mainPhoto){
      setMainPhoto(data.mainPhoto)
    }
  },[data])

  let secondaryImages = data?.secondaryPhotos?.map((item, index) => (
    <C.SecondaryImage key={index + 1} onClick={()=>setMainPhoto(item)} photoUrl={item} />
  ));

  secondaryImages?.unshift(<C.SecondaryImage key={1} onClick={()=>setMainPhoto(data?.mainPhoto ?? '')} photoUrl={data?.mainPhoto ?? ''}/>)

  const addProductToCart = () => {
    if (data) {
      dispatch(
        addProduct({
          ...data,
          price: data?.price.replaceAll(".", "").replaceAll(",", "."),
          quantity: productCount,
        })
      );
    }
  };

  return (
    <>
      <C.MainContainer>
        <Header />
        <C.Container>
          {data && (
            <>
              <C.LeftSide>
                <C.MainImage photoUrl={mainPhoto} />
                {secondaryImages && (
                  <C.SecondaryImagesContainer>
                    {secondaryImages}
                  </C.SecondaryImagesContainer>
                )}
              </C.LeftSide>
              <C.RightSide>
                <C.ProductTitle>{data.name}</C.ProductTitle>
                <C.ProductDesc>{data.description}</C.ProductDesc>
                <C.Price>{data.price}</C.Price>
                <C.Wrapper>
                  <NumberSelector state={[productCount, setProductCount]} />
                  <Button
                    sx={{ borderRadius: radius(1000), margin: spacing(1) }}
                    variant="contained"
                    startIcon={<ShoppingCartOutlinedIcon />}
                    onClick={() => addProductToCart()}
                  >
                    ADICIONAR AO CARRINHO
                  </Button>
                </C.Wrapper>
              </C.RightSide>
            </>
          )}
        </C.Container>
      </C.MainContainer>
    </>
  );
}
