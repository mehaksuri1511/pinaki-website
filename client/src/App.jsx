import AppRoutes from "./routes/AppRoutes";
import FloatingButtons from "./components/common/FloatingButtons";
import GlobalEnrollmentPopup from "./components/common/GlobalEnrollmentPopup";

function App() {
  return (
    <>
      <AppRoutes />

      <FloatingButtons />

      <GlobalEnrollmentPopup />
    </>
  );
}

export default App;