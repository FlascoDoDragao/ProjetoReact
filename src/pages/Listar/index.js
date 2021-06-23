import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import Header from '../../components/Header';
import api from '../../service/api';

function Listar() {
    const [lista, setLista] = useState(null);

    const { params } = useRouteMatch();

    useEffect(() => {
        async function fetchData() {
            const response = await api.get(`/categorias`);
            console.log(response.data);
        }

        fetchData();
    }, [])

    return (
        <div>
            <Header />
        </div>
    )

}

export default Listar;