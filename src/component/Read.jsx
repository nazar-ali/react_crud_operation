import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  Checkbox,
} from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft,faEdit } from '@fortawesome/free-solid-svg-icons'

const Read = ({ loading, data, error, handleUpdate, onDelete, handleView ,handleCheck}) => {
  const Edit = <FontAwesomeIcon icon={faEdit} />
  const cancelled = <FontAwesomeIcon icon={faDeleteLeft} />

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
        <>
        <div className=" items-center mt-20 flex flex-col h-[100vh]">

       
        <TableContainer  component={Paper}  sx={{ maxHeight: "650px",maxWidth:"80%" }}>
          <Table  aria-label="simple table" stickyHeader>
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
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
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
                      <TableCell align="center">{item.email}</TableCell>
                      <TableCell align="center">{item.phone}</TableCell>
                      <TableCell align="center">{item.enrollment}</TableCell>
                      <TableCell align="center">
                      <Checkbox
                      checked={item.check}
                      onChange={() => handleCheck(item)}
                    />
                      </TableCell>
                      <TableCell align="center">
                        <Link to={`/update`}>
                          <Button  onClick={() => handleUpdate(item)}>
                            <span className="font-bold text-xl">{Edit}</span>
                          </Button>
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Button onClick={() => onDelete(item.id)}>
                        <span className="font-bold text-xl">{cancelled}</span>
                        </Button>
                      </TableCell>
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
            count={data.length}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
        </div>
        <div className="absolute top-[350px] ml-40">

          <Link to="/create">
        <Button  variant="contained">Back</Button>
          </Link>
        </div>
      </>
      )
      }
    </>
  );
};

export default Read;
