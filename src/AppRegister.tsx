import { ReactNode } from "react";

type AppRegisterProps = { children: ReactNode };

export default function AppRegister({ children }: AppRegisterProps) {
  return <div>{children}</div>;
}
