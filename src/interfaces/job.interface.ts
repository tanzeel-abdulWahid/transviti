export interface Job {
	id: string
	title: string
	company: string
	location: string
	isRemote: boolean
	postedAt: string
	applicants: number
	isPromoted: boolean
	logoUrl: string
	isSaved?: boolean
}

export interface JobState {
	promotedJobs: Job[]
	recommendedJobs: Job[]
	latestJobs: Job[]
}
export type JobCategory = "promoted" | "recommended" | "latest"

export type JobAction =
	| { type: "TOGGLE_SAVE"; jobId: string; category: JobCategory }
	| { type: "APPLY_JOB"; jobId: string }
