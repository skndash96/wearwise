import { FaArrowRight } from "react-icons/fa";
import { Button } from "./ui/button";
import { ProductType } from "../types";

export default function Product({
    data,
    label
}: {
    data: ProductType,
    label: string
}) {
    return (
        <div className="min-w-72 bg-neutral-50 h-full flex flex-col rounded-xl overflow-hidden shadow-md">
            <img
                className="w-full max-h-72 grow"
                src={data.image}
                alt={data.title}
            />

            <div className="p-2 grow">
                <h2 className="font-semibold">
                    {data.title}
                </h2>

                <div>
                    <span>
                        {data.rating}
                    </span>
                    <span className="ml-2 text-neutral-600">
                        ({data.ratingCount})
                    </span>
                </div>

                <div className="mt-2 flex items-center justify-between">
                    <span className="text-lg font-bold">
                        $ {data.price.split("$").pop()}
                    </span>

                    <Button variant="outline">
                        <FaArrowRight />
                    </Button>
                </div>
            </div>
        </div>
    );
}