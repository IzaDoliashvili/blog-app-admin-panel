import { Outlet } from "react-router-dom";
import { Header } from "../../components/base/header";
import { Footer } from "../../components/base/footer";
import { PageContainer } from "../../components/base/page-conteiner";



const DashboardLayout = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
    </>
  );
};

export default DashboardLayout;