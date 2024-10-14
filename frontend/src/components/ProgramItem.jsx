import { Link } from 'react-router-dom'

const ProgramItem = ({ code, server, db_name, programmer, p_status }) => {

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/program/${code}`}>
      <div>
      </div>
      <p className='font-medium text-sm'>{code}</p>
      <p className='font-medium text-sm'>{server}</p>
      <p className='font-medium text-sm'>{db_name}</p>
      <p className='font-medium text-sm'>{programmer}</p>
      <p className='font-medium text-sm'>{p_status}</p>
    </Link>
  )
}
export default ProgramItem