import { api } from "../axios-config";

type TUsuariosProps = {
  id: number;
  email: string;
  username: string;
  perfil: number;
  status: number;
  created_at: string;
  updated_at: string;
};

const getUsuarios = async (): Promise<TUsuariosProps[] | undefined> => {
  try {
    const { data } = await api.get("/users");

    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export {
    getUsuarios
}
