/* eslint-disable prettier/prettier */
const ITEMS = [
  {
    id: 1,
    name: 'Acer Predator Triton',
    price: 979,
    quantity: 3,
    totalPrice: 2937,
    image: require('../assets/product_images/acerlap.jpg'),
    description:
      'Processor: Intel Core i9 11900H RAM: 32 GB (16GB+16GB) Storage: 1024GB PCIe NVMe SSD',
  },
  {
    id: 2,
    name: 'Nvidia quadro rtx4000 8gb',
    price: 79,
    quantity: 2,
    totalPrice: 158,
    image: require('../assets/product_images/nvidia.jpg'),
    description:
      '6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
  },

  {
    id: 3,
    name: 'Apple iPhone 13 Pro Max',
    price: 389,
    quantity: 4,
    totalPrice: 1556,
    image: require('../assets/product_images/aphone.jpg'),
    description:
      '6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
  },
];

export function getCartItems() {
  return ITEMS;
}
