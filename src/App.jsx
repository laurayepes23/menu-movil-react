import Navbar from "./Navbar";
{/* componente principal */}
function App() {
  return (
    <div>
      <Navbar />

      <main className="text-center mt-10">
        <h1 className="text-3xl font-bold">Bienvenido a Mi App</h1>
        <p className="mt-4 text-gray-900">
          Aquí inicia tu contenido principal.
        </p>
      </main>
    </div>
  );
}

export default App;

