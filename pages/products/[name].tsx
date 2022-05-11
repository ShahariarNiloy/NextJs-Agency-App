import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { data } from "../../data";
import styles from "../../styles/Products.module.css";
const Products = ({ product }: any) => {
  console.log(product);
  return (
    <div className={styles.container}>
      <Head>
        <title>Digital Design for Your Product</title>
        <meta
          name="description"
          content="Web Design, App Development, Content Creation Agency Near NY"
        />
      </Head>
      <div className={styles.cardL}>
        {product.images.map((img: any) => (
          <div className={styles.imgContainer} key={img.id}>
            <Image
              src={"/images/" + img.url}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
              alt=""
            />
          </div>
        ))}
      </div>
      <div className={styles.cardS}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.desc}>{product.longDesc}</p>
        <button className={styles.button}>
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
};

export const getStaticPaths = () => {
  const products = data;
  const paths = products?.map((item: any) => {
    return {
      params: { name: item?.name },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const name = context.params.name;
  const product = data.filter((item: any) => item.name === name)[0];
  return {
    props: { product },
  };
};

export default Products;
