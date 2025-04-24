"use client";

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { jobTypes, locations } from "@/constants/dummyData";

const JobsSearchBar = () => {
  const [location, setLocation] = useState<string>("");
  const [jobType, setJobType] = useState<string>("");
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isJobTypeOpen, setIsJobTypeOpen] = useState(false);

  return (
    <div className="w-full my-4">
      <div className="bg-white rounded-md shadow-sm flex flex-col md:items-center md:flex-row">
        {/* Job Title Input */}
        <div className="flex-1 p-3 md:border-r md:border-offwhite">
          <input
            type="text"
            placeholder="Job Title, Company, or Keywords"
            className=" w-full subheading-text text-light placeholder-light outline-none"
          />
        </div>

        {/* Location Dropdown */}
        <div className="relative p-3 border-t md:border-t-0 md:border-r border-gray-100 md:w-[180px]">
          <button
            className="w-full flex items-center justify-between subheading-text text-light cursor-pointer"
            onClick={() => {
              setIsLocationOpen(!isLocationOpen);
              setIsJobTypeOpen(false);
            }}
          >
            {location || "Select Location"}
            <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
          </button>

          {isLocationOpen && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-100 rounded-md shadow-md z-10">
              {locations.map((loc) => (
                <button
                  key={loc}
                  className="w-full text-left px-4 py-2 subheading-text text-light hover:bg-gray-50"
                  onClick={() => {
                    setLocation(loc);
                    setIsLocationOpen(false);
                  }}
                >
                  {loc}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Job Type Dropdown */}
        <div className="relative p-3 border-t md:border-t-0 border-gray-100 md:w-[150px]">
          <button
            className="w-full flex items-center justify-between subheading-text text-light cursor-pointer"
            onClick={() => {
              setIsJobTypeOpen(!isJobTypeOpen);
              setIsLocationOpen(false);
            }}
          >
            {jobType || "Job Type"}
            <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
          </button>

          {isJobTypeOpen && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-100 rounded-md shadow-md z-10">
              {jobTypes.map((type) => (
                <button
                  key={type}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 subheading-text text-light"
                  onClick={() => {
                    setJobType(type);
                    setIsJobTypeOpen(false);
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search Button */}
        <div className="p-3">
          <button className="w-full md:w-auto bg-primary hover:bg-primary/70 cursor-pointer text-white rounded-md px-6 py-2 subheading-text flex items-center justify-center">
            <Search className="h-4 w-4 mr-2" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobsSearchBar;
