import { z } from 'zod'

export const SignupForm = z.object({
  name: z.string(),
  email: z.string().email(),
  pass: z.string(),
  role: z.enum(['student', 'teacher'])
})

export type SignupFormType = z.infer<typeof SignupForm>
