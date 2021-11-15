import React, { FC } from "react"
import styled from "styled-components"

const Container = styled.div``

const Input = styled.textarea`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    resize: none;
    background: beige;
`

interface BlockProps {
    editing: boolean,
}

const Block: FC<BlockProps> = ({ editing }) => {

    if(editing){
        return (
            <Input />
        )
    }

    return (
        <Container>
          
        </Container>
    )
};

export default Block;
