import { ProductType } from "../types";
import Product from "./Product";
import { Skeleton } from "./ui/skeleton";

export default function ProductList({
    data,
    label
}: {
    data: ProductType[],
    label: string
}) {
    return (
        <div>
            <h2 className="text-2xl font-bold">
                {label.split("_").join(" ")}
            </h2>

            <ul className="py-8 pr-12 flex gap-4 items-stretch overflow-x-scroll">
                {data.length ? (
                    data.map(p => (
                        <li className="grow" key={p.title}>
                            <Product label={label} data={p} />
                        </li>
                    ))
                ) : (
                    new Array(3).fill(null).map((_, i) => (
                        <Skeleton key={i} className="w-60 h-72 bg-neutral-200 shadow-xl" />
                    ))
                )}
            </ul>
        </div>
    );
}