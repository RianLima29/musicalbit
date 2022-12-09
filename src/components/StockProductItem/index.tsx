import React from "react";
import { Product } from "../../types/product";
import * as C from "./styles";
import {Delete, Edit} from "@mui/icons-material/";
import {Tooltip, IconButton} from "@mui/material";
import {useDeleteProductMutation} from '../../redux/api/apiSlice'
import {deleteObject, ref} from 'firebase/storage'
import { storage } from "../../firebase";
import { toast } from 'react-toastify';

interface Props {
  product: Product;
}

export default function StockProductItem(props: Props) {
    const [deleteProduct] = useDeleteProductMutation()

    const handleDeleteIconClick = ()=>{
        if(props.product.path){
            deleteProduct(props.product.path).unwrap().then(()=>{
                toast.success(`Item ${props.product.name} deletado com sucesso!`)
            }).catch(()=>{
                toast.error(`O item não pôde ser deletado`)
            })
        }
    }
  return (
    <C.Container>
      <C.InfoContainer>
        <C.ProductPreview src={props.product.mainPhoto}/>
        <C.Wrapper>
          <C.Name>Produto: {props.product.name}</C.Name>
          <C.Price>Preço: {props.product.price}</C.Price>
          <C.InStock>Em estoque: {props.product.inStock}</C.InStock>
        </C.Wrapper>
      </C.InfoContainer>
      <C.ActionsWrapper>
        <Tooltip title="Editar">
          <IconButton>
            <Edit color="primary"/>
          </IconButton>
        </Tooltip>
        <Tooltip onClick={handleDeleteIconClick} title="Deletar">
          <IconButton>
            <Delete color="error"/>
          </IconButton>
        </Tooltip>
      </C.ActionsWrapper>
    </C.Container>
  );
}
