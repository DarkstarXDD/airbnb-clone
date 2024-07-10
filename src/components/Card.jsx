import star from "../assets/images/star.png"

export default function Card(props) {
  let statusText
  if (props.openSpots == 0) {
    statusText = "SOLD OUT"
  } else if (props.location === "Online") {
    statusText = "ONLINE"
  }

  return (
    <div className="card">
      <img className="card__img" src={props.img} alt={props.imgAlt} />
      {statusText && <p className="card__status">{statusText}</p>}

      <div className="card__stats">
        <img className="card__star-img" src={star} alt="star" />
        <p className="card__rating">{props.rating}</p>
        <p className="card__rating-count">({props.ratingCount})</p>
        <p>•</p>
        <p className="card__location">{props.location}</p>
      </div>

      <h2 className="card__title">{props.title}</h2>
      <p className="card__price">
        <span>From ${props.price} </span>/ person
      </p>
    </div>
  )
}
