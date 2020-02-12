import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Container, SubHeader, Body } from './styles';

export default function Home() {
  return (
    <>
      <Container>
        <SubHeader>
          <p>Situação</p>
          <ButtonToolbar>
            <Button variant="success">Voltar</Button>
            <Button type="button">Salvar</Button>
          </ButtonToolbar>
        </SubHeader>
        <Body>
          <Form>
            <p>Nome * </p>
            <Input name="nome" />
            <p>Descrição *</p>
            <Input name="descricao" />
          </Form>
        </Body>
      </Container>
    </>
  );
}
