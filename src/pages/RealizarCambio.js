import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
/* Style Components */
import { Card, CardTitleBox, GridContainer, Row, Label, Input, SpanTextInfo, H3 } from './styled';
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
      <CardTitleBox>
        <H3>Realizar cambio</H3><br />
        <SpanTextInfo>Seleccione las monedas</SpanTextInfo>
      </CardTitleBox>
      <GridContainer>
        <Row center>
          <Label>
            <Input
              name="qty"
              type="text"
            />
          </Label>
        </Row>
        <Row center>
          <Label>
            <Input
              name="from"
              type="text"
            />
          </Label>
        </Row>
        <Row center>
          <Label>
            <Input
              name="to"
              type="text"
            />
          </Label>
        </Row>
        <Row center>
          <Label>
            <Input
              name="to_quantity"
              type="text"
            />
          </Label>
        </Row>
      </GridContainer>
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
