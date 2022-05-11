import Circle from "../components/Circle";
import style from "../styles/Contact.module.css";

const Contact = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className={style.container}>
      <h1 className={style.title}>Get in Touch</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <input className={style.inputS} type="text" placeholder="Name" />
        <input className={style.inputS} type="text" placeholder="Phone" />
        <input className={style.inputL} type="text" placeholder="Email" />
        <input className={style.inputL} type="text" placeholder="Subject" />
        <textarea className={style.textArea} rows={6} placeholder="Message" />
        <button className={style.button}>SUBMIT</button>
      </form>
      <Circle
        backgroundColor="green"
        left="-40vh"
        top="-20vh"
        className={style.circle}
      />
      <Circle
        backgroundColor="yellow"
        right="-30vh"
        bottom="-60vh"
        className={style.circle}
      />
    </div>
  );
};

export default Contact;
