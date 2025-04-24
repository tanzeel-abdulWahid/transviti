import { Job, JobCategory } from "@/interfaces/job.interface";
import JobCard from "./JobCard";

interface JobGridProps {
  jobs: Job[];
  onApply: (jobId: string) => void;
  onSave: (jobId: string, category: JobCategory) => void;
  category: JobCategory;
}

const JobsGrid = ({ jobs, onApply, onSave, category }: JobGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-5 gap-4">
      {jobs?.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          onApply={onApply}
          onSave={(jobId) => onSave(jobId, category)}
        />
      ))}
    </div>
  );
};

export default JobsGrid;
