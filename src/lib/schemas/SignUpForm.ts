import { z } from 'zod'

export const SignUpForm = z.object({
  name: z.string(),
  email: z.string().email(),
  pass: z.string(),
  role: z.enum(['student', 'teacher'])
})

export type SignUpFormType = z.infer<typeof SignUpForm>
