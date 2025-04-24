"use client";
import { Job } from "@/interfaces/job.interface";
import { MapPin, Clock, Bookmark } from "lucide-react";
import Image from "next/image";

interface JobCardProps {
  job: Job;
  onApply: (jobId: string) => void;
  onSave: (jobId: string) => void;
}

const JobCard = ({ job, onApply, onSave }: JobCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 px-4 py-2 flex flex-col mt-2">
      {/* Promoted Label */}
      {job.isPromoted && (
        <div className="text-[10px] font-medium mb-1 ">Promoted</div>
      )}

      <div className="flex gap-2 items-start mb-3">
        {/* Company Logo */}
        <div>
          <Image
            src={job.logoUrl || "/placeholder.svg"}
            alt={`${job.company} logo`}
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </div>

        {/* Job Title and Company */}
        <div>
          <h3 className="subheading-text">{job.title}</h3>
          <p className="subheading-text text-xs">{job.company}</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center text-gray-500 mb-1.5">
        <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
        <span className="subheading-text text-xs text-light-gray">
          {job.location} {job.isRemote && "(Remote)"}
        </span>
      </div>

      {/* Posted Time and Applicants */}
      <div className="flex items-center text-gray-500 mb-4">
        <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
        <span className="subheading-text text-xs text-light-gray">
          1 day ago |{" "}
          <span className="text-primary">{job.applicants} applicants</span>
        </span>
      </div>

      {/* Apply Button and Save */}
      <div className="mt-auto flex items-center justify-between">
        <button
          onClick={() => onApply(job.id)}
          className="bg-primary text-white py-3 px-6 rounded-md  hover:bg-primary/80 cursor-pointer subheading-text text-xs  transition-colors flex-grow mr-3"
        >
          Apply Now
        </button>
        <button
          onClick={() => onSave(job.id)}
          className="text-gray-400 p-2"
          aria-label="Save job"
        >
          <Bookmark
            className={`w-6 h-6 cursor-pointer ${
              job.isSaved ? "fill-primary text-primary" : "fill-transparent"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
