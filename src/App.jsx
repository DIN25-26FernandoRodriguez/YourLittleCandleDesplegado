import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import Layout from "./Componentes/Layout";
import ScrollToTop from "./Componentes/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <Layout>
          <ScrollToTop />
          <AppRoutes />
        </Layout>
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
