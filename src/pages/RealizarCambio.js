import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import useForm from 'react-hook-form';
/* Style Components */
import {
  Card,
  CardTitleBox,
  GridContainerForm,
  Row,
  Col,
  Label,
  Input,
  SpanTextInfo,
  H3,
  Icon,
  Form,
  ButtonSubmit
} from './styled';
import * as BravenewcoinServices from "../services";

const RealizarCambio = ({ history, match }) => {
  const [ loading, setLoading ] = useState(false);
  const [ isChange, setIsChange ] = useState(false);
  const { setValue, getValues, register, handleSubmit, errors, reset, watch } = useForm();

  const load = useCallback(async () => {
    if (typeof match.params.currency !== 'undefined' && !isChange) {
      console.log('entro');
      setValue('to', match.params.currency);
      setIsChange(true);
    } else {
      setValue('to', 'USD');
    }
    setValue('qty', 1);
    setValue('from', 'BTC');
    setLoading(true);
    const values = getValues();
    const data = await BravenewcoinServices.apiCrypto.convert(values.qty, values.from, values.to);
    if (typeof data.to_quantity !== 'undefined') {
      setValue('to_quantity', parseFloat(data.to_quantity).toFixed(2));
    }
    setLoading(false);
  }, [match.params.currency, setValue, isChange]);

  const onSubmit = async (form, e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setValue('from', form.to);
      setValue('to', form.from);
      const data = await BravenewcoinServices.apiCrypto.convert(form.qty, form.to, form.from);
      if (typeof data.to_quantity !== 'undefined') {
        setValue('to_quantity', parseFloat(data.to_quantity).toFixed(2));
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
    e.stopPropagation();
  };

  const handleChangeQty = async () => {
    const values = getValues();
    setLoading(true);
    const data = await BravenewcoinServices.apiCrypto.convert(values.qty, values.to, values.from);
      if (typeof data.to_quantity !== 'undefined') {
        setValue('to_quantity', parseFloat(data.to_quantity).toFixed(2));
      }
    setLoading(false);
  };

  useEffect(() => {
    const values = getValues();
    if(values.to_quantity === '' && !loading) {
      load();
    }
  }, [load, loading, getValues]);

  return (
    <Card>
      <CardTitleBox>
        <H3>Realizar cambio</H3><br />
        <SpanTextInfo>Seleccione las monedas</SpanTextInfo>
      </CardTitleBox>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <GridContainerForm>
          <Row column>
            <Row center column>
              <Col>
                <Label>
                  <Input
                    name="qty"
                    type="text"
                    ref={register({ required: true })}
                    onChange={(e) => handleChangeQty(e)}
                  />
                </Label>
                {errors.qty && errors.qty.type === "required" && (
                  <>
                    <p style={{ color: 'red'}}>
                      qty convert is requerid!
                    </p>
                  </>
                )}
              </Col>
            </Row>
            <Row center column>
              <Col>
                <Label>
                  <Input
                    name="from"
                    type="text"
                    ref={register({ required: true })}
                  />
                  {errors.from && errors.from.type === "required" && (
                    <>
                      <p style={{ color: 'red'}}>
                        from coin is requerid!
                      </p>
                    </>
                  )}
                </Label>
              </Col>
            </Row>
            <Row center column>
              <Col>
                <Label>
                  <Input
                    name="to"
                    type="text"
                    ref={register({ required: true })}
                  />
                  {errors.to && errors.to.type === "required" && (
                    <>
                      <p style={{ color: 'red'}}>
                        to coin is requerid!
                      </p>
                    </>
                  )}
                </Label>
              </Col>
            </Row>
            <Row center column>
              <Col>
                <Label>
                  <Input
                    style={{ backgroundColor: '#cccccc' }}
                    name="to_quantity"
                    type="text"
                    ref={register}
                    readonly
                  />
                  {loading && (<h4 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Convirtiendo...</h4>)}
                </Label>
              </Col>
            </Row>
          </Row>
          <Row column>
            <Col>
              <ButtonSubmit type="submit">
                <Icon title="Cambiar converción de sentido">autorenew</Icon>
              </ButtonSubmit>
            </Col>
          </Row>
        </GridContainerForm>
      </Form>
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
