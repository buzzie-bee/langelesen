import {
  Button,
  Card,
  CardActions,
  CardContent,
  ClickAwayListener,
  Fade,
  makeStyles,
  Popper,
  Typography,
} from '@material-ui/core';
import React from 'react';

interface Props {
  word: string;
  translation: string;
  thesaurus: string;
  wordType?: string;
  definition?: string;
}

const useStyles = makeStyles((theme) => ({
  wordButton: {
    'text-transform': 'none',
    fontSize: theme.typography.pxToRem(10),
  },
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export const Word: React.FC<Props> = ({
  word,
  translation,
  thesaurus,
  wordType = 'word type',
  definition = 'definition',
}: Props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();

  const handleClickAway = (event: any) => {
    setOpen(false);
  };

  const handleButtonClick = (event: any) => {
    setOpen(!open);
    setAnchorEl(event.currentTarget);
  };

  const popperRefObject = React.useRef(null);

  return (
    <>
      <Button
        variant="text"
        className={classes.wordButton}
        onClick={handleButtonClick}
      >
        {word}
      </Button>

      <Popper
        id="1"
        open={open}
        placement="bottom-start"
        anchorEl={anchorEl}
        ref={popperRefObject}
        transition
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClickAway}>
            <Fade {...TransitionProps} timeout={350}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Title?
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {/* be{bull}nev{bull}o{bull}lent */}
                    {translation}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {wordType}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {definition}
                  </Typography>
                  <Typography variant="body2" component="i">
                    {thesaurus}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href="#"
                    onClick={() => alert('Not implemented')}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
};
