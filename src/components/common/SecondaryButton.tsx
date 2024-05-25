import { Button } from "@mui/material";

function SecondaryButton({ content }: { content: string }) {
  return (
    <Button
      sx={[
        {
          width: "100%",
          marginBlockStart: "2rem",
          marginBlockEnd: "0.3rem",
          textTransform: "none",
          borderColor: "rgb(185 28 28)",
          color: "rgb(127 29 29)",
          fontWeight: "700",
        },
        {
          "&:hover": {
            backgroundColor: "rgb(185 28 28 / 0.05)",
            borderColor: "rgb(127 29 29)",
          },
        },
      ]}
      variant="outlined"
    >
      {content}
    </Button>
  );
}

export default SecondaryButton;
