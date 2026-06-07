import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, email, telefono, mensaje } = body

    if (!nombre || !email || !telefono || !mensaje) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Aquí se puede integrar con un servicio de email como SendGrid, Nodemailer, etc.
    console.log('Nueva consulta recibida:', { nombre, email, telefono, mensaje })

    return NextResponse.json(
      { message: 'Consulta enviada correctamente' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    )
  }
}
