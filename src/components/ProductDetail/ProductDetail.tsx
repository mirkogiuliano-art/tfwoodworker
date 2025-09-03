import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Share2, Star, ChevronLeft, ChevronRight } from "lucide-react";

//TODO: cambia nome al componete (Productdetail sia .tsx sia .css sono un altra versione, tenere po questa o quelle due )
// Productdetail è più easy e più simile alle altre pagine 


// --- Types ---
export type Media = { id: string; src: string; alt: string };
export type Variant = { id: string; name: string; price: number; compareAtPrice?: number; inStock: boolean };
export type Spec = { label: string; value: string };

export type Product = {
  id: string;
  title: string;
  subtitle?: string;
  vendor?: string;
  rating?: number;
  ratingCount?: number;
  priceFrom?: number;
  media: Media[];
  variants: Variant[];
  highlights?: string[];
  specs?: Spec[];
  description?: string;
  materials?: string;
  dimensions?: string;
  care?: string;
  shippingInfo?: string;
  returnsInfo?: string;
  warrantyInfo?: string;
};

// --- Mock data (puoi sostituirlo con fetch al tuo backend) ---
const mock: Product = {
  id: "cutter-bench",
  title: "Cutter Bench",
  subtitle: "Minimal bench in solid teak or oak",
  vendor: "Skagerak",
  rating: 3.8,
  ratingCount: 128,
  media: [
    { id: "1", src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop", alt: "Bench angle view" },
    { id: "2", src: "https://images.unsplash.com/photo-1555049047-4899b1f9ee78?q=80&w=1200&auto=format&fit=crop", alt: "Bench detail" },
  ],
  variants: [
    { id: "oak-small", name: "Oak / 100 cm", price: 449, compareAtPrice: 499, inStock: true },
    { id: "teak-small", name: "Teak / 100 cm", price: 529, inStock: true },
    { id: "black-small", name: "Black Oak / 100 cm", price: 469, inStock: false },
  ],
  highlights: ["Iconic Danish design", "Outdoor-ready teak option", "FSC® certified wood"],
  specs: [
    { label: "Width", value: "100–120 cm" },
    { label: "Depth", value: "40 cm" },
    { label: "Height", value: "43.5 cm" },
  ],
  description:
    "The Cutter Bench è una panca raffinata e minimale, perfetta dall’ingresso al bagno. Le sue doghe e la giunzione precisa celebrano l’artigianato scandinavo mantenendo leggerezza visiva.",
  materials: "Legno massello di quercia o teak. Finitura ad olio o vernice opaca.",
  dimensions: "100/120 × 40 × 43.5 cm (L × P × H). Altezza seduta 43.5 cm.",
  care: "Pulire con panno umido. Ri-oliare il teak periodicamente se usato all’aperto.",
  shippingInfo: "Spedizione in 3–5 giorni lavorativi dall’UE.",
  returnsInfo: "Reso entro 30 giorni.",
  warrantyInfo: "Garanzia 2 anni.",
};

// --- Helpers ---
const currency = (n: number) => new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 2 }).format(n);

function Stars({ value = 0 }: { value?: number }) {
    const full = Math.floor(value);         // stelle intere
    const half = value - full >= 0.5;       // mezza stella sì/no
  
    return (
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="relative inline-flex">
            {i < full ? (
              // stella piena con bordo
              <Star className="h-4 w-4 text-[#8B4513] fill-[#8B4513]" />
            ) : i === full && half ? (
              // mezza stella: contorno + mezzo riempimento
              <span className="relative">
                <Star className="h-4 w-4 text-[#8B4513]" />
                <span className="absolute inset-0 overflow-hidden w-1/2">
                  <Star className="h-4 w-4 text-[#8B4513] fill-[#8B4513]" />
                </span>
              </span>
            ) : (
              // stella vuota
            <Star className="h-4 w-4 text-[#8B4513]" /> 
            )}
          </span>
        ))}
      </div>
    );
  }
  
  

