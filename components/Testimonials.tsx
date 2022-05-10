import style from "../styles/Testimonials.module.css";
import Image from "next/image";
import Circle from "./Circle";
import { users } from "../data";

const Testimonials = () => {
  return (
    <div className={style.container}>
      <Circle top="-70vh" backgroundColor="darkblue" />
      <h1 className={style.title}>Testimonials</h1>
      <div className={style.wrapper}>
        {users.map((user) => (
          <div className={style.card} key={user.id}>
            <Image src={`/images/${user.logo}`} width="30" height="30" alt="" />
            <p className={style.comment}>&ldquo;{user.comment}&rdquo;</p>
            <div className={style.person}>
              <Image
                className={style.avatar}
                src={`/images/${user.avatar}`}
                width="45"
                height="45"
                objectFit="cover"
                alt=""
              />
              <div className={style.info}>
                <span className={style.username}>{user.name}</span>
                <span className={style.jobTitle}>{user.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
