import React from "react";
import * as MUI from "@mui/material";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import useData from "@/use-data";

const modules = [ClientSideRowModelModule];

export default function Home() {

  // data is typed!
  const data = useData();

  return (
    <MUI.Box
      sx={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden", flexGrow: "1" }}
    >
      <MUI.Box className="ag-theme-balham" sx={{ height: 125 }}>
        <AgGridReact rowData={data} columnDefs={[{ field: "id" }, { field: "name" }, { field: "email" }]} modules={modules} />
      </MUI.Box>
    </MUI.Box>
  );
}
