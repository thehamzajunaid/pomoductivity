import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function ToggleButtons() {
  return (
    <div>
      <ButtonGroup size="large" aria-label="large button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
}

export default ToggleButtons;
