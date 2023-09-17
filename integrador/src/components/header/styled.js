
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Cria três colunas com largura igual */
  align-items: center; /* Centraliza verticalmente os elementos */
  padding: 10px 20px;
  background-color: #ededed; /* Cor de fundo do cabeçalho */
  color: white; /* Cor do texto */
`;

export const LogoImage = styled.img`
  max-width: 100px; /* Largura máxima da imagem */
  grid-column: 2; /* Coloca a imagem na segunda coluna */
  justify-self: center; /* Centraliza horizontalmente a imagem dentro da segunda coluna */
`;

export const HeaderButton = styled.button`
  background-color: transparent; /* Fundo transparente */
  color: #6ea2d4; /* Cor do texto do botão */
  border: none; /* Sem borda */
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  grid-column: 3; /* Coloca o botão na terceira coluna */
  justify-self: end; /* Alinha o botão à direita na terceira coluna */
`;
