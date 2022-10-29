import { ReactNode } from "react";
interface Container {
  children: ReactNode;
  props?: string;
}

function Container({ children, props }: Container) {
  return (
    <div
      className={`px-1 sm:px-4 md:px-7 lg:px-10 xl:px-16 2xl:px-32 ${props}`}
    >
      {children}
    </div>
  );
}

export default Container;
