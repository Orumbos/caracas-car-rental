import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Grandes Soluciones - Renta de Vehículos',
  description: 'Plataforma de alquiler de vehículos en Caracas, Venezuela. Reserva, presupuesto y consultas online.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
