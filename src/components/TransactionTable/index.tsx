import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
useEffect(() => {
    api.get('/transactions')
    .then(response => console.log(response.data))
}, [])
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Categoria</th>
                        <th>Valor</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/05/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$1.000</td>
                        <td>Casa</td>
                        <td>10/05/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td>R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/05/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}