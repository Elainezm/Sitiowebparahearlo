import { useState, useEffect } from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartItem } from "../data/products";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("hearlo-cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("hearlo-cart", JSON.stringify(newCart));
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    const newCart = cart.map((item) =>
      item.product.id === productId
        ? { ...item, quantity: Math.max(1, newQuantity) }
        : item
    );
    updateCart(newCart);
  };

  const removeItem = (productId: string) => {
    const newCart = cart.filter((item) => item.product.id !== productId);
    updateCart(newCart);
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartItemCount={cartItemCount} />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl mb-8 text-gray-900">Carrito de Compras</h1>

          {cart.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
              <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl mb-4 text-gray-900">Tu carrito está vacío</h2>
              <p className="text-gray-600 mb-6">
                Añade productos para comenzar tu compra
              </p>
              <Link
                to="/catalogo"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
              >
                Ver Catálogo
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="bg-white rounded-lg shadow-sm p-6 flex gap-6"
                  >
                    <Link
                      to={`/producto/${item.product.id}`}
                      className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    <div className="flex-grow">
                      <Link
                        to={`/producto/${item.product.id}`}
                        className="text-lg text-gray-900 hover:text-blue-600 transition-colors mb-1 block"
                      >
                        {item.product.name}
                      </Link>
                      <div className="text-sm text-gray-600 mb-3">
                        {item.product.category}
                      </div>
                      <div className="text-xl text-blue-600">
                        €{item.product.price.toFixed(2)}
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-red-600 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="w-8 h-8 rounded border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="w-8 h-8 rounded border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                  <h2 className="text-2xl mb-6 text-gray-900">Resumen del Pedido</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span>€{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Envío</span>
                      <span>€{shipping.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between text-xl text-gray-900">
                        <span>Total</span>
                        <span>€{total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mb-3">
                    Proceder al Pago
                  </button>

                  <Link
                    to="/catalogo"
                    className="block text-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Continuar Comprando
                  </Link>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center">
                      Envío gratuito en pedidos superiores a €50
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
