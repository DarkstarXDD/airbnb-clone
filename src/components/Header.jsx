import airbnbLogo from "../assets/airbnb-logo.png"

export default function Header() {
  return (
    <header>
      <img
        className="header__logo"
        src={airbnbLogo}
        alt="airbnb logo"
        width="82px"
        height="25.35px"
      />
    </header>
  )
}
