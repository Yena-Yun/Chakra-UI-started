import { Container, Flex } from '@chakra-ui/react';
import Cart from '../src/sections/cart';
import Details from '../src/sections/details';

const IndexPage = () => (
  <Container maxW='container.xl' p={0}>
    {/* base: 0-768, md: 768-up */}
    {/* py={[0-480, 480-768, 768-up]} */}
    {/* auto: 내용물 크기에 맞춤, 100vh: 브라우저 전체 높이 (더 크면 잘림) */}
    <Flex h={{ base: 'auto', md: '100vh' }} py={[0, 10, 20]} direction={{ base: 'column-reverse', md: 'row' }}>
      <Details />
      <Cart />
    </Flex>
  </Container>
);

export default IndexPage;
