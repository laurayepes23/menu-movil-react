import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white p-5">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        
        <h1 className="text-xl font-bold">Mi App</h1>
        <ul className="hidden md:flex gap-x-10">
          <li>
            <a href="#" className="hover:underline">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Servicios
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contacto
            </a>
          </li>
        </ul>

  
        <button
          className="md:hidden text-4xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <ul className="md:hidden mt-5 flex flex-col gap-y-5">
          <li>
            <a href="#" className="hover:text-gray-250">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-250">
              Servicios
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-250">
              Contacto
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
