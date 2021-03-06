import React from "react";
import { Dialog, Stack, Button } from "@mui/material";
import Lottie from "react-lottie-player";
import Done from "assets/json/Lottie/Done.json";
import { receiverState } from "../types";
import { useNavigate } from "react-router-dom";

const DoneDialog: React.FC<{
  doneDialog: boolean;
  setDoneDialog: React.Dispatch<React.SetStateAction<boolean>>;
  receiver: receiverState;
}> = ({ doneDialog, setDoneDialog, receiver }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    if (receiver) {
      navigate("/story-talk");
    } else {
      navigate("/main");
    }
    setDoneDialog(false);
  };

  return (
    <Dialog
      PaperProps={{
        style: {
          borderRadius: 30,
          padding: "50px 0",
          boxShadow:
            "0px 11px 15px -7px rgb(0 0 0 / 5%), 0px 24px 38px 3px rgb(0 0 0 / 7%), 0px 9px 46px 8px rgb(0 0 0 / 4%)",
        },
      }}
      onClose={handleClose}
      open={doneDialog}
    >
      <Stack direction="column" alignItems="center">
        <Lottie
          animationData={Done}
          play
          loop={false}
          style={{ width: "50%" }}
        />
        <p style={{ padding: "20px 0 10px" }}>사연이 전송되었습니다.</p>
        <Button
          variant="contained"
          size="small"
          disableElevation={true}
          sx={{
            color: "white",
            fontFamily: "S-CoreDream-4Regular",
            margin: "5px 0 0",
            padding: "3px 12px",
            borderRadius: "15px",
          }}
          onClick={handleClose}
        >
          돌아가기
        </Button>
      </Stack>
    </Dialog>
  );
};

export default DoneDialog;
