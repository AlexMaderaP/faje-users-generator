import { Container, Typography } from "@mui/material";

const Header = () => {
  return (
    <Container component="header" sx={{ textAlign: "center", padding: 2 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Fake Users Generator
      </Typography>
    </Container>
  );
};

export default Header;
