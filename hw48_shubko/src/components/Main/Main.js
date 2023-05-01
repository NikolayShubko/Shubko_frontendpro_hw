import image1 from "../../images/1.jpg";
import image2 from "../../images/2.jpg";
import image3 from "../../images/3.jpg";
import "./Main.css";
function Main() {
  return (
    <main>
      <div>
        <ul className="main-list">
          <li className="list-item">
            <img className="image" src={image1} alt="Eagle" />
            <p>
              Eagles are large birds of prey that belong to the family
              Accipitridae. They are known for their sharp talons, strong beaks,
              and excellent eyesight, which make them highly effective hunters.
            </p>
            <a href="/#" className="main-link">
              Read more
            </a>
          </li>
          <li className="list-item">
            <img className="image" src={image2} alt="Red Panda" />
            <p>
              Red pandas are small, arboreal mammals native to the eastern
              Himalayas and southwestern China. They are sometimes called
              "lesser pandas" or "firefoxes" and are not related to giant
              pandas.
            </p>
            <a href="/#" className="main-link">
              Read more
            </a>
          </li>
          <li className="list-item">
            <img className="image" src={image3} alt="Fox" />
            <p>
              Foxes are small to medium-sized carnivorous mammals belonging to
              the family Canidae. There are around 37 species of foxes, found on
              every continent except for Antarctica.
            </p>
            <a href="/#" className="main-link">
              Read more
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
export default Main;
