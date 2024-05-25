import { Button } from "@mui/material";

function PrimaryButton({ content }: { content: string }) {
  return (
    <Button
      sx={[
        {
          "&:hover": {
            backgroundColor: " rgb(127 29 29)",
          },
        },
        {
          backgroundColor: "rgb(185 28 28)",
          fontWeight: "700",
          textTransform: "none",
        },
      ]}
      type="submit"
      variant="contained"
    >
      {content}
    </Button>
  );
}

export default PrimaryButton;
