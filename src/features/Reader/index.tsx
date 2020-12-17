import React from 'react';
import { Container, makeStyles, Paper } from '@material-ui/core';

import { Word } from './Word';

const randomWords = [
  'shrieving',
  'nota',
  'helper',
  'downhillers',
  'crinum',
  'nitrates',
  'postprison',
  'compartments',
  'cerement',
  'pimp',
  'shrieving',
  'nota',
  'helper',
  'downhillers',
  'crinum',
  'nitrates',
  'postprison',
  'compartments',
  'cerement',
  'pimp',
  'shrieving',
  'nota',
  'helper',
  'downhillers',
  'crinum',
  'nitrates',
  'postprison',
  'compartments',
  'cerement',
  'pimp',
  'shrieving',
  'nota',
  'helper',
  'downhillers',
  'crinum',
  'nitrates',
  'postprison',
  'compartments',
  'cerement',
  'pimp',
];

const useStyles = makeStyles((theme) => ({
  mainContent: {
    padding: theme.spacing(3, 0, 6),
  },
}));

export const Reader: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.mainContent}>
      <div>Reader content</div>
      <Container maxWidth="md">
        <Paper variant="outlined" elevation={0}>
          {randomWords.map((word, index) => (
            <Word key={index} word={word} translation="test" thesaurus="test" />
          ))}
        </Paper>
      </Container>
    </Container>
  );
};
