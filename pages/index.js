import Navigation from "../components/Navigation";
import Image from "next/image";
const Home = () => {
  const myLoader = ({ src, width, quality }) => {
    return `/under_maintenance.png?w=${width}&q=${quality || 75}`;
  };
  return (
    <article>
      <section>
        <Image
          loader={myLoader}
          src="/under_maintenance.png"
          alt="Picture of the author"
          width={666}
          height={492}
        />
      </section>
    </article>
  );
};

export default Home;
