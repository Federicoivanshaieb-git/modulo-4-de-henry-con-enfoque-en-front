import { getProductByID } from '@/services/productServices'
import ProductDetailView from '@/ui/ProductDetailView'
import { redirect } from "next/navigation"

const DetailPage = async ({ params }: { params: { productID: string } }) => {
    const { productID } = await params
    const productDetail = await getProductByID(productID)

    if (!productDetail) {
        redirect("/")
    }

    return (
        <div>
            <ProductDetailView {...productDetail} />
        </div>
    )
}

export default DetailPage