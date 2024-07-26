import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">My App</h1>
        <nav className="mt-2">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to My App</h2>
        <p className="mb-4">This is a bare-bones application that you can modify and build upon.</p>
        <p>Start by editing this page or adding new routes in the nav-items.jsx file.</p>
      </main>
      
      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
