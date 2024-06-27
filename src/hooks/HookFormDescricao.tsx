import { useForm } from "react-hook-form"

export const HookFormDescricao = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({})

    const handleDescricao = (data: any) => console.log(data)

    return {
        register,
        handleSubmit,
        errors,
        handleDescricao
    }
}