
import { Slider } from "./ui/slider";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { BRANDS, WEIGHTS, BALANCES, STIFFNESS } from "../data/rackets";
import { X } from "lucide-react";

export interface FilterState {
  brands: string[];
  maxPrice: number;
  weights: string[];
  balances: string[];
  stiffness: string[];
}

interface FilterSidebarProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  onClose?: () => void; // For mobile
  className?: string;
}



export function FilterSidebar({ filters, setFilters, onClose, className }: FilterSidebarProps) {

  //토글 배열 반환 함수
  function toggleArrayFilter<K extends keyof FilterState>(
    key: K,
    value: string,
  ) {
    const current = filters[key] as string[];

    const newArr = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value];

    setFilters({
      ...filters,
      [key]: newArr,
    });
  }

  //필터 초기화
  const clearFilters = () => {
    setFilters({
      brands: [],
      maxPrice: 300,
      weights: [],
      balances: [],
      stiffness: []
    });
  };

  return (
    <div className={`bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-fit ${className}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-lg text-slate-900">검색 조건</h2>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={clearFilters} className="text-slate-500 h-8 px-2 text-xs hover:text-blue-600">
            초기화
          </Button>
          {onClose && (
            <Button variant="ghost" size="icon" onClick={onClose} className="md:hidden h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <Label className="text-sm font-semibold text-slate-700">최대 가격</Label>
          <span className="text-sm font-medium text-blue-600">{filters.maxPrice.toLocaleString()}원</span>
        </div>
        <Slider
          value={[filters.maxPrice]}
          max={500000}
          step={10}
          onValueChange={(vals) => setFilters({ ...filters, maxPrice: vals[0] })}
          className="py-2"
        />
      </div>

      <Separator className="my-6" />

      {/* Brands */}
      <div className="mb-6">
        <Label className="text-sm font-semibold text-slate-700 mb-3 block">브랜드</Label>
        <div className="space-y-2">
          {BRANDS.map(brand => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={filters.brands.includes(brand)}
                onCheckedChange={() => toggleArrayFilter("brands", brand)}
              />
              <label
                htmlFor={`brand-${brand}`}
                className="text-sm text-slate-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-6" />

      {/* Weight */}
      <div className="mb-6">
        <Label className="text-sm font-semibold text-slate-700 mb-3 block">무게</Label>
        <div className="flex flex-wrap gap-2">
          {WEIGHTS.map(weight => (
            <button
              key={weight}
              onClick={() => toggleArrayFilter("weights", weight)}
              className={`px-3 py-1.5 text-xs rounded-full border transition-all ${filters.weights.includes(weight)
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                }`}
            >
              {weight}
            </button>
          ))}
        </div>
      </div>

      {/* Balance */}
      <div className="mb-6">
        <Label className="text-sm font-semibold text-slate-700 mb-3 block">밸런스</Label>
        <div className="flex flex-wrap gap-2">
          {BALANCES.map(bal => (
            <button
              key={bal}
              onClick={() => toggleArrayFilter("balances", bal)}
              className={`px-3 py-1.5 text-xs rounded-full border transition-all ${filters.balances.includes(bal)
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                }`}
            >
              {bal}
            </button>
          ))}
        </div>
      </div>

      {/* Stiffness */}
      <div className="mb-2">
        <Label className="text-sm font-semibold text-slate-700 mb-3 block">샤프트 강성</Label>
        <div className="flex flex-wrap gap-2">
          {STIFFNESS.map(s => (
            <button
              key={s}
              onClick={() => toggleArrayFilter("stiffness", s)}
              className={`px-3 py-1.5 text-xs rounded-full border transition-all ${filters.stiffness.includes(s)
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
