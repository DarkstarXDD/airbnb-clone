import photoGrid from "../assets/photo-grid.png"
import cardData from "../data/data.js"
import Card from "../components/Card"

export default function Hero() {
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
    <main className="hero">
      <img
        className="hero__photo"
        src={photoGrid}
        alt="multiple random photos"
        width="396px"
        height="232px"
      />

      <h1 className="hero__heading">Online Experiences</h1>

      <p className="hero__text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>

      <div className="cards__container">{cards}</div>
    </main>
  )
}
