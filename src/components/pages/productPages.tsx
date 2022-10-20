import { useState } from "react";
import { FakingProducts } from "../../models";
import { CreateProduct } from "../createProduct";
import { useProduct } from "../hooks/useProduct";
import { Modal } from "../modal";
import { ProductItem } from "../product";

export function ProductPage() {
    const {loading, error, products, addProduct} = useProduct()
    const [modal, setModal] = useState(true);
  
    const createHandeler = (prod: FakingProducts) => {
      setModal(false);
      addProduct(prod);
    }
  
    return (
      <div className='container mx-auto max-w-2xl pt-5'>
        {loading && <p className='text-center'>Идет загрузка, подождите</p>}
        {error && <p className='text-center text-red-600'>{error}</p>}
        {products.map((item) => <ProductItem product={item} key={item.id}/>)}
  
        <button className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white px-4 py-2'
        onClick={() => setModal(true)}>+</button>
        {modal && <Modal title='Создание нового продукта' onClose={() => setModal(false)}>
          <CreateProduct onCreate={createHandeler}/>
        </Modal>}
      </div>
    );
}