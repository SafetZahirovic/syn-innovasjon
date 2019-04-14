import { VaccinationStatus } from '@/types/VaccinationStatus'

export interface Vaccination {
  name: string,
  patient: number,
  status: VaccinationStatus,
  expiresAt: null | Date,
  description: string,
  vaccinationPlan: string[]
}
