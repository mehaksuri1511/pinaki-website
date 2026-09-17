import AppRoutes from "./routes/AppRoutes";
import FloatingButtons from "./components/common/FloatingButtons";
import { AuthProvider } from "./context/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
      <FloatingButtons />
    </AuthProvider>
  );
}

export default App;