import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRemoveJobMutation } from '../../features/job/jobApi';


const JobCard = ({ jobData }) => {
  const navigate = useNavigate();
  const { _id, position, companyName, location, employmentType } = jobData || {};
  const { user: { role } } = useSelector((state) => state.auth);
  const [removeJob] = useRemoveJobMutation();

  return (
    <div
      key={_id}
      className='border border-gray-300 shadow-xl p-5 rounded-2xl text-primary'
    >
      <div className='flex justify-between  text-primary'>
        <div>
          <p className='text-xl'>{position}</p>
          <small className='text-primary/70 '>
            by{" "}
            <span className='font-semibold hover:text-primary cursor-pointer hover:underline transition-all'>
              {companyName}
            </span>
          </small>
        </div>
        <p>{location}</p>
      </div>
      <div className='flex justify-between items-center mt-5'>
        <p>{employmentType}</p>
        <div className="">
          <button className='btn mr-2' onClick={() => navigate(`/job-details/${_id}`)}>
            Details
          </button>
          {role === 'employer' && <button className='btn' onClick={() => removeJob(_id)}>
            Delete
          </button>}
        </div>
      </div>

    </div>
  );
};

export default JobCard;
