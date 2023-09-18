import Pattern from "@/components/Pattern";
import Navbar from "@/components/Navbar";
import SearchField from "@/components/SearchField";

export default function Rentals() {
  return (
    <Pattern>
      <Navbar />
      <div className="mx-6">
        <span className="flex justify-between w-full">
          <h1 className="font-semibold text-2xl">All rentals</h1>
          <SearchField/>
        </span>
      </div>
    </Pattern>
  );
}
