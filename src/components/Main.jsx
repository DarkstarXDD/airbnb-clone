import photoGrid from "../assets/images/photo-grid.png"
import cardData from "../data/data.js"
import Card from "./Card.jsx"

export default function Main() {
  const cards = cardData.map(function (currentCard) {
    return (
      <Card
        key={currentCard.id}
        img={currentCard.coverImg}
        imgAlt={currentCard.coverImg.replace(".png", "")} // Removed the extension and used the img file name as the alt text.
        rating={currentCard.stats.rating}
        ratingCount={currentCard.stats.reviewCount}
        location={currentCard.location}
        title={currentCard.title}
        price={currentCard.price}
        openSpots={currentCard.openSpots}
      />
    )
  })

  return (
    <main className="main">
      <div className="hero flex-column">
        <img
          className="hero__photo"
          src={photoGrid}
          alt="multiple random photos"
          width="384"
          height="224"
        />
        <h1 className="hero__heading">Online Experiences</h1>
        <p className="hero__text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
      <div className="cards__container">{cards}</div>
    </main>
  )
}
