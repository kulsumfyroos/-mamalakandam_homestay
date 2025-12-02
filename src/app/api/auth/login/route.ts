import { type NextRequest, NextResponse } from "next/server"
import { createToken, setTokenCookie } from "@/lib/jwt"
import { getAdminByUsernameAction } from "@/actions/admin.actions"
import { compare } from "bcrypt"

// Simulación de base de datos de usuarios (en producción, usa una base de datos real)
// const user = {
//   id: 1,
//   name: "admin",
//   password: "$2y$10$MA.Y5IotmoVE3wLd/kLQaev9.HKU9OFptX6Cag.FHYzR1E8CapiUi",
//   picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokYOrem2ngCf1s2XqQe4I0SIbdavyYAYrg_CmrN_fAGWP7Lil0bP7PdQ6W_MMWYzZgLrXOpHtKsyIGYlbjsjINA",
//   email: "admin@gmail.com",
//   role: "Admin"
// }
// const { name: username, password } = user

export async function POST(request: NextRequest) {
  try {
    const { username, password }: {username: string, password: string} = await request.json()

    // Validar que se proporcionaron username y password
    if (!username || !password) {
      return NextResponse.json({ message: "Nombre de usuario y contraseña son requeridos" }, { status: 400 })
    }
    
    // Buscar el usuario en la "base de datos"
    const user = await getAdminByUsernameAction(username);

    // Verificar si el usuario existe y la contraseña es correcta
    const checkdPassword = await compare(password, user?.password as string );
    if (!user || !checkdPassword) {
      return NextResponse.json({ message: "Credenciales inválidas" }, { status: 403 })
    }

    // Crear el token JWT
    const token = await createToken({
      id: user.id.toString(),
      picture: user.picture as string,
      email: user.email,
      role: user.role,
      name: user.name,
    })

    // Establecer el token en las cookies
    setTokenCookie(token)

    // Devolver respuesta exitosa
    const response = NextResponse.json({
      message: "Inicio de sesión exitoso",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });

    return response;
  } catch (error) {
    return NextResponse.json({ message: error instanceof Error ? error.message : "Inicio de sesión fallido" }, { status: 500 })
  }finally {
    NextResponse.next();
  }
}