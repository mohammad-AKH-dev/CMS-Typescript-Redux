import Header from "@/components/Header";
import MainSidebar from "@/components/MainSidebar";
import ProductsTable from "@/components/Tables/productstable/productsTable";
import { useAppSelector } from "@/Redux/hooks";

import { useEffect } from "react";

function Products() {
  useEffect(() => {
    document.title = "Products";
  }, [window.location.pathname]);

  const theme = useAppSelector((store) => store.themes.default);
  const isOpen = useAppSelector(store => store.sidebar.isOpen)

  return (
    <div className="flex ">
      <MainSidebar />
      <div
        className={`content w-full p-6 container sm:min-w-[350px] ${
          isOpen ? "max-w-[1200px]" : " max-w-[1350px]"
        }`}
      >
        <Header />
        <div className="main-content">
          <section className="products-section mt-16">
            {/* products table */}
            <section
              style={{
                backgroundColor: `${theme === "#081028" ? "#0b1739" : theme}`,
              }}
              className={`products-section mt-8 border rounded-lg ${
                theme === "#ff6666" || theme === "#687478"
                  ? "border-[#99a7cc]"
                  : "border-primary"
              }`}
            >
              <div
                className={`products__header flex-wrap gap-y-6 p-4 
               flex items-center justify-between`}
              >
                <h4 className="products__title text-title font-title text-[20px]">
                  All Products
                </h4>
              </div>
              {/* products table */}
              <ProductsTable />
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Products;
