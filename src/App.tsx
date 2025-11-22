
import { useState, useMemo } from "react";
import { Header } from "./components/Header";
import { FilterSidebar, type FilterState } from "./components/FilterSidebar";
import { RacketCard } from "./components/RacketCard";
import { RacketDetail } from "./components/RacketDetail";
import { RACKET_DATA, type Racket } from "./data/rackets";
import { Input } from "./components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "./components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("featured");
  const [filters, setFilters] = useState<FilterState>({
    brands: [],
    maxPrice: 300,
    weights: [],
    balances: [],
    stiffness: []
  });
  const [selectedRacket, setSelectedRacket] = useState<Racket | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const filteredRackets = useMemo(() => {
    const result = RACKET_DATA.filter(racket => {
      const matchesSearch = racket.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        racket.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        racket.series.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesBrand = filters.brands.length === 0 || filters.brands.includes(racket.brand);
      const matchesPrice = racket.price <= filters.maxPrice;
      const matchesWeight = filters.weights.length === 0 || filters.weights.includes(racket.weight);
      const matchesBalance = filters.balances.length === 0 || filters.balances.includes(racket.balance);
      const matchesStiffness = filters.stiffness.length === 0 || filters.stiffness.includes(racket.stiffness);

      return matchesSearch && matchesBrand && matchesPrice && matchesWeight && matchesBalance && matchesStiffness;
    });

    return result.sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "name-asc") return a.name.localeCompare(b.name);
      return 0; // Featured/Default
    });
  }, [searchQuery, filters, sortOption]);

  const handleRacketClick = (racket: Racket) => {
    setSelectedRacket(racket);
    setDetailOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans text-slate-900 pb-20">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12 text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Find Your Perfect <span className="text-blue-600">Match</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-lg mx-auto">
            Compare specs, analyze features, and find the best badminton racket for your playstyle.
          </p>

          <div className="relative mt-8 max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <Input
              className="pl-12 h-14 text-lg bg-white border-slate-200 shadow-lg shadow-slate-200/50 rounded-full focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-shadow hover:shadow-xl"
              placeholder="Search by name, brand, or style..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Sidebar (Desktop) */}
          <aside className="hidden md:block w-64 flex-shrink-0 sticky top-24">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </aside>

          {/* Mobile Filter Trigger */}
          <div className="md:hidden w-full mb-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full flex gap-2 h-12 border-slate-200 bg-white text-slate-700 shadow-sm">
                  <SlidersHorizontal className="h-4 w-4" /> Filter Results
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px] overflow-y-auto bg-white">
                <div className="pt-6">
                  <FilterSidebar filters={filters} setFilters={setFilters} className="border-none shadow-none p-0" />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Results Grid */}
          <div className="flex-1 w-full">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-slate-500 font-medium">
                Showing <span className="text-slate-900 font-bold">{filteredRackets.length}</span> rackets
              </p>
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-[180px] bg-white border-slate-200">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="name-asc">Name: A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {filteredRackets.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-500">
                {filteredRackets.map(racket => (
                  <RacketCard key={racket.id} racket={racket} onClick={handleRacketClick} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-200">
                <div className="mx-auto w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-slate-300" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">No rackets found</h3>
                <p className="text-slate-500 max-w-xs mx-auto mb-6">We couldn't find any rackets matching your specific criteria.</p>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-100 hover:bg-blue-50"
                  onClick={() => {
                    setFilters({ brands: [], maxPrice: 300, weights: [], balances: [], stiffness: [] });
                    setSearchQuery("");
                  }}
                >
                  Clear filters & search
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <RacketDetail
        racket={selectedRacket}
        open={detailOpen}
        onOpenChange={setDetailOpen}
      />
    </div>
  );
}
