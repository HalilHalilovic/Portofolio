
import Style from "./heroSection.module.css";

function HeroSection(params) {
  return <div className={Style.MainWrap}>
    <div className={Style.Content}>
        <p className={Style.TextContent}>Name</p>
        <p className={Style.TextContent}>LastName</p>
        <h3 className={Style.TextContent}>Proffesion</h3>
    </div>
  </div>;
}

export default HeroSection;
