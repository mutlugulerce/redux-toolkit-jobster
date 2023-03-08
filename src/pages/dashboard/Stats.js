import { useEffect } from 'react';
import { showStats } from '../../features/allJobs/allJobsSlice';
import { useDispatch } from 'react-redux';



const Stats = () => {

  const dispatch= useDispatch()

  useEffect(() => {
  dispatch(showStats())

  }
  )
  return (
    <h1>
      stats
    </h1>
  )
}

export default Stats
