import "./BookStoreHomeIMG.css"
import bgCloud from "../../assets/BGCloud.png"
// import fgChildren from "../../assets/FGChildren.png"
import fgChildren from "../../assets/2.png"

const BookStoreHomeIMG = () => {
  return (
    <div className="homepageimg">
        <img src={bgCloud} alt="Blue Clouds" className="firstimg z-10"/>
        <img src={fgChildren} alt="Children" className="secondimg" />
    </div>
  )
}

export default BookStoreHomeIMG