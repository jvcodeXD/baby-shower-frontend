import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        py: 2,
        textAlign: "center",
        bgcolor: "#f5f5f5",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        Desarrollado por{" "}
        <strong>
          {" "}
          <a href="https://www.linkedin.com/in/juan-visney">Juan Visney</a>
        </strong>{" "}
        | {new Date().getFullYear()} Oruro - Bolivia
      </Typography>
    </Box>
  );
}
