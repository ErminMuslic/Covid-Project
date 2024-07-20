import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 100px); /* Adjust height based on footer size */
  width: 100vw;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  height: 20vh; /* Reduced height for better fit */
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

export const MainContent = styled.div`
  flex: 1; /* Allow to take remaining space */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Section = styled.div`
  max-width: 80vw;
  width: 100%;
  height: auto; /* Allow height to adjust based on content */
  background-color: rgba(255, 255, 255, 0.9); /* Slightly transparent background */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px; /* Space between boxes */
  width: 100%;
  justify-content: space-between;
`;

export const BlackBox = styled.div`
  flex: 1; /* Make the box flexible */
  min-width: 150px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const WideBlackBox = styled(BlackBox)`
  width: 97%;
  height: 10vh;
  max-width: 100%; 
`;
