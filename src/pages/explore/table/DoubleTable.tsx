import {
  Stack,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { FC } from "react";
import { Die } from "../../../types/die";

const DoubleTable: FC<{
  rows: string[];
  title: string;
  split: Die;
  divideTable?: boolean;
  minWidth?: number;
}> = ({ rows, title, split, divideTable = true, minWidth }) => {
  return (
    <Stack direction="row" spacing={4}>
      <Paper sx={{ width: "100%", height: "fit-content", minWidth }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="left" colSpan={1}>
                  <Typography fontWeight={"bold"}>d{split}</Typography>
                </TableCell>
                <TableCell align={"center"} colSpan={divideTable ? 2 : 4}>
                  <Typography fontWeight={"bold"}>{title}</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {divideTable &&
                rows.slice(0, split / 2).map((value, i) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                      <TableCell align={"left"}>
                        <Typography fontWeight={"bold"}>{i + 1}</Typography>
                      </TableCell>
                      <TableCell align={"left"}>{value}</TableCell>
                    </TableRow>
                  );
                })}
              {!divideTable &&
                rows.slice(0, split / 2).map((value, i) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                      <TableCell align={"left"}>
                        <Typography fontWeight={"bold"}>{i + 1}</Typography>
                      </TableCell>
                      <TableCell align={"left"}>{value}</TableCell>
                      <TableCell align={"center"}>
                        <Typography fontWeight={"bold"} sx={{ marginLeft: 15 }}>
                          {i + split / 2 + 1}
                        </Typography>
                      </TableCell>
                      <TableCell align={"left"}>
                        <Typography sx={{ marginLeft: 2 }}>
                          {rows[i + split / 2]}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {divideTable && (
        <Paper sx={{ width: "100%", height: "fit-content", minWidth }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" colSpan={1}>
                    <Typography fontWeight={"bold"}>d{split}</Typography>
                  </TableCell>
                  <TableCell align="center" colSpan={2}>
                    <Typography fontWeight={"bold"}>{title}</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(split / 2, split).map((value, i) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={i + split / 2}
                    >
                      <TableCell align={"left"}>
                        <Typography fontWeight={"bold"}>
                          {i + split / 2 + 1}
                        </Typography>
                      </TableCell>
                      <TableCell align={"left"}>{value}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </Stack>
  );
};

export default DoubleTable;
