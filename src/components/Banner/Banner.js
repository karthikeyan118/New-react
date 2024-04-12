import "./Banner.css";
import vegBag from "../../assets/vegetables-bag-12.webp";
function Banner() {
  return (
    <>
      <section className="banner-block">
        <div className="container banner-inner">
          <div className="banner-left">
            <p className="product-head">100% ORGANIC PRODUCT</p>
            <h2 className="product-content">We care about your health</h2>
            <p>
              Wand crossbow phoenix levicorpus sirius. Easy raw-steak half-blood
              petrified veela house lupin it.
            </p>
            <button className="banner-btn">SHOP NOW</button>
          </div>
          <div className="banner-right">
            <img src={vegBag} alt="vegetable bag" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
