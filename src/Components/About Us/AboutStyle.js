import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  height: 80%;
`;

export const Card = styled.div`
  width: 40%;
  height: 40%;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  position: relative;
  margin: 10px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const Icon = styled.div`
  font-size: 60px;
`;

export const CardTitle = styled.h3`
  margin: 15px 0;
  font-size: 22px;
`;

export const CardDescription = styled.p`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  width: 80%;
  text-align: center;
  
  ${Card}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }
`;
