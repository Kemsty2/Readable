import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      boxShadow:
        '0px -2px 4px -1px rgba(0,0,0,0.2), 0px -4px 5px 0px rgba(0,0,0,0.14), 0px -1px 10px 0px rgba(0,0,0,0.12)',
      padding: theme.spacing(2, 2),
      marginTop: 'auto',
      backgroundColor: theme.palette.primary.main,
      color: '#FFF',
    },
  }),
);

export default useStyles;
