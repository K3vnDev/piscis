import { z } from 'zod'

export const LoginForm = z.object({
  email: z.string().email(),
  pass: z.string()
})

export type LoginFormType = z.infer<typeof LoginForm>
