import styled from 'styled-components/native';

export const TextTesting = styled.Text`
    color: #f00;
`;

export const ImageContainer = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ImageBackground = styled.ImageBackground`
    width: 100%;
    height: 100%;
`;

export const TextCenter = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #0048ff;
`;

export const ButtonSearch = styled.TouchableOpacity`
    margin: 10px;
    width: 83%;
    height: 42px;
    background-color: #0066ff;
    border-radius: 7px;
    padding: 7px;
    box-shadow: 1px 1px 3px rgb(30, 30, 30);
`;

export const ButtonText = styled.Text`
    text-align: center;
    color: #fff;
    font-size: 18px;
`;
