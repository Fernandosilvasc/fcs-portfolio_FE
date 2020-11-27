import styled, { css } from 'styled-components';

interface FormProps {
  active: boolean;
}

export const Navbar = styled.div`
  display: flex;
  margin-right: 20px;
  gap: 10px;
`;

export const Button = styled.button<FormProps>`
  background: none;
  text-transform: uppercase;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  color: #efefd0;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  padding: 5px 10px;
  border: none;

  &:hover {
    background: rgba(254, 127, 45, 0.9);
  }

  ${(props: { active: boolean }) =>
    props.active &&
    css`
      background: rgba(254, 127, 45, 0.9);
    `}
`;
