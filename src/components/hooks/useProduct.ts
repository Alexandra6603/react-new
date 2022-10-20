import axios, {AxiosError} from 'axios';
import { useState, useEffect } from 'react';
import { FakingProducts } from '../../models';
// import {useDispatch, useSelector} from "react-redux";
// import { getProduct } from '../actions/product.service';

export function useProduct() {
    const [products, setProduct] = useState<FakingProducts[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // const dispatch = useDispatch()
    // const product = useSelector((state: any) => state.product.items)

    function addProduct(prod: FakingProducts) {
        setProduct(prev => [...prev, prod])
    }
  
    async function fetchProduct() {
      try {
        setError('')
        setLoading(true)
        const responce = await axios.get<FakingProducts[]>('https://fakestoreapi.com/products?limit=5');
        setProduct(responce.data)
        setLoading(false)
      } catch(e: unknown) {
        setLoading(false)
        const error = e as AxiosError;
        setError(error.message)
      }
    }
  
    useEffect(()=>{
        fetchProduct()
        // dispatch(getProduct())
    }, [])

    return {products, loading, error, addProduct}
}