export interface PrescriptionMedication {
	id: string
	name: string
	description: string
	isMedicationStrong: boolean
	issueDate: Date | string
	expirationDate: Date | string
	dossageDirection: string
	active: boolean
}
