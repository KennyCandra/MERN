interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}


function CustomButton({ children, onClick, className }: CustomButtonProps) {
  return (
    <button className={className ? className : "bg-purple text-white px-4 py-2 rounded-md active:scale-95 transition-all duration-300"} onClick={onClick}>
      {children}
    </button>
)
}


export default CustomButton
