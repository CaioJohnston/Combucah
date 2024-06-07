import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, CircularProgress, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import regression from 'regression';
import { useTable, Column } from 'react-table';

interface DataRow {
  fabricados: number;
  vendidos: number;
  emEstoque: number;
  pesoDoMes: number;
  demanda: number;
  mesAno: string;
}

const originalData: DataRow[] = [
  { fabricados: 20, vendidos: 10, emEstoque: 10, pesoDoMes: 0.10, demanda: 10, mesAno: '01/24' },
  { fabricados: 20, vendidos: 15, emEstoque: 15, pesoDoMes: 0.20, demanda: 20, mesAno: '02/24' },
  { fabricados: 30, vendidos: 20, emEstoque: 25, pesoDoMes: 0.30, demanda: 40, mesAno: '03/24' },
  { fabricados: 60, vendidos: 60, emEstoque: 25, pesoDoMes: 0.60, demanda: 60, mesAno: '04/24' },
  { fabricados: 50, vendidos: 65, emEstoque: 10, pesoDoMes: 0.50, demanda: 55, mesAno: '05/24' },
  { fabricados: 120, vendidos: 110, emEstoque: 20, pesoDoMes: 0.98, demanda: 120, mesAno: '06/24' },
  { fabricados: 60, vendidos: 70, emEstoque: 10, pesoDoMes: 0.75, demanda: 70, mesAno: '07/24' },
  { fabricados: 100, vendidos: 110, emEstoque: 0, pesoDoMes: 0.85, demanda: 100, mesAno: '08/24' }
];

function Gestao() {
  const [estimatedBracelets, setEstimatedBracelets] = useState<number | null>(null);
  const [modelScore, setModelScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const X = originalData.map(row => [row.fabricados, row.vendidos, row.emEstoque, row.pesoDoMes]);
    const y = originalData.map(row => row.demanda);

    const result = regression.linear(X.map((x, i) => [i, y[i]]));
    const { equation, r2 } = result;

    const predictionData = [40, 40, 0, 0.99];
    const predictedValue = equation.reduce((acc, coef, index) => acc + coef * (predictionData[index] || 1), 0);

    const formattedPredictedValue = predictedValue / 10;

    setEstimatedBracelets(Math.round(formattedPredictedValue));
    setModelScore(r2);
    setLoading(false);
  }, []);

  const data = React.useMemo(() => originalData, []);
  const columns = React.useMemo<Column<DataRow>[]>(() => [
    { Header: 'Mês/Ano', accessor: 'mesAno' },
    { Header: 'Fabricados', accessor: 'fabricados' },
    { Header: 'Vendidos', accessor: 'vendidos' },
    { Header: 'Em Estoque', accessor: 'emEstoque' },
    { Header: 'Peso do Mês', accessor: 'pesoDoMes' },
    { Header: 'Demanda', accessor: 'demanda' }
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Bem-vindo, Charles
        </Typography>
        <Typography variant="body1" component="p">
          A estimativa de pulseiras para serem fabricadas para o próximo mês é de: {loading ? <CircularProgress size={20} /> : estimatedBracelets}
        </Typography>
        <Typography variant="body1" component="p">
          Grau de confiabilidade da predição: {loading ? <CircularProgress size={20} /> : (modelScore ? (modelScore * 100).toFixed(2) : '0')}%
        </Typography>
        <TableContainer component={Paper}>
          <Table {...getTableProps()}>
            <TableHead>
              {headerGroups.map(headerGroup => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <TableRow {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default Gestao;
