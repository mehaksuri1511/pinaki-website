import AppRoutes from "./routes/AppRoutes";
import ThemeToggle from "./components/common/ThemeToggle";
import FloatingButtons from "./components/common/FloatingButtons";

function App() {
  return (
    <>
      <AppRoutes />
      <FloatingButtons />
      <ThemeToggle />
    </>
  );
}

export default App;