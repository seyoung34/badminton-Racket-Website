
import type { Racket } from "../data/rackets";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

interface RacketDetailProps {
  racket: Racket | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RacketDetail({ racket, open, onOpenChange }: RacketDetailProps) {
  if (!racket) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-white gap-0">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-slate-50 p-8 flex items-center justify-center relative">
            <img
              src={racket.image}
              alt={racket.name}
              className="max-h-[400px] w-auto object-contain mix-blend-multiply"
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-white text-slate-900 shadow-sm hover:bg-white border border-slate-100">
                {racket.series}
              </Badge>
            </div>
          </div>
          <div className="p-8 flex flex-col h-full">
            <div className="mb-auto">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{racket.brand}</span>
              </div>
              <DialogHeader className="mb-4 text-left">
                <DialogTitle className="text-3xl font-bold text-slate-900">{racket.name}</DialogTitle>
                <DialogDescription className="text-lg font-medium text-slate-500 hidden">
                  {racket.series} Series
                </DialogDescription>
              </DialogHeader>

              <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                {racket.description}
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-sm text-slate-500">Weight</span>
                  <span className="font-semibold text-slate-900 text-sm">{racket.weight}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-sm text-slate-500">Balance</span>
                  <span className="font-semibold text-slate-900 text-sm">{racket.balance}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-sm text-slate-500">Stiffness</span>
                  <span className="font-semibold text-slate-900 text-sm">{racket.stiffness}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-sm text-slate-500">Price</span>
                  <span className="font-bold text-slate-900 text-xl">${racket.price}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {racket.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs font-normal bg-slate-100 text-slate-600">
                    <Check className="w-3 h-3 mr-1 text-blue-500" /> {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Add to Compare</Button>
              <Button variant="outline" className="flex-1 border-slate-200 hover:bg-slate-50">Find Retailer</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
