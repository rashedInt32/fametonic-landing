interface TypeProps {
  children: React.ReactNode;
  className?: string;
}
export const Heading = ({ children, className }: TypeProps) => {
  return (
    <h1
      className={`font-urbanist text-[25px] lg:text-[35px] font-bold text-white leading-tight ${className}`}
    >
      {children}
    </h1>
  );
};

export const SubHeading = ({ children, className }: TypeProps) => {
  return (
    <h2
      className={`font-urbanist text-[25px] lg:text-[35px] font-bold text-[var(--secondary)] text-shadow leading-tight ${className}`}
    >
      {children}
    </h2>
  );
};

export const Paragraph = ({ children, className }: TypeProps) => {
  return (
    <p className={`font-figtree text-white font-medium text-xs ${className}`}>
      {children}
    </p>
  );
};
