import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../slices/authSlice";

import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link, Box, Divider } from "@mui/material";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { useFormik } from "formik";
import { LoginSchema } from "../utils/validationUtils";
import styled from "@emotion/styled";
import SigninForm from "../components/signinForm";
//////////////////////////////////
const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled(Box)({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 40,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

function SignIn() {
  const token = Cookies.get("token");
  const navigate = useNavigate();

  React.useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <RootStyle>
        <Container maxWidth="sm">
          <ContentStyle>
            <HeadingStyle component={motion.div} {...fadeInUp}>
              <Typography
                sx={{ color: "text.secondary", mb: 2, fontSize: "1.5rem" }}
              >
                Log In
              </Typography>
            </HeadingStyle>

            <Divider
              sx={{ my: 3 }}
              component={motion.div}
              {...fadeInUp}
            ></Divider>

            <SigninForm />

            <Typography
              component={motion.p}
              {...fadeInUp}
              variant="body2"
              align="center"
              sx={{ mt: 3 }}
            >
              Don't Have an account?{" "}
              <Link variant="subtitle2" component={RouterLink} to="/register">
                Register
              </Link>
            </Typography>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}

export default SignIn;
