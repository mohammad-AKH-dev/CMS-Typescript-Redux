import ProductsTable from "@/components/Tables/productstable/productsTable"
import { useAppSelector } from "@/Redux/hooks"


function Products() {
    const theme = useAppSelector(store => store.themes.default)

  return (
    <section className="products-section mt-16">
        {/* products table */}
             <section style={{backgroundColor: `${theme === '#081028' ? '#0b1739' : theme}`}} 
               className=
               {`products-section mt-8 border rounded-lg ${
                 theme === "#ff6666" || theme === "#687478"
                   ? "border-[#99a7cc]"
                   : "border-primary"
               }`}>
               <div
               className={`products__header flex-wrap gap-y-6 p-4 
               flex items-center justify-between`}>
                 <h4 className="products__title text-title font-title text-[20px]">All Products</h4>
                 
               </div>
               {/* products table */}
               <ProductsTable/>
             </section>
    </section>
  )
}

export default Products
