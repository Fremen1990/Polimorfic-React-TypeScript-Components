import {ElementType, ReactNode} from "react";

export const Text = <C extends ElementType>({
  as,
  children,
}: {
  as?: C;
  children: ReactNode;
}) => {
  const Component = as || "span";

  return <Component>{children}</Component>;
};
