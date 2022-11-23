import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const PassengerInformationForm = () => {

    const {handleSubmit, control} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4} item p={2}>
            <Grid item xs={12}>
                <Controller 
                control={control} 
                name='First name'
                rules={{required: 'The field is required'}}
                render={({field, fieldState: {error}}) => (
                    <TextField 
                    {...field}
                    label='First name*'
                    variant='outlined'
                    error={!!error}
                    helperText={error?.message}
                    sx={{width:'200px', height: '48px', mr:'24px'}}
                    color='secondary'
                    />
                )}
                />
                <Controller 
                control={control} 
                name='Middle'
                render={({field}) => (
                    <TextField 
                    {...field}
                    label='Middle'
                    variant='outlined'
                    sx={{width:'200px', height: '48px', mr:'24px'}}
                    color='secondary'
                    />
                )}
                />
                <Controller 
                control={control} 
                name='Last name'
                rules={{required: 'The field is required'}}
                render={({field, fieldState: {error}}) => (
                    <TextField 
                    {...field}
                    label='Last name*'
                    variant='outlined'
                    error={!!error}
                    helperText={error?.message}
                    sx={{width:'200px', height: '48px'}}
                    color='secondary'
                    />
                )}
                />
            </Grid>
            <Grid item xs={8}>
                <Controller 
                control={control} 
                name='Suffix'
                render={({field}) => (
                    <TextField 
                    {...field}
                    label='Suffix'
                    variant='outlined'
                    sx={{width:'200px', height: '48px', mr:'24px'}}
                    color='secondary'
                    />
                )}
                />
                <Controller 
                control={control} 
                name='Date of birth'
                rules={{required: 'The field is required'}}
                render={({field, fieldState: {error}}) => (
                    <TextField 
                    {...field}
                    // label='Date of birth*'
                    variant='outlined'
                    error={!!error}
                    helperText={error?.message}
                    type={'date'}
                    sx={{width:'252px', height: '48px'}}
                    color='secondary'
                    />
                )}
                />
            </Grid>
            <Grid item xs={8} mt={4}>
                <Controller 
                control={control} 
                name='Email address'
                rules={{required: 'The field is required'}}
                render={({field, fieldState: {error}}) => (
                    <TextField 
                    {...field}
                    label='Email address*'
                    variant='outlined'
                    error={!!error}
                    helperText={error?.message}
                    type={'email'}
                    sx={{width:'300px', height: '48px', mr: '24px'}}
                    color='secondary'
                    />
                )}
                />
                <Controller 
                control={control} 
                name='Phone number'
                rules={{required: 'The field is required'}}
                render={({field, fieldState: {error}}) => (
                    <TextField 
                    {...field}
                    label='Phone number*'
                    variant='outlined'
                    error={!!error}
                    helperText={error?.message}
                    type={'tell'}
                    sx={{width:'300px', height: '48px'}}
                    color='secondary'
                    />
                )}
                />
            </Grid>
            <Grid item xs={8} mb={4}>
                <Controller 
                control={control} 
                name='Redress number'
                rules={{required: 'The field is required'}}
                render={({field, fieldState: {error}}) => (
                    <TextField 
                    {...field}
                    label='Redress number'
                    variant='outlined'
                    error={!!error}
                    helperText={error?.message}
                    sx={{width:'300px', height: '48px', mr: '24px'}}
                    color='secondary'
                    />
                )}
                />
                <Controller 
                control={control} 
                name='Known traveller number'
                rules={{required: 'The field is required'}}
                render={({field, fieldState: {error}}) => (
                    <TextField 
                    {...field}
                    label='Known traveller number*'
                    variant='outlined'
                    error={!!error}
                    helperText={error?.message}
                    sx={{width:'300px', height: '48px'}}
                    color='secondary'
                    />
                )}
                />
            </Grid>
            <Grid item xs={8}>
                <Button type='submit' variant="outlined" size="large">
                    Submit
                </Button>
            </Grid>
        </Grid>

    </form>
    )
}

export default PassengerInformationForm;