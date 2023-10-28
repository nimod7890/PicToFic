import AppLayout from "./AppLayout";
import AppRegister from "./AppRegister";
import Header from "./components/base/header/Header";
import AppRouter from "./routes/AppRouter";

export default function App() {
  return (
    <AppRegister>
      <AppLayout>
        <Header/>
        <AppRouter/>
      </AppLayout>
    </AppRegister>
  );
}
