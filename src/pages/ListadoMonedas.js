import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
/* Style Components */
import { Card } from './styled';
import * as BravenewcoinServices from "../services";

const ListadoMonedas = ({ history, match }) => {
  const [ coin, setCoin ] = useState('btc');
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const newData = await BravenewcoinServices.apiCrypto.prices(coin);
    setData(newData);
    setLoading(false);
  }, []);

  useEffect(() => {
    if(data.length === 0 && !loading) {
      load();
    }
  }, [data, load, loading]);

  return (
    <Card>
      Listado de monedas...
    </Card>
  )
}

ListadoMonedas.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]),
  match: PropTypes.oneOfType([PropTypes.object]),
};

ListadoMonedas.defaultProps = {
  history: {},
  match: {},
};

export default withRouter(ListadoMonedas);
