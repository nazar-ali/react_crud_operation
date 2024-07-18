import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import TablePagination from '@mui/material/TablePagination';
import { useState } from "react";

const ProductTable = ({ loading, data, error }) => {
//     const [order, setOrder] = React.useState('asc');
//   const [orderBy, setOrderBy] = React.useState('calories');
//   const [selected, setSelected] = React.useState([]);
  const [page, setPage] = useState(0);
//   const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      {loading ? (
        <div className="text-center m-10 text-2xl font-bold">loading....</div>
      ) : (
        <TableContainer component={Paper} sx={{ maxHeight: "650px" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Age</TableCell>
                <TableCell align="center">Gender</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Phone</TableCell>
                <TableCell align="center">Enrollment</TableCell>
                <TableCell align="center">Action</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item) => {
                return (
                  <>
                    <TableRow
                      key={item.id}
                      sx={{ "&:lasr-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell sx={{ fontSize: 20 }}>{item.id}</TableCell>
                      <TableCell align="center">{item.name}</TableCell>
                      <TableCell align="center">{item.age}</TableCell>
                      <TableCell align="center">{item.gender}</TableCell>
                      <TableCell align="center">
                        {item.email}
                      </TableCell>
                      <TableCell align="center">{item.phone}</TableCell>
                      <TableCell align="center">{item.gpa}</TableCell>
                     
                    </TableRow>
                  </>
                );
              })}
            </TableBody>
          </Table>
          <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
            //   count={data}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      )}
    </>
  );
};

export default ProductTable;
