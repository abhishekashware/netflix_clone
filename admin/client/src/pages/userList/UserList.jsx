import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function UserList() {
  const [data, setData] = useState(userRows);

  useEffect(()=>{
    const getUsers=async ()=>{
      try{
        const res=await axios.get("http://netflix-clone-mern-client.herokuapp.com/api/users",{
          headers: {
            token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        
        setData(res.data.map(d=>{
          const [id,email,username]=[d._id,d.email,d.username];
          return {id,username,email};
        }));
      }catch(err){
        console.log(err);
      }
    };
    getUsers();
  },[]);
  const handleDelete = (id) => {
    const deleteUser=async ()=>{
      try{
        const res=await axios.delete('http://netflix-clone-mern-client.herokuapp.com/api/users/'+id,{
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setData(data.filter((item) => item.id !== id));
      }catch(err){
        console.log(err);
      }
    };
    deleteUser();
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 300 },
    {
      field: "username",
      headerName: "Username",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 300 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/user/" + params.row.id, user: params.row }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
