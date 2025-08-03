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
    <ul className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`flex items-start space-x-3 ${itemClassName}`}
        >
          <span className="font-figtree text-base font-semibold text-white leading-[22px]">
            <span className="pr-2">✨</span> {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
