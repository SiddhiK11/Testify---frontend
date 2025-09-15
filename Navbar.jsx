export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-green-400 px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-green-400 rounded-sm flex items-center justify-center text-black font-bold">T</div>
        <h1 className="text-xl font-semibold">Testify Frontend</h1>
      </div>

      <div className="text-sm text-gray-400">Input → URL → Screenshot</div>
    </nav>
  );
}
