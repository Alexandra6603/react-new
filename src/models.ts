export interface Product {
    id: number;
    title: string;
    price: string;
    description?: string
}

export interface FakingProducts {
    category: string;
    description: string;
    id: number;
    image: string;
    price: string;
    rating: {
        rate: number;
        count: number;
    };
    title: string;
}