import { BloodType } from '@/types/BloodType'

export interface Users {
  firstName: String,
  lastName: String,
  birthDate: Date,
  organDonor: boolean,
  bloodType: BloodType
}
