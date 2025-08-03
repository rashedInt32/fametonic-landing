export default function SalesBanner() {
  return (
    <div className="w-full bg-gradient-to-l to-[var(--primary)] from-[var(--secondary-gradient)] relative">
      <div className="mx-auto p-5 md:p-[10px] text-center bg-gradient-to-r from-rose-600 via-indigo-700/30 to-cyan-400">
        <p className="lg:text-[22px] text-[16px] font-figtree font-extrabold leading-none">
          <span className="text-[var(--secondary)] uppercase">
            🚀 FRESH BEGINNINGS SALE:
          </span>
          <span className="text-white text-[14px] md:text-[22px]">
            {" "}
            Extra 25% OFF, Limited Spots - start your journey today!
          </span>
        </p>
      </div>
    </div>
  );
}
