import { useState } from "react";
import axios, {AxiosError} from 'axios';
import { FakingProducts } from "../models";


const postData ={
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}

interface CreateProductProps {
    onCreate: (prod: FakingProducts) => void
}

export function CreateProduct({onCreate}: CreateProductProps) {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('')

        if (value.trim().length == 0) {
            setError('Поле обязательное, вообще-то');
            return
        }

        postData.title = value
        const responce = await axios.post('https://fakestoreapi.com/products', postData);

        onCreate(responce.data);
    }

    const changeHandler = (event: any) => {
        setValue(event.target.value)
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    className="border py-2 px-4 mb-2 w-full outline-0"
                    placeholder="Введите наименование продукта"
                    value={value}
                    onChange={changeHandler}
                />

                <button type="submit" className="py-2 px-4 border bg-yellow-400">Добавить</button>
            </form>

            {error && <p className='text-center text-red-600'>{error}</p>}
        </>
    )
}