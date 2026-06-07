import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { usuarioId, vehiculoId, fechaInicio, fechaFin, nombre, email, telefono } = body

    if (!vehiculoId || !fechaInicio || !fechaFin || !nombre || !email || !telefono) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    const reservaId = Math.random().toString(36).substr(2, 9)
    
    console.log('Nueva reserva recibida:', { usuarioId, vehiculoId, fechaInicio, fechaFin, nombre, email, telefono })

    return NextResponse.json(
      { message: 'Reserva creada correctamente', id: reservaId },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al procesar la reserva' },
      { status: 500 }
    )
  }
}
