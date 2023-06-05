// Write your code here
import './index.css'

const EventItem = props => {
  const {listItems, Details} = props

  const getDetails = hi => {
    Details(hi)
  }
  return (
    <div className="cen">
      <ul className="ul">
        <div className="j">
          {listItems.map(each => (
            <li key={each.id} className="li">
              <button
                type="button"
                className="bb"
                key={each.id}
                onClick={() => getDetails(each.registrationStatus)}
              >
                <img src={each.imageUrl} alt="event" className="img" />
                <p className="h1">{each.name}</p>
                <p className="p">{each.location}</p>
              </button>
            </li>
          ))}
        </div>
      </ul>
    </div>
  )
}
export default EventItem
