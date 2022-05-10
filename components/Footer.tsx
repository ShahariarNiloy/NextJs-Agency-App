import style from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.cardL}>
        <h1 className={style.title}>AV0CAD0 CREATIVES.</h1>
        <h1 className={style.linkTitle}>
          <Link href="/contact" className={style.link} passHref>
            <>
              <span className={style.linkText}>WORK WITH US</span>
              <Image
                src={"/images/link.png"}
                width="40px"
                height="40px"
                alt=""
              />
            </>
          </Link>
        </h1>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          223, BACKER STREET,
          <br /> LONDON
        </div>
        <div className={style.cardItem}>
          CONTACT@shahriar.niloy
          <br /> 111_438_5244
        </div>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          FOLLOW US:
          <br /> __FB __IN __BE __TW
        </div>
        <div className={style.cardItem}>
          © 2022 Shahariar Niloy,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
