import "./styles/global.css";
import AppLayout from "./AppLayout";
import AppRegister from "./AppRegister";
import AppRouter from "./routes/AppRouter";

export default function App() {
  return (
    <AppRegister>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </AppRegister>
  );
}
