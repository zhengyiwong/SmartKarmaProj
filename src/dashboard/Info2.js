import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const Info2 = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [orders] = useState(mockData);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <Button
            color="primary"
            size="small"
            variant="outlined"
          >
            New entry
          </Button>
        }
        title="Latest Updates"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Author</TableCell>
                  <TableCell>sentiment_score</TableCell>
                  <TableCell>Volume</TableCell>
                  <TableCell sortDirection="desc">
                    <Tooltip
                      enterDelay={300}
                      title="Sort"
                    >
                      <TableSortLabel
                        active
                        direction="desc"
                      >
                        Date
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell>Article Headline</TableCell>
                  <TableCell>Article Link</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map(order => (
                  <TableRow
                    hover
                    key={order.id}
                  >
                    <TableCell>{order.customer.name}</TableCell>
                    <TableCell>{order.sentiment_score}</TableCell>
                    <TableCell>{order.volume}</TableCell>
                    <TableCell>
                      {moment().format("DD/MM/YYYY HH:mm")}
                    </TableCell>
                    <TableCell>
                      <div className={classes.statusContainer}>
                        {order.article_headline}
                      </div>
                    </TableCell>              
                    <TableCell>{order.article_link}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

Info2.propTypes = {
  className: PropTypes.string
};

export default Info2;
