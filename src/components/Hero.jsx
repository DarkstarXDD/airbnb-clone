import photoGrid from "../assets/photo-grid.png"
import katieZaferes from "../assets/katie-zaferes.png"
import Card from "../components/Card"

export default function Hero() {
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

      <Card
        img={katieZaferes}
        imgAlt="Katie Zaferes"
        status="SOLD OUT"
        rating="5.0"
        ratingCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </main>
  )
}
