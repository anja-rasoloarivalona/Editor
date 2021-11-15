import React from "react"
import styled from "styled-components"
import Editor from "./components/Editor"

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	padding-top: 5vh;
`

const EditorContainer = styled.div`
	width: 95%;
	max-width: 80rem;
`

const App = () => {
    return (
        <Container>
			<EditorContainer>
				<Editor />
			</EditorContainer>
        </Container>
    )
};

export default App;
