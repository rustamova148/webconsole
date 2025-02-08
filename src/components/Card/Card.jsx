import './Card.css'

// eslint-disable-next-line react/prop-types
const Card = ({name,city,posts}) => {
  return (
    <div className='card'>
        <b>Name:</b> {name} <br />
        <b>City:</b> {city} <br />
        <b>Posts:</b> {posts}
    </div>
  )
}

export default Card