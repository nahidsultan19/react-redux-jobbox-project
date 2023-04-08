import React from "react";
import JobCard from "../components/reusable/JobCard";
import { useGetJobQuery } from "../features/job/jobApi";



const Jobs = () => {
  const { data, isLoading, isError } = useGetJobQuery();

  let content;



  if (data?.data.length > 0) {
    content = data?.data?.map((jobData, index) => <JobCard key={index} jobData={jobData} />)
  }

  const handleInputChange = (event) => {
    console.log(event.target.value);

  }





  return (
    <div className='pt-14 mx-7'>
      <div className='bg-primary/10 p-5 rounded-2xl flex justify-between'>
        <h1 className='font-semibold text-xl'>Find Jobs</h1>
        <input type="text" onChange={handleInputChange} />

      </div>
      <div className='grid grid-cols-2 gap-5 mt-5 py-5'>
        {content}
      </div>
    </div>
  );
};

export default Jobs;
