import star from "../assets/star.png"

export default function Card(props) {
  return (
    <div className="card">
      <img className="card__img" src={props.img} alt={props.imgAlt} />
      <p className="card__status">{props.status}</p>

      <div className="card__stats">
        <img className="card__star-img" src={star} alt="" />
        <p className="card__rating">{props.rating}</p>
        <p className="card__rating-count">({props.ratingCount})</p>
        <p>•</p>
        <p className="card__country">{props.country}</p>
      </div>

      <p className="card__title">{props.title}</p>
      <p className="card__price">
        <span>From ${props.price} </span>/ person
      </p>
    </div>
  )
}
