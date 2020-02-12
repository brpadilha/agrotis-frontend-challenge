import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container, SubHeader, Body } from './styles';

export default function Home() {
  return (
    <>
      <Container>
        <SubHeader>
          <p>Situação do documento</p>
          <input type="text" name="name" placeholder="Pesquisar por nome..." />
        </SubHeader>
        <Body>
          <Form>
            <Input name="nome" />
            <Input name="descricao" />
          </Form>
        </Body>
      </Container>
    </>
  );
}
