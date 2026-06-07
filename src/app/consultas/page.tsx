'use client'

import { useState } from 'react'

export default function Consultas() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [consultaEnviada, setConsultaEnviada] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (nombre && email && telefono && mensaje) {
      setConsultaEnviada(true)
      setTimeout(() => {
        setNombre('')
        setEmail('')
        setTelefono('')
        setMensaje('')
        setConsultaEnviada(false)
      }, 3000)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Consultas Online</h1>

        <div className="max-w-2xl mx-auto">
          {consultaEnviada && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 text-center">
              ✅ ¡Consulta enviada correctamente! Nos pondremos en contacto pronto.
            </div>
          )}

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label className="block font-bold text-gray-700 mb-2">Nombre Completo</label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="input"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-bold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              {/* Teléfono */}
              <div>
                <label className="block font-bold text-gray-700 mb-2">Teléfono</label>
                <input
                  type="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  className="input"
                  placeholder="+58 (412) XXXXXXXX"
                  required
                />
              </div>

              {/* Mensaje */}
              <div>
                <label className="block font-bold text-gray-700 mb-2">Tu Consulta</label>
                <textarea
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                  rows={5}
                  placeholder="Escribe tu pregunta o consulta aquí..."
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full text-lg font-bold">
                Enviar Consulta
              </button>
            </form>

            {/* Info adicional */}
            <div className="mt-8 pt-8 border-t">
              <h3 className="font-bold text-lg text-gray-700 mb-4">También puedes contactarnos:</h3>
              <div className="space-y-2 text-gray-600">
                <p>📞 <strong>Teléfono:</strong> +58 (412) 0204313</p>
                <p>📍 <strong>Ubicación:</strong> Caracas, Venezuela</p>
                <p>🕐 <strong>Horario:</strong> Lunes a Viernes 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
