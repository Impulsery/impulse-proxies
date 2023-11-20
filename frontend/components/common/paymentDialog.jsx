import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { subscriptionService } from "./services";
import { CircularProgress } from "@mui/material";

function PaymentDialog({ open, handleOpen, payload, stripePromise }) {
  const [loader, setLoader] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (open) {
      setLoader(true);
      subscriptionService
        .createCheckoutSession(payload)
        .then((response) => {
          if (response.data.status == 200) {
            setClientSecret((prev) => response.data.clientSecret);
          } else {
            setClientSecret("");
            console.log(response.data.message);
          }
          setLoader(false);
        })
        .catch((e) => {
          setClientSecret("");
          setLoader(false);
          console.log(e);
        });
    }
  }, [open]);

  return (
    <Dialog fullScreen open={open} onClose={handleOpen}>
      <div className="flex justify-end">
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleOpen}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </div>
      {loader ? (
        <div className="flex justify-center mt-4">
          <CircularProgress size={24} />
        </div>
      ) : (
        stripePromise &&
        clientSecret && (
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ clientSecret }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        )
      )}
    </Dialog>
  );
}

export default PaymentDialog;
