import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Send } from "@mui/icons-material";

import { Link } from "react-router-dom";

import "./customersList.scss";
import { useState } from "react";
import { userData } from "../../dummyData";

const CustomersList = () => {
  const [data, setData] = useState(userData);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "users",
      headerName: "Users",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userList">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "phone", headerName: "Phone", width: 140 },
    {
      field: "status",
      headerName: "Status",
      width: 100,
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/invoice/" + params.row.id}>
              <Button className="userListBtn" variant="contained" size="small">
                Edit
              </Button>
            </Link>

            <Button
              variant="contained"
              size="small"
              color="error"
              onClick={() => handleDelete(params.row.id)}
            >
              delete
            </Button>
          </>
        );
      },
    },
    {
      field: "Message",
      headerName: "message",
      width: 120,
      renderCell: (params) => {
        return (
          <Button
            className="userListSend"
            color="success"
            variant="contained"
            endIcon={<Send />}
          >
            send
          </Button>
        );
      },
    },
  ];

  return (
    <div className="customersList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default CustomersList;
