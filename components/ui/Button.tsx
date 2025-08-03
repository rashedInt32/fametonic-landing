interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center bg-[var(--primary)] button-shadow text-white text-[20px] font-bold uppercase rounded-[10px] px-5 cursor-pointer w-full lg:max-w-[313px] h-[40px] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
