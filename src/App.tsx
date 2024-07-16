import { Button, Container, Typography } from "@mui/material";
// src/App.tsx
import React from "react";

function App() {
	return (
		<Container>
			<Typography variant="h1" component="h2" gutterBottom>
				Calculador de Sueldo Índice Dólar
			</Typography>
			<Button variant="contained" color="primary">
				Click Me
			</Button>
		</Container>
	);
}

export default App;
