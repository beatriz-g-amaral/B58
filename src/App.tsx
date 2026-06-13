import Header from "./components/Header";
import Hero from "./components/Hero";
import AuthorityBar from "./components/AuthorityBar";
import ProjectGallery from "./components/ProjectGallery";
import Differentials from "./components/Differentials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AuthorityBar />
        <ProjectGallery />
        <Differentials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp
        phoneNumber="5551991121637"
        accountName="Studio B58"
        statusMessage="Normalmente responde na hora"
        chatMessage="Olá! Como podemos ajudar com o seu projeto de alto padrão?"
        avatar="https://via.placeholder.com/150/1f1f1f/cca848?text=B58" /* Link para o logo deles depois */
        buttonStyle={{ right: "2rem", bottom: "2rem" }}
      />
    </div>
  );
}

export default App;
