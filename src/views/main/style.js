import styled from 'styled-components'

export const MainWrapper = styled.div`
  height: 100%;

  .container {
    height: 100%;

    .ant-layout-sider {
      overflow-y: auto;
    }

    .ant-layout-header {
      background-color: #fff;
      padding: 0 20px;
    }

    .ant-layout-content {
      padding: 10px 10px;

      .ant-card {
        width: 100%;
        height: 100%;
      }
    }
  }
`
