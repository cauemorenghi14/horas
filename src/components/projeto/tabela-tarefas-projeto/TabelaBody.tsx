import { TableBody, TableCell, TableRow } from "@mui/material"
import Descricao from "../modais/descricao/Descricao"
import Logs from "../modais/Logs"

export const TabelaBody = () => {
    return (
        <TableBody>
            <TableRow>
                <TableCell sx={{ maxWidth: '50px', fontSize: '12px', textAlign: 'center', flexWrap: 'wrap' }}>Revisão ativa de termodinâmica + exercícios</TableCell>
                <TableCell sx={{ fontSize: '12px', textAlign: 'center' }}>32h50min</TableCell>
                <TableCell sx={{ fontSize: '12px', textAlign: 'center' }}>50h</TableCell>
                <TableCell sx={{ fontSize: '12px', textAlign: 'center' }}><Descricao /></TableCell>
                <TableCell sx={{ fontSize: '12px', textAlign: 'center' }}><Logs /></TableCell>
            </TableRow>
        </TableBody>
    )
}