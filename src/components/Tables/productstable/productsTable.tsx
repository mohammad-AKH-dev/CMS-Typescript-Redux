import { useEffect } from "react";
import { columns } from "./columns"; 
import { DataTable } from "./data-table";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { editProduct, fetchProducts, removeProduct } from "@/Redux/productsSlice";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Product } from "@/Redux/types/productSlice.types";



export default function ProductsTable() {
  const products = useAppSelector(store => store.products)
  const dispatch = useAppDispatch()
  const MySwal = withReactContent(Swal)

  useEffect(() => {
     dispatch(fetchProducts())
  },[])

   const removeHandler = (id: string) => {
      MySwal.fire({
        title: "Warning!",
        icon: "warning",
        text: "Are you sure you want to remove this Product?",
        showCancelButton: true,
        color: "#fff",
        background: "rgba(11,23,57,1)",
      }).then((resulst) => {
        if (resulst.isConfirmed) {
          dispatch(removeProduct(id));
          MySwal.fire({
            title: "success",
            icon: "success",
            text: "Product deleted successfully",
            background: "rgba(11,23,57,1)",
            color: "#fff",
            confirmButtonText: "ok",
          }).then(() => dispatch(fetchProducts()));
        }
      });
    };

     const editHandler = async (data: Product) => {
    
         MySwal.fire({
          title: "Edit",
          icon: "info",
          showCancelButton: true,
          cancelButtonText: 'cancel',
          confirmButtonText: 'Edit',
          color: "#fff",
          background: "rgba(11,23,57,1)",
          html: `
           <input id="swal-input1" class="swal2-input text-[14px] bg-primary" value='${data.product.name}'>
           <input id="swal-input2" class="swal2-input text-[14px] bg-primary" value='${data.category}'>
           <input id="swal-input3" class="swal2-input text-[14px] bg-primary" value='${data.price}'>       
           <input id="swal-input5" class="swal2-input text-[14px] bg-primary" value='${data.status}' placeholder="In Stock or Out of stock">
          `,
          preConfirm: () => {
           const input1 =  document.getElementById("swal-input1") as HTMLInputElement
           const input2 =  document.getElementById("swal-input2") as HTMLInputElement
            const input3 = document.getElementById("swal-input3") as HTMLInputElement     
            const input4 = document.getElementById("swal-input5") as HTMLInputElement
            return {
               ...data,
               product: {
                name: input1.value,
                img: data.product.img
               },
               category: input2.value,
               price: Number(input3.value),
               status: input4.value
            }
          } 
        } 
      ).then(async result => {
         if(result.isConfirmed) {
           await dispatch(editProduct(result.value))
          MySwal.fire({
            title: 'success',
            icon: 'success',
            text: 'Your Infos changed Successfully',
            color: "#fff",
            background: "rgba(11,23,57,1)",
            confirmButtonText: 'ok'
          }).then(() => dispatch(fetchProducts()))
         }
      })
    };

  const updatedColumns = columns.map((col) => {
      if (col.id === "actions") {
        return {
          ...col,
          cell: ({ row }) => (
            <div className="actions flex gap-x-3">
              <MdEdit
                className="cursor-pointer"
                onClick={() => editHandler(row.original)}
              />
              <FaTrash
                className="cursor-pointer"
                onClick={() => removeHandler(row.original.id)}
              />
            </div>
          ),
        };
      }
      return col;
    });


 
  if (products.loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className=" mx-auto py-10">
      <DataTable columns={updatedColumns} data={products.products} />
    </div>
  )
}