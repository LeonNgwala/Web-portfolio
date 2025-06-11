
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-16">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </div>
      <Footer />
    </>
  );
};

export default Index;
