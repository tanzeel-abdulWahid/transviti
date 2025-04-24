import { Job, JobAction, JobState } from "@/interfaces/job.interface"

const toggleJobSaved = (jobs: Job[], jobId: string): Job[] => {
	return jobs.map((job) => (job.id === jobId ? { ...job, isSaved: !job.isSaved } : job))
}

export const jobReducer = (state: JobState, action: JobAction): JobState => {
	switch (action.type) {
		case "TOGGLE_SAVE": {
			switch (action.category) {
				case "promoted":
					return {
						...state,
						promotedJobs: toggleJobSaved(state.promotedJobs, action.jobId),
					}
				case "recommended":
					return {
						...state,
						recommendedJobs: toggleJobSaved(state.recommendedJobs, action.jobId),
					}
				case "latest":
					return {
						...state,
						latestJobs: toggleJobSaved(state.latestJobs, action.jobId),
					}
				default:
					return state
			}
		}

		case "APPLY_JOB":
			console.log(`Applied to job ${action.jobId}`)
			return state


		default:
			return state
	}
}
