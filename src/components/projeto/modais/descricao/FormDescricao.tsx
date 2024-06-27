import { InputLabel, colors, useTheme } from "@mui/material"
import { HookFormDescricao } from "../../../../hooks/HookFormDescricao"

export const FormDescricao = () => {

    const theme = useTheme()

    const { register, handleDescricao, handleSubmit, errors } = HookFormDescricao()

    return (
        <form onSubmit={handleSubmit(handleDescricao)}>
            <InputLabel sx={{ marginBottom: 1 }}>Descrição</InputLabel>
            <textarea
                rows={15}
                style={{
                    width: '98%',
                    resize: 'none',
                    outline: 'none',
                    fontFamily: "'Montserrat', sans-serif",
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.primary.contrastText
                }} 
                {...register("descricao")}
            />
            <button style={{ 
                width: '100%',
                padding: '.5em',
                backgroundColor: theme.palette.primary.main,
                border: 'none',
                fontSize: '16px',
                color: '#fff',
                fontFamily: "'Montserrat', sans-serif",
             }}>Enviar</button>
        </form>
    )

}