import { useState, useEffect } from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products, Product, CartItem } from "../data/products";
import { ShoppingBag, Truck, Shield, HeadphonesIcon, ArrowRight } from "lucide-react";

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const featuredProducts = products.slice(0, 3);

  useEffect(() => {
    const savedCart = localStorage.getItem("hearlo-cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const handleAddToCart = (product: Product) => {
    const newCart = [...cart];
    const existingItem = newCart.find((item) => item.product.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      newCart.push({ product, quantity: 1 });
    }
    
    setCart(newCart);
    localStorage.setItem("hearlo-cart", JSON.stringify(newCart));
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartItemCount={cartItemCount} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
                Bienvenido a Hearlo
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Tu tienda digital de confianza. Descubre productos innovadores con la mejor calidad
                y servicio al cliente excepcional.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link
                  to="/catalogo"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                >
                  Ver Catálogo
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/nosotros"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors border-2 border-blue-600"
                >
                  Conocer Más
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg mb-2 text-gray-900">Envío Rápido</h3>
                <p className="text-gray-600 text-sm">
                  Entrega en 24-48 horas en toda España
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg mb-2 text-gray-900">Compra Segura</h3>
                <p className="text-gray-600 text-sm">
                  Pago protegido y garantía extendida
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeadphonesIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg mb-2 text-gray-900">Soporte 24/7</h3>
                <p className="text-gray-600 text-sm">
                  Atención al cliente siempre disponible
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg mb-2 text-gray-900">Devolución Fácil</h3>
                <p className="text-gray-600 text-sm">
                  30 días para cambios y devoluciones
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 text-gray-900">Productos Destacados</h2>
              <p className="text-gray-600 text-lg">
                Descubre nuestra selección de productos más populares
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/catalogo"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                Ver todos los productos
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl mb-4">¿Listo para empezar?</h2>
            <p className="text-xl mb-8 opacity-90">
              Únete a miles de clientes satisfechos que confían en Hearlo para sus compras digitales
            </p>
            <Link
              to="/catalogo"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Explorar Productos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
