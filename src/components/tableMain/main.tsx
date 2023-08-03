import { useCountData } from '../../hooks/api'
import { Container, TH } from './style'
import TableData from '../table/table'

const TableMain = () => {
  const { data } = useCountData()

  return (
    <Container>
      <h1>Tabela com Dados dos banco de dados</h1>
      <table border={1}>
        <thead>
          <tr>
            <TH>TAG</TH>
            <TH>QUANTIDADE</TH>
          </tr>
        </thead>
        <tbody>
          {data?.map((countData) => (
            <TableData
              key={countData.id}
              tag={countData.tag}
              quantidade={countData.quantidade}
            />
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default TableMain
