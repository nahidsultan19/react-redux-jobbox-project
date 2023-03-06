import React from "react";
import JobCard from "../components/reusable/JobCard";
import { useGetJobQuery } from "../features/job/jobApi";

const Jobs = () => {
  const { data, isLoading, isError } = useGetJobQuery();

  return (
    <div className='pt-14 mx-7'>
      <div className='bg-primary/10 p-5 rounded-2xl flex justify-between'>
        <h1 className='font-semibold text-xl'>Find Jobs</h1>
        <input type="text" />
      </div>

      <div className='grid grid-cols-2 gap-5 mt-5 py-5'>
        {
          data?.data?.map((jobData) => <JobCard jobData={jobData} />)
        }
      </div>
    </div>
  );
};

export default Jobs;
