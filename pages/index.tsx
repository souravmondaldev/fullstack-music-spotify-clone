import GradientLayout from "../components/gradientLayout";

const Home = () => {
  return (
    <GradientLayout
      image="https://images.unsplash.com/photo-1587778082149-bd5b1bf5d3fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NDUyNDk0fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
      color="green"
      roundImage
      title="Sourav Mondal"
      subtitle="profile"
      description="9 public playlist"
    >
      <div>home</div>
    </GradientLayout>
  );
};
export default Home;
