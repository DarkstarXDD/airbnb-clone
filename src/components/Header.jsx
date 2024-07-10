import airbnbLogo from "../assets/images/airbnb-logo.png"

export default function Header() {
  return (
    <header className="header flex-column">
      <img
        className="header__logo"
        src={airbnbLogo}
        alt="airbnb"
        width="80"
        height="24"
      />
    </header>
  )
}
