interface ListProps {
  items: string[];
  className?: string;
  itemClassName?: string;
}

export const List = ({
  items,
  className = "",
  itemClassName = "",
}: ListProps) => {
  return (
    <ul className={`space-y-[10px] ${className} py-[10px]`}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`flex items-start space-x-2 ${itemClassName}`}
        >
          <span className="font-figtree text-base font-semibold text-white flex items-center">
            <span className="mr-2 text-xl">✨</span> {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
