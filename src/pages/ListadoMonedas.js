import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
/* Style Components */
import {
  Card,
  Label,
  LinkConvert,
  Col4,
  Row,
  GridContainer,
  Icon
} from './styled';
import * as BravenewcoinServices from "../services";

const ListadoMonedas = ({ history, match }) => {
  const [ data, setData ] = useState([]);
  const [ hasMore, setHasMore ] = useState(true);
  const [ dataFiltered, setDataFiltered ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const newData = await BravenewcoinServices.apiCrypto.prices('btc');
    if (typeof newData.prices !== 'undefined') {
      setData(newData.prices);
      setDataFiltered(newData.prices.slice(0, 20));
    }
    setHasMore(true);
  }, []);

  const fetchMoreData = () => {
    if(data.length > 0) {
      console.log('entro', dataFiltered, data);
      if(dataFiltered.length > data.length) {
        setHasMore(false);
        return;
      }
      setTimeout(() => {
        const newDataFiltered = [ ...dataFiltered, ...data.slice(dataFiltered.length, dataFiltered.length + 20) ];
        console.log('newDataFiltered', newDataFiltered);
        setDataFiltered(newDataFiltered);
      }, 1500);
    }
  };

  useEffect(() => {
    if(dataFiltered.length === 0 && !loading) {
      load();
      setLoading(true);
    }
  }, [dataFiltered, load, loading]);

  return (
    <>
      <Card>
        <GridContainer>
          <Row>
            <Col4>
              <Label weight>
                Nombre
              </Label>
            </Col4>
            <Col4>
              <Label weight>
                Precio
              </Label>
            </Col4>
            <Col4>
              <Label weight>
                Criptomoneda
              </Label>
            </Col4>
            <Col4>
              <Label weight>
                Convertir
              </Label>
            </Col4>
          </Row>
        </GridContainer>
      </Card>
      <InfiniteScroll
        dataLength={dataFiltered.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{textAlign: 'center'}}>
            <b>No hay mas datos para cargar!</b>
          </p>
        }
      >
        {dataFiltered.map(({ name, price, crypto, id_currency }, index) => (
          <Card key={index}>
            <GridContainer>
              <Row>
                <Col4>
                  <Label>
                    {name}
                  </Label>
                </Col4>
                <Col4>
                  <Label>
                    {`$ ${parseFloat(price).toFixed(2)}`}
                  </Label>
                </Col4>
                <Col4>
                  <Label>
                    {(parseInt(crypto) === 1) ? (
                      <>
                        <Icon color="green" vertical>fiber_manual_record</Icon> <span style={{ textTransform: 'uppercase', verticalAlign: 'middle' }}>SI</span>
                      </>
                    ) : (
                      <>
                        <Icon color="red" vertical>fiber_manual_record</Icon> <span style={{ textTransform: 'uppercase', verticalAlign: 'middle' }}>NO</span>
                      </>
                    )}
                  </Label>
                </Col4>
                <Col4>
                  <LinkConvert to={`/realizar-cambio/${id_currency}`}>
                    <Label>
                      <Icon>sync</Icon>
                    </Label>
                  </LinkConvert>
                </Col4>
              </Row>
            </GridContainer>
          </Card>
        ))}
      </InfiniteScroll>
    </>
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
