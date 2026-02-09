import SidebarHeading from "../../../components/SidebarHeading";

const Manufacturers = () => {
  return (
    <div>
      <SidebarHeading>Manufacturers</SidebarHeading>
      <div className="space-y-5">
        <label
          htmlFor="i1"
          className="flex items-center justify-between text-sm font-semibold cursor-pointer hover:text-gold transition-all hover:border-gold text-dark-gray border-b border-dashed pb-1 border-[#D8D8D8]"
        >
          <div className="flex items-center gap-3">
            <input className="w-4 h-4" id="i1" type="checkbox" />
            <span>Juice</span>
          </div>
          <span>(06)</span>
        </label>
        <label
          htmlFor="i2"
          className="flex items-center justify-between text-sm font-semibold cursor-pointer hover:text-gold transition-all hover:border-gold text-dark-gray border-b border-dashed pb-1 border-[#D8D8D8]"
        >
          <div className="flex items-center gap-3">
            <input className="w-4 h-4" id="i2" type="checkbox" />
            <span>Smoothie </span>
          </div>
          <span>(06)</span>
        </label>
        <label
          htmlFor="i3"
          className="flex items-center justify-between text-sm font-semibold cursor-pointer hover:text-gold transition-all hover:border-gold text-dark-gray border-b border-dashed pb-1 border-[#D8D8D8]"
        >
          <div className="flex items-center gap-3">
            <input className="w-4 h-4" id="i3" type="checkbox" />
            <span>Nuts</span>
          </div>
          <span>(06)</span>
        </label>
        <label
          htmlFor="i4"
          className="flex items-center justify-between text-sm font-semibold cursor-pointer hover:text-gold transition-all hover:border-gold text-dark-gray border-b border-dashed pb-1 border-[#D8D8D8]"
        >
          <div className="flex items-center gap-3">
            <input className="w-4 h-4" id="i4" type="checkbox" />
            <span>Fruits</span>
          </div>
          <span>(06)</span>
        </label>
      </div>
    </div>
  );
};
export default Manufacturers;
