import Card from "@/components/Card";
import { getAllProducts } from "@/services/productServices";

const CardList = async () => {
    const producToPreload = await getAllProducts();

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 justify-items-center w-full">
                {
                    producToPreload.map((product) => {
                        return (
                            <Card key={product.id} {...product} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardList
