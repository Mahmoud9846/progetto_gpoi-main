import axios from 'axios';
import { Product } from '../types/types';

interface WooCommerceProduct {
  id: number;
  name: string;
  description: string;
  short_description: string;
  price: string;
  regular_price: string;
  sale_price: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
  categories: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
}

const API_URL = 'https://testbackendbar.liteaccademy.it/wp-json/wc/v1/products';

const api = axios.create({
  baseURL: API_URL,
  method: 'GET',
  headers: {
    'Authorization' : 'Basic Y2tfMjMwMGNhY2I0MDg5N2VhYWU5NDU4MzU0YzFiOWY5NDEyNDc4Yzk5ODpjc19lMzRhNjMyM2Y1Y2I5OTIxOWRiMzM3NzAwOTYzNTZiMzlhYjFmNGVh',
  },
});

const mapWooCommerceProduct = (product: WooCommerceProduct): Product => ({
  id: product.id,
  name: product.name,
  description: product.short_description.replace(/<[^>]*>/g, ''),
  price: parseFloat(product.price),
  image: product.images[0]?.src || '/api/placeholder/400/320',
});

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get('');
    console.log('Raw API response:', response.data);
    const mappedProducts = response.data.map(mapWooCommerceProduct);
    console.log('Mapped products:', mappedProducts);
    return mappedProducts;
  } catch (error: any) {
    console.error('Error fetching products:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    throw new Error(`Failed to fetch products: ${error.response?.data?.message || error.message}`);
  }
};