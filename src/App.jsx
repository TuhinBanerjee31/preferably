import "./App.css";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyList from './components/CompanyList'
import Category from './components/Category'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="font-poppins py-10 px-8">
        <div className="bg-[#DEECFF] rounded-md max-w-screen-lg h-72 mx-auto p-8">
          <div className="bg-white p-5 h-full w-full rounded-md text-center flex flex-col justify-center items-center gap-4">
            <h2 className="text-2xl md:text-4xl font-medium tracking-wider text-[#4a4a4a]">
              Company Ratings from Real Employees
            </h2>
            <h4 className="text-sm md:text-base">
              Discover how various departments rate their company's Leadership,
              Compensation, Team, Environment & Outlook.
            </h4>
          </div>
        </div>
      </div>
      <CompanyList />
      <Category />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
