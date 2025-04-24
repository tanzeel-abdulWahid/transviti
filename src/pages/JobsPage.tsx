"use client";
import FilterTags from "@/components/FilterTags";
import JobsGrid from "@/components/JobsGrid";
import JobsHeadings from "@/components/JobsHeadings";
import JobsSearchBar from "@/components/JobsSearchBar";
import { filterTags, initialJobs } from "@/constants/dummyData";
import { JobCategory } from "@/interfaces/job.interface";
import { jobReducer } from "@/reducers/jobReducer";
import { useReducer } from "react";

const JobsPage = () => {
  const [state, dispatch] = useReducer(jobReducer, initialJobs);

  const handleApply = (jobId: string) => {
    dispatch({ type: "APPLY_JOB", jobId });
  };

  const handleSave = (jobId: string, category: JobCategory) => {
    dispatch({ type: "TOGGLE_SAVE", jobId, category });
  };

  return (
    <div>
      {/* Headings */}
      <h1 className="heading-text text-[22px]">
        Find your Dream Job, <span className="text-primary">Albert!</span>
      </h1>
      <h1 className="subheading-text text-light">
        Explore the latest job openings and apply for the best opportunities
        available today!
      </h1>

      {/* Search Bar */}
      <JobsSearchBar />

      {/* Tags */}
      <FilterTags tags={filterTags} />

      <div className="border border-offwhite my-5" />

      {/* Featured Jobs */}
      <JobsHeadings
        heading={"Featured Jobs"}
        actionBtnTitle={"See Featured Jobs"}
      />
      <JobsGrid
        category="promoted"
        jobs={state.promotedJobs}
        onApply={handleApply}
        onSave={handleSave}
      />
      <div className="border border-offwhite my-5" />

      {/* Recommended Jobs */}
      <JobsHeadings
        heading={"Recommended Jobs"}
        actionBtnTitle={"See Recommended Jobs"}
      />
      <JobsGrid
        category="recommended"
        jobs={state.recommendedJobs}
        onApply={handleApply}
        onSave={handleSave}
      />

      <div className="border border-offwhite my-5" />

      {/* Latest Jobs */}
      <JobsHeadings
        heading={"Latest Jobs"}
        actionBtnTitle={"See Latest Jobs"}
      />
      <JobsGrid
        jobs={state.latestJobs}
        category="latest"
        onApply={handleApply}
        onSave={handleSave}
      />
    </div>
  );
};

export default JobsPage;
