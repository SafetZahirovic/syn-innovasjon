export interface PrescriptionMedication {
	id: string
	name: string
	description: string
	isMedicationStrong: boolean
	issueDate: Date
	expirationDate: Date
	dossageDirection: string
	active: boolean
}
