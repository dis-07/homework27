import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';

import PassengerInformationForm from "./components/PassengerInformationForm";

function App() {
  return (
    <>
      <Grid item p={2}>
        <Grid item xs={12}>
          <Typography variant="h2" color='primary'>
            Passenger information
          </Typography>
        </Grid>
        <Grid item xs={12} mt={2}>
          <Typography variant="p" color='secondary'>
            Enter the required information for each traveler and be sure that it exactly matches the government-issued ID Typographyresented at the airport.
          </Typography>
        </Grid>
        <Grid item mt={6}>
          <Typography variant="p" color='#6E7491'>
            Passenger 1 (Adult)
          </Typography>
        </Grid>
      </Grid>
      <PassengerInformationForm/>
    </>
  );
}

export default App;
