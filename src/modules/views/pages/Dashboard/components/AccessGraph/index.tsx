import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { IUser } from '../types/types';

interface IGraph {
  user: IUser,
  handleCloseAccessModal: () => void
}
const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: '200px',
    '& .recharts-wrapper': {
      background: '#FFF',
      padding: 50, 
    },
    '& .MuiButtonBase-root': {
      position: 'relative',
      top: '175px',
      right: '92px',
    }
  }

});

export const AccessGraph = ({ user, handleCloseAccessModal }: IGraph) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>

      <LineChart
        width={500}
        height={300}
        data={user.access}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line dataKey="times" stroke="#8884d8" activeDot={{ r: 8 }} />

      </LineChart>
      <Button variant="contained" color="primary" onClick={handleCloseAccessModal}>
        Close
            </Button>
    </div>
  )
}