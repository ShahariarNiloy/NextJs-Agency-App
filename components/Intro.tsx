import style from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <Circle backgroundColor="#0ff507" top="-45vh" left="-45vh" />
        <h1 className={style.title}>
          <span className={style.brandName}>AV0CAD0</span> DIGITAL PRODUCT
          AGENCY
        </h1>
        <p className={style.desc}>
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <button className={style.button}>DISCOVER</button>
      </div>
      <div className={style.card}>
        <Circle backgroundColor="#01c686" top="10vh" right="-35vh" />
        <Image
          src={"/images/Avocado.png"}
          layout="fill"
          alt=""
          className={style.heroImage}
        />
      </div>
    </div>
  );
};

export default Intro;
