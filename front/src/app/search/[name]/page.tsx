import { getProductByName } from "@/services/productServices"; 
import Card from "@/components/Card"; 

const SearchPage = async ({ params }: { params: { name: string } }) => {
    const { name } = await params;
    const products = await getProductByName(name);

    return (
        <div className="min-h-screen bg-[#808080] py-10 px-4 font-(family-name:--font-vt323)]">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-black text-black mb-8 uppercase italic bg-[#C0C0C0] inline-block px-4 border-2 border-black shadow-[4px_4px_0_0_#000]">
                    [ SEARCH RESULTS: {name.toUpperCase()} ]
                </h1>

                {products.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <Card key={product.id} {...product} />
                        ))}
                    </div>
                ) : (
                    <div className="bg-[#C0C0C0] border-4 border-black p-10 shadow-[8px_8px_0_0_#000] text-center">
                        <p className="text-3xl font-black uppercase italic text-red-600">
                            404 ERROR: NO PRODUCTS FOUND
                        </p>
                        <p className="text-xl text-black mt-4 uppercase">
                            The requested item "{name}" does not exist in our database.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchPage;