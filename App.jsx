import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-200">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
