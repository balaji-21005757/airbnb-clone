import React from 'react';
import styled from 'styled-components';

const imagesData = [
  { src: '/photo/image1.jpg', title: 'Tropical Haven Resort', subtitle: 'Booking Price: $200 per night', status: 'Opening Timings: 8:00 AM - 10:00 PM' },
  { src: '/photo/image2.jpg', title: "Serenity Bay Resort", subtitle: 'Booking Price: $250 per night', status: 'Opening Timings: 7:00 AM - 11:00 PM' },
  { src: '/photo/image3.jpg', title: 'Sunset Paradise Resort', subtitle: 'Booking Price: $220 per night', status: 'Opening Timings: 9:00 AM - 10:00 PM' },
  { src: '/photo/image4.jpg', title: 'Golden Sands Resort', subtitle: 'Booking Price: $230 per night', status: 'Opening Timings: 9:00 AM - 11:00 PM' },
  { src: '/photo/5.jpg', title: 'Ocean View Resort', subtitle: 'Booking Price: $270 per night', status: 'Opening Timings: 7:30 AM - 10:30 PM' },
  { src: '/photo/6.jpg', title: "Mountain Breeze Retreat", subtitle: 'Booking Price: $180 per night', status: 'Opening Timings: 8:00 AM - 9:00 PM' },
  { src: '/photo/7.jpg', title: 'Lakeside Tranquility Resort', subtitle: 'Booking Price: $240 per night', status: 'Opening Timings: 8:00 AM - 11:00 PM' },
  { src: '/photo/8.jpg', title: 'Whispering Pines Resort', subtitle: 'Booking Price: $210 per night', status: 'Opening Timings: 8:30 AM - 9:30 PM' },
  { src: '/photo/9.jpg', title: 'Frosty Peaks Retreat', subtitle: 'Booking Price: $260 per night', status: 'Opening Timings: 8:00 AM - 9:00 PM' },
  { src: '/photo/10.jpg', title: "Azure Waves Resort", subtitle: 'Booking Price: $250 per night', status: 'Opening Timings: 7:00 AM - 10:00 PM' },
  { src: '/photo/11.jpg', title: 'Seabreeze Cove Resort', subtitle: 'Booking Price: $230 per night', status: 'Opening Timings: 9:00 AM - 11:00 PM' },
  { src: '/photo/12.jpg', title: 'Coral Reef Resort', subtitle: 'Booking Price: $240 per night', status: 'Opening Timings: 8:00 AM - 9:00 PM' },
  
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
