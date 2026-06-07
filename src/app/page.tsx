'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary to-gray-800">
      {/* Header */}
      <header className="bg-primary/95 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white">Grandes Soluciones</h1>
          <p className="text-gray-300">Renta de Vehículos en Caracas</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Alquila tu Vehículo Hoy
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Sin tarjeta de crédito • 200 km/día incluidos • Precios transparentes
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/reserva" className="btn-primary text-lg">
              🚗 Hacer una Reserva
            </a>
            <a href="/presupuesto" className="btn-secondary text-lg">
              💰 Ver Presupuesto
            </a>
            <a href="/consultas" className="btn-secondary text-lg">
              💬 Consultas
            </a>
          </div>
        </div>

        {/* Vehicles Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Nuestra Flota
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Changan New Alvin */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400 text-4xl">🚙</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Changan New Alvin</h4>
              <p className="text-gray-600 mb-4">Capacidad: 5 pax</p>
              <p className="text-accent font-bold text-2xl mb-4">$28/día</p>
              <button className="btn-primary w-full">Seleccionar</button>
            </div>

            {/* Jac Arena */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400 text-4xl">🚙</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Jac Arena</h4>
              <p className="text-gray-600 mb-4">Capacidad: 5 pax</p>
              <p className="text-accent font-bold text-2xl mb-4">$35/día</p>
              <button className="btn-primary w-full">Seleccionar</button>
            </div>

            {/* Nissan Sylphi */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400 text-4xl">🚗</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Nissan Sylphi</h4>
              <p className="text-gray-600 mb-4">Capacidad: 5 pax</p>
              <p className="text-accent font-bold text-2xl mb-4">$38/día</p>
              <button className="btn-primary w-full">Seleccionar</button>
            </div>

            {/* Mitsubishi ASX */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400 text-4xl">🚙</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Mitsubishi ASX</h4>
              <p className="text-gray-600 mb-4">Capacidad: 5 pax</p>
              <p className="text-accent font-bold text-2xl mb-4">$45/día</p>
              <button className="btn-primary w-full">Seleccionar</button>
            </div>

            {/* Toyota Fortuner */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400 text-4xl">🚐</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Toyota Fortuner</h4>
              <p className="text-gray-600 mb-4">Capacidad: 7 pax</p>
              <p className="text-accent font-bold text-2xl mb-4">$59/día</p>
              <button className="btn-primary w-full">Seleccionar</button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white/10 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            ¿Por qué elegirnos?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">✅</div>
              <h4 className="font-bold text-white mb-2">Sin Tarjeta</h4>
              <p className="text-gray-300">Pago presencial sin requisitos de tarjeta</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🎯</div>
              <h4 className="font-bold text-white mb-2">200 km/día</h4>
              <p className="text-gray-300">Incluidos en el precio del alquiler</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💰</div>
              <h4 className="font-bold text-white mb-2">Precios Claros</h4>
              <p className="text-gray-300">Sin cargos ocultos ni sorpresas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <h4 className="font-bold text-white mb-2">Rápido</h4>
              <p className="text-gray-300">Proceso de alquiler en minutos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/95 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Contacto</h4>
              <p className="mb-2">📞 +58 (412) 0204313</p>
              <p className="mb-2">📍 Caracas, Venezuela</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Servicio</h4>
              <ul className="space-y-2">
                <li><a href="/reserva">Reservar</a></li>
                <li><a href="/presupuesto">Presupuesto</a></li>
                <li><a href="/consultas">Consultas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Información</h4>
              <ul className="space-y-2">
                <li><a href="#">Términos y Condiciones</a></li>
                <li><a href="#">Política de Privacidad</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-4 text-center">
            <p>&copy; 2026 Grandes Soluciones. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
