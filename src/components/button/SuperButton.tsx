import s from "./SuperButton.module.css";
export type SuperButtonPropsType = {
  title: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};

export const SuperButton: React.FC<SuperButtonPropsType> = ({
  title,
  onClick,
  className,
  disabled,
}) => {
  return <button className={`${s.superButton} ${className}`} onClick={onClick}>{title}</button>;
};
