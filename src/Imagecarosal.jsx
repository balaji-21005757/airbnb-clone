import React from 'react';
import styled from 'styled-components';

const imagesData = [
  { src: '/photo/image1.jpg', title: 'Make core memories with Inside Out 2', subtitle: 'Hosted by Joy', status: 'Booking closed' },
  { src: '/photo/image2.jpg', title: "Stay in Prince's Purple Rain house", subtitle: 'Hosted by Wendy and Lisa', status: 'Coming August' },
  { src: '/photo/image3.jpg', title: 'Go VIP with Kevin Hart', subtitle: 'Hosted by Kevin Hart', status: 'Coming August' },
  { src: '/photo/image4.jpg', title: 'Join a living room session with Doja', subtitle: 'Hosted by Doja Cat', status: 'Coming October' },
  { src: '/photo/5.jpg', title: 'Make core memories with Inside Out 2', subtitle: 'Hosted by Joy', status: 'Booking closed' },
  { src: '/photo/6.jpg', title: "Stay in Prince's Purple Rain house", subtitle: 'Hosted by Wendy and Lisa', status: 'Coming August' },
  { src: '/photo/7.jpg', title: 'Go VIP with Kevin Hart', subtitle: 'Hosted by Kevin Hart', status: 'Coming August' },
  { src: '/photo/8.jpg', title: 'Join a living room session with Doja', subtitle: 'Hosted by Doja Cat', status: 'Coming October' },
  { src: '/photo/9.jpg', title: 'Make core memories with Inside Out 2', subtitle: 'Hosted by Joy', status: 'Booking closed' },
  { src: '/photo/10.jpg', title: "Stay in Prince's Purple Rain house", subtitle: 'Hosted by Wendy and Lisa', status: 'Coming August' },
  { src: '/photo/11.jpg', title: 'Go VIP with Kevin Hart', subtitle: 'Hosted by Kevin Hart', status: 'Coming August' },
  { src: '/photo/12.jpg', title: 'Join a living room session with Doja', subtitle: 'Hosted by Doja Cat', status: 'Coming October' },
  
];

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2em;
`;

const Subtitle = styled.p`
  margin: 10px 0;
  color: #888;
`;

const App = () => (
  <GalleryContainer>
    {imagesData.map((image, index) => (
      <Card key={index}>
        <Image src={image.src} alt={image.title} />
        <Content>
          <Title>{image.title}</Title>
          <Subtitle>{image.subtitle}</Subtitle>
          <Subtitle>{image.status}</Subtitle>
        </Content>
      </Card>
    ))}
  </GalleryContainer>
);

export default App;
