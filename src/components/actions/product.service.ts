import axios from 'axios'
import { FakingProducts } from '../../models';
import { setProucts } from '../redusers/repoReducer';

export const getProduct = () => {
    return async (dispatch: any) => {
        const response = await axios.get<FakingProducts[]>('https://fakestoreapi.com/products?limit=5');
        dispatch(setProucts(response.data))
    }
}