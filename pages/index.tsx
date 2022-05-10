import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import { data } from "../data";
import styles from "../styles/Home.module.css";

export default function Home({ services }: any) {
  console.log(services);
  return (
    <div className={styles.container}>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
