import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Story from "./components/Story/Story";
import Menu from "./components/Menu/Menu";
import ChefTable from "./components/ChefTable/ChefTable";
import Ambience from "./components/Ambience/Ambience";
import Testimonials from "./components/Testimonials/Testimonials";
import Reservation from "./components/Reservation/Reservation";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Menu />
      <ChefTable />
      <Ambience />
      <Testimonials />
      <Reservation />
      <Footer />
    </>
  );
}

export default App;