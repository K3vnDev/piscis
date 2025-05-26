import { Inter, Poppins } from 'next/font/google'

// Fonts
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
})

const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
})

export const FONTS = {
  POPPINS: poppins.className,
  INTER: inter.className
}

export const CONTENT_JSON = {
  'Content-Type': 'application/json'
} as const

export const PROTECTED_ROUTES = new Set(['/inicio', '/semilleros', '/semilleros/crear'])

export const KNOWLEDGE_FIELDS = [
  'Ciencias Naturales',
  'Ingeniería y Tecnología',
  'Ciencias de la Salud',
  'Ciencias Sociales',
  'Ciencias Económicas y Administrativas',
  'Educación',
  'Humanidades',
  'Ciencias Agrarias',
  'Matemáticas y Computación',
  'Artes'
]

export const ACADEMIC_PROGRAMS = [
  'Ingenierías',
  'Administración de Empresas',
  'Psicología',
  'Medicina',
  'Contaduría Pública',
  'Derecho',
  'Enfermería',
  'Comunicación Social',
  'Idiomas',
  'Licenciaturas'
]
