import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { paymentService } from "@/components/common/services";

function VerifyPayment() {
  const [verifyLoader, setVerifyLoader] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState("");
  const router= useRouter();

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    paymentService.verifyTopUpPayment(sessionId).then((response) => {
        setVerifyLoader(false);
        if (response.data.status == 200) {
          setPaymentStatus((prev) => response.data.sessionStatus);
          setTimeout(() => {
            router.push("/dashboard-data-usage?type=residential");
          }, 2000);
        } else {
          console.log(response.data.message);
          router.push("/");
        }
      }).catch((e) => {
        setVerifyLoader(false);
        router.push("/");
        console.log(e);
      });
  }, []);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{ textAlign: "center", marginTop: 5 }}
      >
        {verifyLoader ? (
          <CircularProgress size={24} />
        ) : paymentStatus == "complete" ? (
          <Card sx={{ width: "fit-content" }}>
            <CardContent sx={{ padding: 3 }}>
              <Stack
                direction="row"
                justifyContent="center"
                sx={{ marginBottom: "10px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={48}
                  height={48}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "#4CAF50" }}
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </Stack>
              <Typography variant="h4" color="#4CAF50">
                Payment Successful!
              </Typography>
            </CardContent>
          </Card>
        ) : (
          <Card sx={{ width: "fit-content" }}>
            <CardContent sx={{ padding: 3 }}>
              <Stack
                direction="row"
                justifyContent="center"
                sx={{ marginBottom: "10px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "#FF0000" }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </Stack>
              <Typography variant="h4" color="#FF0000" sx={{ marginBottom: 1 }}>
                Payment Failed
              </Typography>
              <Typography variant="body" color="#333">
                Your payment could not be processed.
              </Typography>{" "}
              <Typography variant="body" color="#333">
                Please try again later.
              </Typography>
            </CardContent>
          </Card>
        )}
      </Stack>
    </>
  );
}

export default VerifyPayment;
