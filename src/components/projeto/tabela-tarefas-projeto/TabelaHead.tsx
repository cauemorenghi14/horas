import { TableCell, TableHead, TableRow } from "@mui/material"

export const TabelaHead = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell sx={{ padding: 0, margin: 0, boxSizing: 'border-box', textAlign: 'center' }}>Nome</TableCell>
                <TableCell sx={{ padding: 0, margin: 0, boxSizing: 'border-box', textAlign: 'center' }}>Horas Contadas</TableCell>
                <TableCell sx={{ padding: 0, margin: 0, boxSizing: 'border-box', textAlign: 'center' }}>Estimativa de Horas</TableCell>
                <TableCell sx={{ padding: 0, margin: 0, boxSizing: 'border-box', textAlign: 'center' }}>Descrição</TableCell>
                <TableCell sx={{ padding: 0, margin: 0, boxSizing: 'border-box', textAlign: 'center' }}>Logs de Trabalho</TableCell>
            </TableRow>
        </TableHead>
    )
}