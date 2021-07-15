import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import { SinglePost } from '../../components/SinglePost';
import { SingleContainer } from './styled';

export default function Single() {
  return (
    <SingleContainer>
      <SinglePost />
      <Sidebar />
    </SingleContainer>
  );
}
