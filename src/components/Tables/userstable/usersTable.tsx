import { useEffect } from "react";
import { columns, UserColumnType } from "./columns";
import { DataTable } from "./data-table";
import { useAppSelector } from "@/Redux/hooks";
import { editUser, fetchUsers, removeUser } from "@/Redux/usersSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useAppDispatch } from "@/Redux/hooks";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const MySwal = withReactContent(Swal);

export default function UsersTable() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((store) => store.users);

  useEffect(() => {
    dispatch(fetchUsers());
  },[]);

  const removeHandler = (id: string) => {
    MySwal.fire({
      title: "Warning!",
      icon: "warning",
      text: "Are you sure you want to remove this user?",
      showCancelButton: true,
      color: "#fff",
      background: "rgba(11,23,57,1)",
    }).then((resulst) => {
      if (resulst.isConfirmed) {
        dispatch(removeUser(id));
        MySwal.fire({
          title: "success",
          icon: "success",
          text: "user deleted successfully",
          background: "rgba(11,23,57,1)",
          color: "#fff",
          confirmButtonText: "ok",
        }).then(() => dispatch(fetchUsers()));
      }
    });
  };
  const editHandler = async (data: UserColumnType) => {

     MySwal.fire({
      title: "Edit",
      icon: "info",
      showCancelButton: true,
      cancelButtonText: 'cancel',
      confirmButtonText: 'Edit',
      color: "#fff",
      background: "rgba(11,23,57,1)",
      html: `
       <input id="swal-input1" class="swal2-input text-[14px] bg-primary" value='${data.client}'>
       <input id="swal-input2" class="swal2-input text-[14px] bg-primary" value='${data.email}'>
       <input id="swal-input3" class="swal2-input text-[14px] bg-primary" value='${data.country}'>
       <input id="swal-input4" class="swal2-input text-[14px] bg-primary" value='${data.phone}'>
       <input id="swal-input5" class="swal2-input text-[14px] bg-primary" value='${data.status}' placeholder="online or offline">
      `,
      preConfirm: () => {
       const input1 =  document.getElementById("swal-input1") as HTMLInputElement
       const input2 =  document.getElementById("swal-input2") as HTMLInputElement
        const input3 = document.getElementById("swal-input3") as HTMLInputElement
        const input4 = document.getElementById("swal-input4") as HTMLInputElement
        const input5 = document.getElementById("swal-input5") as HTMLInputElement
        return {
           ...data,
           client: input1.value,
           email: input2.value,
           country: input3.value,
           phone: input4.value,
           status: input5.value
        }
      } 
    } 
  ).then(async result => {
     if(result.isConfirmed) {
       await dispatch(editUser(result.value))
      MySwal.fire({
        title: 'success',
        icon: 'success',
        text: 'Your Infos changed Successfully',
        color: "#fff",
        background: "rgba(11,23,57,1)",
        confirmButtonText: 'ok'
      }).then(() => dispatch(fetchUsers()))
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

  if (users.loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" mx-auto py-10">
      <DataTable columns={updatedColumns} data={users.users} />
    </div>
  );
}
