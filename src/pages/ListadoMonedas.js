import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
/* Style Components */
import { Card } from './styled';
import * as BravenewcoinServices from "../services";

const ListadoMonedas = ({ history, match }) => {
  const [ coin, setCoin ] = useState('btc');
  const [ loading, setLoading ] = useState(false);

  const asyncData = async () => {
    setLoading(true);
    const data = await BravenewcoinServices.apiCrypto.prices(coin);
    setLoading(false);
  };

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
