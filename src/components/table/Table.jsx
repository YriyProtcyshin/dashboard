import "./Table.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import rows from "../../tableData.json";

const WidgetTable = () => {
    return (
        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Brand</TableCell>
            <TableCell className="tableCell">model</TableCell>
            <TableCell className="tableCell">color</TableCell>
            <TableCell className="tableCell">storage</TableCell>
            <TableCell className="tableCell">price</TableCell>
            <TableCell className="tableCell">release_date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className="tableCell">{row.brand}</TableCell>
              <TableCell className="tableCell">{row.model}</TableCell>
              <TableCell className="tableCell">{row.color}</TableCell>
              <TableCell className="tableCell">{row.storage}</TableCell>
              <TableCell className="tableCell">{row.price}</TableCell>
              <TableCell className="tableCell">{row.release_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WidgetTable;
