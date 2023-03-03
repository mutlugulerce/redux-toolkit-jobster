import Wrapper from '../assets/wrappers/Job'
import { useDispatch } from 'react-redux'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Job = ({_id,position,company,jobLocation,jobType,createdAt,status,}) => {

  const dispatch= useDispatch();

  return (
    <Wrapper>
     <header>
      <div className="main-icon">
        {company.charAt(0)}
      </div>
      <div className="info">
        <h5>{position}</h5>
        <p>{company}</p>
      </div>
     </header>

     <div className="content">
      <div className="content-center">
        <h4>More Content</h4>
        <div className={`status ${status}`}>{status}</div>
      </div>
     
     <footer>
      <div className="actions">
        <Link 
        to='/add-job'
        className='btn edit-btn'
        onClick={() => {console.log('edit-job')}}
        >Edit</Link>

        <button className="btn delete-btn" type='button' onClick={() => {console.log('delete-btn')}}>Delete</button>
      </div>
     </footer>
     </div>
    </Wrapper>
  )
}

export default Job
