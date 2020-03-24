import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
/* Style Components */
import { Card } from './styled';
import * as BravenewcoinServices from "../services";

const RealizarCambio = ({ history, match }) => {
  const [ qty, setQty ] = useState(1);
  const [ from, setFrom ] = useState('btc');
  const [ to, setTo ] = useState('usd');
  const [ loading, setLoading ] = useState(false);

  const asyncData = async () => {
    setLoading(true);
    const data = await BravenewcoinServices.apiCrypto.convert(qty, from, to);
    setLoading(false);
  };

  return (
    <Card>
      Realizar cambio...
    </Card>
  )
}

RealizarCambio.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]),
  match: PropTypes.oneOfType([PropTypes.object]),
};

RealizarCambio.defaultProps = {
  history: {},
  match: {},
};

export default withRouter(RealizarCambio);
