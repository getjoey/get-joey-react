import { Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export default ({ setTabValue }: { setTabValue: React.Dispatch<React.SetStateAction<string>> }) => {
  const downloadPDF = () => {
    setTabValue("0");

    // Wait for the tab change to render before capturing the content
    setTimeout(() => {
      const input = document.body;
      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'pt', 'a4');
          const imgProps = pdf.getImageProperties(imgData);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

          pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
          pdf.save('JosephCiampiniWebsite.pdf');
        })
        .catch((error) => {
          console.error('Error generating PDF:', error);
        });
    }, 1000);
  };


  return (
    <Box component={Paper} elevation={2} sx={{ p: 4, maxWidth:"500px" }} display="flex" flexDirection={"column"} rowGap={3}>
      <Typography variant="h6" gutterBottom>Contact Information</Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">Name</TableCell>
            <TableCell>Joseph Ciampini</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Email</TableCell>
            <TableCell>JosephMChamp@gmail.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Languages</TableCell>
            <TableCell>English, French</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Location</TableCell>
            <TableCell>Montreal, Quebec, Canada</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Work Eligibility</TableCell>
            <TableCell>Canada and EU</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Box>
        <IconButton href="https://github.com/getjoey" target="_blank" rel="noopener noreferrer" sx={{ mr: 1 }}>
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/jo-ciamp/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </IconButton>
      </Box>
      <Button
        variant="outlined"
        startIcon={<DownloadIcon />}
        onClick={downloadPDF}
      >
        Download Website PDF
      </Button>
    </Box>
  );
};
