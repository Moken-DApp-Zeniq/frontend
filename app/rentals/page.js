import Pattern from "@/components/Pattern";
import Navbar from "@/components/Navbar";
import SearchField from "@/components/SearchField";
import CardList from "@/components/CardList";

export default function Rentals() {
  return (
    <Pattern>
      <Navbar />
      <div className="px-6">
        <span className="flex justify-between">
          <h1 className="font-semibold text-2xl pb-5">All rentals</h1>
          <SearchField/>
        </span>
        <CardList/>
      </div>
    </Pattern>
  );
}
