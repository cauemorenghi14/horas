import { useParams } from "react-router-dom"
import { projetos } from "../../data/projetos"
import { Box, Typography } from "@mui/material"
import { MoreHoriz } from "@mui/icons-material"
import PaginacaoProjeto from "./PaginacaoProjeto"

export const DynamicProjeto = () => {

    const { id } = useParams()
    const numberId = Number(id)
    const projeto = projetos.find(projeto => projeto.id === numberId)

    return (
        <Box minHeight="100vh" padding={2}>
            <Box component="div" display="flex" gap={1}>
                <Typography fontWeight={600} variant="body1">{projeto?.formacao === 1 ? 'Bacharelado em Ciência e Tecnologia': 'Engenharia da Informação'}/{projeto?.name}</Typography>
                <MoreHoriz />
            </Box>
            <Box padding={1}>
                <PaginacaoProjeto />
            </Box>
        </Box>
    )
}