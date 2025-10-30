import type { ContainerProps } from "../../interface";
import "./Container.css";

type ContainerProps = {
  type?: "default" | "small" | "smallest";
  children: React.ReactNode;
};

const Container = ({ children, type }: ContainerProps) => {
  return <div className={`${type} container`}>{children}</div>;
};

export default Container;
