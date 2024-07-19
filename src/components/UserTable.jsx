import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import generateRandomUsers from "../services/user";

function UserTable({ region, seed, errorNum }) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (region === "") return;
    const randmonUsers = generateRandomUsers(region, seed, errorNum);
    setUsers(randmonUsers);
    setPage(1);
  }, [region, seed, errorNum]);

  function handleNext() {
    setPage((prevPage) => prevPage + 1);
    setUsers((prevUsers) => [
      ...prevUsers,
      ...generateRandomUsers(region, seed, errorNum, page, 10),
    ]);
  }
  return (
    <InfiniteScroll dataLength={users.length} next={handleNext} hasMore={true}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Index</TableCell>
              <TableCell>Random ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </InfiniteScroll>
  );
}

export default UserTable;
