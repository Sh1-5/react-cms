import styled from 'styled-components'

import bg from '../../assets/img/login-bg.svg'

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${bg});

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .login-form {
    width: 24%;
  }
`
