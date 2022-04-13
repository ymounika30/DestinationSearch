import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="app-container">
      <img className="image" src={imgUrl} alt={name} />
      <p className="title">{name}</p>
    </li>
  )
}

export default DestinationItem
