import styled from 'styled-components';
import imgurl from '@/assets/img/playpanel_bg.png';
export const WrapperPlayPanel = styled.div`
  position: absolute;
  left: 50%;
  bottom: 46px;
  transform: translateX(-50%);
  width: 986px;
  height: 301px;
  color: #e2e2e2;
  .main {
    position: relative;
    display: flex;
    height: 260px;
    overflow: hidden;
    background: url(${imgurl}) -1014px 0 repeat-y;

    .image {
      position: absolute;
      left: 2px;
      top: -360px;
      width: 980px;
      height: auto;
      opacity: 0.2;
    }
  }
`;
