"use client";
import { FaSearch } from "react-icons/fa";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";
import { ProductType } from "../../types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { categories } from "../../lib/categories";
import ProductList from "../../components/ProductList";

const HomePage: React.FC = () => {
    const [g, setG] = useState<'Men' | 'Women'>();
    const [c, setC] = useState<string>();
    const [loading, setLoading] = useState(false);

    const [p, setP] = useState<ProductType[]>([]);

    useEffect(() => {
        if (g && c) {
            setLoading(true);

            fetch(`/api/products?g=${g}&c=${c}&limit=20`)
                .then(res => res.json())
                .then(data => {
                    let p = data.data as ProductType[];
                    if (!p) {
                        setP([]);
                    } else {
                        setP(data.data)
                    }
                })
                .finally(() => setLoading(false));
        } else {
            setP([]);
        }
    }, [g, c]);

    return (
        <main className="p-4 grow bg-neutral-100">
            <div className="mt-8 grid max-lg:grid-rows-2 lg:grid-cols-2 w-fit mx-auto gap-16">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold">
                        No Surprises, Just Style
                    </h1>

                    <p className="max-w-[28rem]">
                        Experience the future of shopping with our AI-powered virtual try-on. Step into a world where fashion meets technology, and find your perfect style with confidence.
                        <br /> See it. Try it. Buy it.
                    </p>

                    <Button className="w-fit">
                        <FaSearch className="mr-2" />
                        Explore Items
                    </Button>
                </div>

                <div className="px-12 grid grid-cols-2 w-full max-w-96">
                    <div className="aspect-[0.7] rounded-sm shadow-lg -skew-x-12 bg-neutral-500" />
                    <div className="aspect-[0.7] rounded-sm shadow-lg -skew-x-12 -translate-x-12 translate-y-8 bg-neutral-500/20" />
                </div>
            </div>

            <div className="pl-8 mt-16">
                <h2 className="text-2xl font-bold">
                    Explore
                </h2>

                <div className="flex gap-2 max-w-60">
                    <Select onValueChange={g => setG(g as any)}>
                        <SelectTrigger>
                            <SelectValue placeholder='Shop by Gender' />
                        </SelectTrigger>
                        <SelectContent>
                            {['Men', 'Women'].map(g => (
                                <SelectItem defaultChecked key={g} value={g}>
                                    {g}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select onValueChange={c => setC(c)}>
                        <SelectTrigger>
                            <SelectValue placeholder='Shop by Category' />
                        </SelectTrigger>
                        <SelectContent>
                            {g && categories[g].map(c => (
                                <SelectItem key={c} value={c}>
                                    {c.split('_').join(' ')}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="mt-16 pl-8">
                {loading ? (
                    "Loading..."
                ) : p.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64">
                        <FaSearch className="text-6xl text-neutral-500 mb-4" />
                        <p className="text-neutral-500">No products found. Please select different options.</p>
                    </div>
                ) : (
                    <ProductList label={g + "'s " + c} data={p} />
                )}
            </div>
        </main>
    );
};

export default HomePage;