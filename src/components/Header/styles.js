import styled from 'styled-components';

export const Container = styled.header`
  /* .header pois é o Header da aplicação */
  display: flex; /* alinhar os itens, um totalmente a esquerda e outro totalmente a direita */
  justify-content: space-between; /* é onde os ainha de forma separada igual */
  align-items: center; /* se um item for maior que o outro, alinhar eles verticalmente no centro*/
  margin: 50px 0; /*acrescenta uma margem de 50px em cima do header, para os itens descerem */
  background-color: #ffff;

  img {
    max-width: 150px;
  }
`;
