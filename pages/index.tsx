import ArtistCard from "../components/artistCards";
import GradientLayout from "../components/gradientLayout";
import prisma from "../lib/prisma";

const Home = ({ artists }) => {
  return (
    <GradientLayout
      image="https://i.pinimg.com/474x/eb/c8/82/ebc882ee454681ad38fcf9380342bc03.jpg"
      color="green"
      roundImage
      title="Sourav Mondal"
      subtitle="profile"
      description="9 public playlist"
    >
      <ArtistCard
        artists={artists}
        image="https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg?w=2000"
        cardHeading="Top artists this month"
        cardSubheading="Top artists visible to you"
        cardType="Artist"
      />
      <ArtistCard
        artists={artists}
        image="https://img.freepik.com/free-vector/cute-cat-yoga-pose-cartoon-illustration_138676-2791.jpg?w=2000"
        cardHeading="Top artists you may like"
        cardSubheading="According to your music preference"
        cardType="Artist"
      />
    </GradientLayout>
  );
};
export default Home;
export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  return {
    props: { artists },
  };
};
