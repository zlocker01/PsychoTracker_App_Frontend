import { FormPatients } from "../components/FormPatients";
import { ListPatients } from "../components/ListPatients";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const AdminPatients = () => {
  return (
    <div className="layOut">
      <div className="header">
        <Header />
      </div>
      <div className="form-patiens">
        <FormPatients />
      </div>
      <div className="cards-patiens">
        <ListPatients />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
