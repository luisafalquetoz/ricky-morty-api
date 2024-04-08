import { Character } from "../character"
import { Pagination } from "../pagination"
import { Container, ContainerList } from "./style"

export const CharacterList = ({ data, fetchPreviousPage, fetchNextPage }) => {
    console.log(data)
    return (
        <Container>
            <ContainerList>
                {data?.results?.map((character) => (
                    <Character key={character.id} character={character} />
                ))}
            </ContainerList>
            <Pagination
                pagination={data?.info}
                fetchNextPage={(url) => fetchNextPage(url)}
                fetchPreviousPage={(url) => fetchPreviousPage(url)} 
            />
        </Container>
    )
}
