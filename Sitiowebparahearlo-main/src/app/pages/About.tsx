import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Target, Eye, Heart, Users, Award, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl mb-6 text-gray-900">Sobre Hearlo</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Somos una empresa de retail digital comprometida con conectar a las personas 
                con la tecnología de manera simple, accesible y confiable.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-blue-50 p-8 rounded-2xl">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl mb-4 text-gray-900">Nuestra Misión</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Facilitar el acceso a productos tecnológicos de calidad mediante una experiencia 
                  de compra digital simple, segura y transparente. Nos dedicamos a construir relaciones 
                  duraderas con nuestros clientes basadas en la confianza y el servicio excepcional.
                </p>
              </div>
              
              <div className="bg-indigo-50 p-8 rounded-2xl">
                <div className="bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl mb-4 text-gray-900">Nuestra Visión</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Ser la plataforma de retail digital líder en España, reconocida por nuestra 
                  innovación, accesibilidad y compromiso con la satisfacción del cliente. Aspiramos 
                  a transformar la forma en que las personas compran tecnología online.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 text-gray-900">Nuestros Valores</h2>
              <p className="text-gray-600 text-lg">
                Los principios que guían cada decisión que tomamos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">Pasión</h3>
                <p className="text-gray-600">
                  Amamos lo que hacemos y nos esforzamos por ofrecer la mejor experiencia
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">Cercanía</h3>
                <p className="text-gray-600">
                  Construimos relaciones genuinas y duraderas con nuestros clientes
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">Excelencia</h3>
                <p className="text-gray-600">
                  Nos comprometemos con la calidad en cada producto y servicio
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">Innovación</h3>
                <p className="text-gray-600">
                  Buscamos constantemente formas de mejorar y evolucionar
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 text-gray-900">Nuestra Historia</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                Hearlo nació en 2024 con una visión clara: hacer que la tecnología sea accesible 
                para todos. Comenzamos como un pequeño equipo de apasionados por la innovación 
                digital, convencidos de que comprar tecnología online debía ser una experiencia 
                simple, transparente y confiable.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Desde nuestros inicios, nos hemos enfocado en seleccionar cuidadosamente cada 
                producto de nuestro catálogo, asegurándonos de ofrecer solo las mejores opciones 
                en calidad y precio. Creemos que cada cliente merece atención personalizada y 
                soluciones adaptadas a sus necesidades.
              </p>
              
              <p className="text-lg leading-relaxed">
                Hoy, Hearlo es más que una tienda online: somos una comunidad de personas que 
                confían en nosotros para estar a la vanguardia de la tecnología. Nuestro compromiso 
                es seguir creciendo junto a nuestros clientes, innovando constantemente para ofrecer 
                la mejor experiencia de compra digital.
              </p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1744267251671-747da1cf76ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGRlbGl2ZXJ5fGVufDF8fHx8MTc3MDkxMzA2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Compra Online"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1723987513092-83aa84ee5d01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjB0ZWFtfGVufDF8fHx8MTc3MDgxMTUxOXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Soporte al Cliente"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
