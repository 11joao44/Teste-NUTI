import { Container, Tag, Quantidade } from './style'

interface TableDataProps {
  tag: string
  quantidade: number
}

const TableData = ({ tag, quantidade }: TableDataProps) => {
  return (
    <tr>
      <td>
        <Container>
          <Tag>
            <span>{tag}</span>
          </Tag>
        </Container>
      </td>
      <td>
        <Container>
          <Quantidade>
            <span>{quantidade}</span>
          </Quantidade>
        </Container>
      </td>
    </tr>
  )
}

export default TableData
