import { ReactNode } from "react";
interface Container {
  children: ReactNode;
  props?: string;
}

function Container({ children, props }: Container) {
  return (
    <div
      className={`px-4 sm:px-7 md:px-12 lg:px-16 xl:px-22 2xl:px-32 ${props}`}
    >
      {children}
    </div>
  );
}

export default Container;
