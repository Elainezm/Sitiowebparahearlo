export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Auriculares Inalámbricos Premium",
    price: 89.99,
    description: "Auriculares de alta calidad con cancelación de ruido activa y 30 horas de batería.",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1640300065113-738f2abb8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBhdWRpb3xlbnwxfHx8fDE3NzA4Nzg1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["Cancelación de ruido", "30h batería", "Bluetooth 5.0", "Estuche de carga"]
  },
  {
    id: "2",
    name: "Laptop Ultradelgada Pro",
    price: 1299.99,
    description: "Laptop potente y portátil con pantalla Full HD y procesador de última generación.",
    category: "Computadoras",
    image: "https://images.unsplash.com/photo-1764053430604-d585d1f1dad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJvbmljcyUyMGxhcHRvcCUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzcwOTEzMDU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["16GB RAM", "512GB SSD", "15.6\" Full HD", "Batería 10h"]
  },
  {
    id: "3",
    name: "Smartwatch Fitness Pro",
    price: 249.99,
    description: "Reloj inteligente con monitoreo de salud 24/7 y resistencia al agua.",
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1665860455418-017fa50d29bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwZml0bmVzcyUyMHRyYWNrZXJ8ZW58MXx8fHwxNzcwODAzNTIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["Monitor cardíaco", "GPS integrado", "Resistente al agua", "5 días batería"]
  },
  {
    id: "4",
    name: "Tablet Digital Pro",
    price: 599.99,
    description: "Tablet versátil con pantalla de alta resolución ideal para trabajo y entretenimiento.",
    category: "Tablets",
    image: "https://images.unsplash.com/photo-1769603795371-ad63bd85d524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBjb21wdXRlciUyMGRldmljZXxlbnwxfHx8fDE3NzA4NjYwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["11\" Retina", "256GB", "Stylus incluido", "Wi-Fi 6"]
  },
  {
    id: "5",
    name: "Cámara Profesional 4K",
    price: 899.99,
    description: "Cámara digital de alta resolución para fotografía y video profesional.",
    category: "Fotografía",
    image: "https://images.unsplash.com/photo-1760126722564-819190d60abc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzA4NzgyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["Sensor 24MP", "Video 4K", "Estabilización", "Pantalla táctil"]
  },
  {
    id: "6",
    name: "Parlante Bluetooth Premium",
    price: 149.99,
    description: "Parlante portátil con sonido 360° y resistencia al agua para todas tus aventuras.",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1645020089405-ee44c2cd7c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVha2VyJTIwYmx1ZXRvb3RoJTIwYXVkaW98ZW58MXx8fHwxNzcwODI1OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["Sonido 360°", "Impermeable", "20h batería", "Conexión múltiple"]
  },
];

export interface CartItem {
  product: Product;
  quantity: number;
}
