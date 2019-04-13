import { AllergySeverity } from '@/types/AllergySeverity'

export interface Allergy {
	id: string
	name: string
	allergicTo: string
	severity: AllergySeverity
	detected: Date
	lastTested: Date
	reaction: string
}
