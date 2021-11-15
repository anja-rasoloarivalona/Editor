import React, { useState, useEffect, FC } from "react"
import styled from "styled-components"
import Block from "./components/Block"

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: red;

    * {
        font-size: 1.4rem;
        line-height: 1.4;
    }
`
const Editor: FC = () => {

    const [ editing, setEditing ] = useState(true)

    return (
        <Container>
            <Block editing={editing}/>
        </Container>
    )
};

export default Editor;
