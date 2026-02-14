import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products, CartItem } from "../data/products";
import { ShoppingCart, Check, ArrowLeft } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    const savedCart = localStorage.getItem("hearlo-cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const handleAddToCart = () => {
    if (!product) return;

    const newCart = [...cart];
    const existingItem = newCart.find((item) => item.product.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      newCart.push({ product, quantity });
    }
    
    setCart(newCart);
    localStorage.setItem("hearlo-cart", JSON.stringify(newCart));
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar cartItemCount={cartItemCount} />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl mb-4 text-gray-900">Producto no encontrado</h1>
            <Link to="/catalogo" className="text-blue-600 hover:text-blue-700">
              Volver al catálogo
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartItemCount={cartItemCount} />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al catálogo
          </Link>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Product Image */}
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <div className="text-sm text-blue-600 mb-2">{product.category}</div>
                <h1 className="text-4xl mb-4 text-gray-900">{product.name}</h1>
                <div className="text-4xl text-blue-600 mb-6">
                  €{product.price.toFixed(2)}
                </div>
                
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-lg mb-3 text-gray-900">Características principales:</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quantity Selector */}
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Cantidad:</label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 h-10 text-center border border-gray-300 rounded-lg"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div className="flex gap-4">
                  <button
                    onClick={handleAddToCart}
                    className={`flex-1 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                      addedToCart
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-blue-600 hover:bg-blue-700"
                    } text-white`}
                  >
                    {addedToCart ? (
                      <>
                        <Check className="w-5 h-5" />
                        Añadido al carrito
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-5 h-5" />
                        Añadir al carrito
                      </>
                    )}
                  </button>
                  <Link
                    to="/carrito"
                    className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    Ver carrito
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-3xl mb-8 text-gray-900">También te puede interesar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products
                .filter((p) => p.id !== product.id && p.category === product.category)
                .slice(0, 3)
                .map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    to={`/producto/${relatedProduct.id}`}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-square overflow-hidden bg-gray-100">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg mb-2 text-gray-900">
                        {relatedProduct.name}
                      </h3>
                      <div className="text-xl text-blue-600">
                        €{relatedProduct.price.toFixed(2)}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
