import { ACADEMIC_PROGRAMS, KNOWLEDGE_FIELDS } from '@/consts'
import { z } from 'zod'

export const ResearchGroup = z.object({
  name: z.string().min(3),
  desc: z.string(),
  program: z.enum(ACADEMIC_PROGRAMS),
  sector: z.string(),
  line: z.string(),
  field: z.enum(KNOWLEDGE_FIELDS),
  owner_id: z.string().uuid().optional()
})

export type ResearchGroupType = z.infer<typeof ResearchGroup>
