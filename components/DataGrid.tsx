import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { StyledTableCell, StyledTableRow } from './ui/StyledTableComponents'
import { Link, Tooltip, Typography } from '@mui/material'

export interface GridColumn<T> {
  title: string
  key: keyof T
  maxWidth?: number
  width?: number
  isTooltip?: boolean
  isEmail?: boolean
  isLink?: boolean
}

type Props<T> = {
  rows: T[]
  onSelect: (row: T) => void
  columns: GridColumn<T>[]
  stickyHeader?: boolean
}

export default function DataGrid<T>({
  rows,
  columns,
  onSelect,
  stickyHeader = false,
}: Props<T>) {
  return (
    <div style={{ overflowY: 'auto', maxHeight: '79vh' }}>
      <Table
        sx={{ minWidth: 700 }}
        aria-label="customized table"
        stickyHeader={stickyHeader}
      >
        <TableHead>
          <TableRow>
            {rows.length > 0 &&
              columns.map((col) => (
                <StyledTableCell
                  key={col.key as string}
                  sx={{ maxWidth: col.maxWidth ? col.maxWidth : undefined }}
                >
                  {col.title}
                </StyledTableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <StyledTableRow key={row.id!} onClick={() => onSelect(row)}>
                {columns.map((col) =>
                  col.isTooltip ? (
                    <Tooltip
                      title={`${row[col.key] || ''}`}
                      arrow
                      placement="right"
                    >
                      <StyledTableCell width={col.width ?? undefined}>
                        <Typography
                          textOverflow="ellipsis"
                          overflow="hidden"
                          maxWidth="250px"
                          whiteSpace="nowrap"
                          fontSize="inherit"
                        >{`${row[col.key] || ''}`}</Typography>
                      </StyledTableCell>
                    </Tooltip>
                  ) : (
                    <StyledTableCell
                      key={col.key as string}
                      component="th"
                      scope="row"
                      sx={{ maxWidth: col.maxWidth ? col.maxWidth : undefined }}
                      width={col.width ?? undefined}
                    >
                      {(col.isEmail || col.isLink) && row[col.key] ? (
                        <Link
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          href={`${col.isEmail ? 'mailto:' : 'https://'}${
                            row[col.key]
                          }`}
                        >{`${row[col.key]}`}</Link>
                      ) : (
                        <Typography fontSize="inherit">{`${
                          row[col.key] || ''
                        }`}</Typography>
                      )}
                    </StyledTableCell>
                  )
                )}
              </StyledTableRow>
            ))
          ) : (
            <TableRow>
              <StyledTableCell width="100%">
                <Typography
                  fontStyle="italic"
                  textAlign="center"
                  fontSize="inherit"
                >
                  Нет данных, измените фильтр
                </Typography>
              </StyledTableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