// --- Main component ---
export default function ProductDetailPage({ product = mock }: { product?: Product }) {  
    const [index, setIndex] = useState<number>(0);   // indice immagine attiva
    const [variantId, setVariantId] = useState<string>(product.variants[0]?.id);
    const [qty, setQty] = useState<number>(1);
  
    const active = product.media[index];
    const variant = useMemo(() => product.variants.find((v) => v.id === variantId)!, [product, variantId]);
    const price = variant?.price ?? product.priceFrom ?? 0;
  
    const next = () => setIndex((prev) => (prev + 1) % product.media.length);
    const prev = () => setIndex((prev) => (prev - 1 + product.media.length) % product.media.length);

  return (
    <div className="min-h-screen bg-[#fff8f0] text-[#2e1a0f]">
        <div className="mx-auto max-w-7xl px-4 py-8 grid lg:grid-cols-2 gap-10">
            {/* Gallery */}
            <div className="relative container">
                <Card className="overflow-hidden rounded-2xl border border-[#e8dfd0] p-0">  
                    <CardContent className="p-0 relative">
                    <motion.img
                        key={active.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25 }}
                        src={active.src}
                        alt={active.alt}
                        className="aspect-square w-full object-cover"
                    />
                    {/* Frecce */}
                    <button
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/85 rounded-full p-2 shadow">
                        <ChevronLeft className="h-10 w-10 text-[#2f2f2f]" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/85 rounded-full p-2 shadow">
                        <ChevronRight className="h-10 w-10 text-[#2f2f2f]" />
                    </button>
                    </CardContent>
                </Card>
            <div className="mt-3 grid grid-cols-4 gap-2">
                {product.media.map((m, i) => (
                <button
                    key={m.id}
                    onClick={() => setIndex(i)}
                    className={cn(
                    "rounded-xl overflow-hidden border",
                    index === i ? "border-[#8B4513]" : "border-transparent hover:border-[#ffdca8]"
                    )}
                >
                    <img src={m.src} alt={m.alt} className="aspect-square w-full object-cover" />
                </button>
                ))}
            </div>
        </div>


        {/* Details */}
        <div>
          <h1 className="text-4xl font-semibold text-[#8B4513]">{product.title}</h1>
          {product.subtitle && <p className="mt-1 text-[#5c2e0f]">{product.subtitle}</p>}

          <div className="mt-3 flex items-center gap-3">
            <Stars value={product.rating} />
            <span className="text-sm text-[#5c2e0f]">{product.rating} ({product.ratingCount})</span>
          </div>

          <Separator className="my-6 bg-[#e8dfd0]" />

          <div className="space-y-4">
            <div>
              <Label className="mb-2 block text-[#8B4513]">Variante</Label>
              <div className="grid grid-cols-2 gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVariantId(v.id)}
                    disabled={!v.inStock}
                    className={cn(
                      "rounded-xl border px-3 py-2 text-left transition",
                      variantId === v.id ? "border-[#8B4513] ring-2 ring-[#ffdca8]" : "border-[#e8dfd0] hover:border-[#8B4513]",
                      !v.inStock && "opacity-50"
                    )}
                  >
                    <div className="text-sm font-medium">{v.name}</div>
                    <div className="text-xs text-[#5c2e0f]">{currency(v.price)}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-end gap-3">
              <div className="w-28">
                <Label htmlFor="qty" className="text-[#8B4513]">Quantità</Label>
                <Input
                  id="qty"
                  type="number"
                  min={1}
                  value={qty}
                  onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
                  className="border-[#e8dfd0] focus-visible:ring-[#8B4513]"
                />
              </div>
              <div className="ml-auto text-right">
                {variant?.compareAtPrice && (
                  <div className="text-sm line-through text-[#5c2e0f]">{currency(variant.compareAtPrice)}</div>
                )}
                <div className="text-3xl font-semibold text-[#8B4513]">{currency(price)}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button size="lg" className="h-12 rounded-2xl px-6 bg-[#8B4513] hover:bg-[#5c2e0f] text-white">Aggiungi al carrello</Button>
              <Button variant="outline" size="lg" className="h-12 rounded-2xl px-6 border-[#8B4513] text-[#8B4513] hover:bg-[#ffdca8]">Acquista ora</Button>
              <button className="ml-auto inline-flex items-center gap-2 text-sm text-[#8B4513] hover:underline"><Share2 className="h-4 w-4" />Condividi</button>
            </div>

            <Separator className="my-8 bg-[#e8dfd0]" />

            <Tabs defaultValue="descrizione">
              <TabsList className="grid w-full grid-cols-3 bg-[#e8dfd0]">
                <TabsTrigger value="descrizione">Descrizione</TabsTrigger>
                <TabsTrigger value="dettagli">Dettagli</TabsTrigger>
                <TabsTrigger value="dimensioni">Dimensioni</TabsTrigger>
              </TabsList>
              <TabsContent value="descrizione" className="pt-4 text-sm text-[#5c2e0f]">{product.description}</TabsContent>
              <TabsContent value="dettagli" className="pt-4 text-sm text-[#5c2e0f]">{product.materials} — {product.care}</TabsContent>
              <TabsContent value="dimensioni" className="pt-4 text-sm text-[#5c2e0f]">{product.dimensions}</TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Sticky add-to-cart (mobile) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e8dfd0] bg-[#fff8f0]/95 backdrop-blur lg:hidden">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
          <div className="ml-1">
            <div className="text-sm font-medium text-[#8B4513]">{product.title}</div>
            <div className="text-xs text-[#5c2e0f]">{variant?.name}</div>
          </div>
          <div className="ml-auto text-right">
            <div className="text-base font-semibold text-[#8B4513]">{currency(price)}</div>
          </div>
          <Button className="ml-2 rounded-xl bg-[#8B4513] hover:bg-[#5c2e0f] text-white">Aggiungi</Button>
        </div>
      </div>
    </div>
  );
}
