import React from "react";
import { Box, Typography, Link, Container, Grid } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#333", color: "white", py: 4, mt: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              CipherPlain
            </Typography>
            <Typography variant="body2">
              Explore the AES cryptographic algorithm and understand its
              applications in securing data.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <ul>
              <li>
                <Link
                  href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard"
                  color="inherit"
                  target="_blank"
                  rel="noopener"
                >
                  AES on Wikipedia
                </Link>
              </li>
              <li>
                <Link
                  href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197.pdf"
                  color="inherit"
                  target="_blank"
                  rel="noopener"
                >
                  NIST FIPS 197
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              For more information, contact us at{" "}
              <Link href="mailto:info@cipherplain.com" color="inherit">
                info@cipherplain.com
              </Link>
              .
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
