import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Mi App</h1>

        {/* Menú en pantallas grandes */}
        <ul className="hidden md:flex gap-x-6">
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

        {/* Botón Hamburguesa en pantallas pequeñas */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <ul className="md:hidden mt-4 flex flex-col gap-y-2">
          <li>
            <a href="#" className="hover:text-gray-200">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              Servicios
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              Contacto
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
