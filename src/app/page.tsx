import { Container } from '../../styled-system/jsx';
import {
  Button,
  Table,
  TableHeader,
  TableRow,
  TableColumnHeader,
  TableBody,
  TableCell,
  Field,
  FieldLabel,
  Input,
  FieldError,
} from '@dreamy-ui/react';
import {
  VStack,
  HStack,
  Flex,
  Text,
  Skeleton,
  SkeletonText,
} from '@dreamy-ui/react/rsc';
import { BasicPopover } from './components/BasicPopover';

export default function Page() {
  return (
    <Container w="100%" py={{ base: 6, md: 20 }} px={{ base: 6, md: 10 }}>
      <Flex wrapped gap={6}>
        <Text>Dreamy UI</Text>
        <Button>Click me!</Button>
      </Flex>

      <BasicPopover />

      <div>
        <Table variant="line" withBackground>
          <TableHeader>
            <TableRow>
              <TableColumnHeader>Name</TableColumnHeader>
              <TableColumnHeader>Age</TableColumnHeader>
              <TableColumnHeader>Gender</TableColumnHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[20, 22, 25].map((item, index) => (
              <TableRow key={index}>
                <TableCell>Name {index + 1}</TableCell>
                <TableCell>{item}</TableCell>
                <TableCell>{item % 5 === 0 ? 'Male' : 'Female'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Flex wrapped gap={6}>
        <VStack w="300px">
          <Text>Shine</Text>
          <VStack gap={4}>
            <HStack>
              <Skeleton variant="shine" boxSize="10" rounded={'full'} />
              <SkeletonText variant="shine" lines={2} />
            </HStack>
            <Skeleton h="150px" variant="shine" />
          </VStack>
        </VStack>
      </Flex>
      <Field isInvalid>
        <FieldLabel>Username</FieldLabel>
        <Input placeholder="Enter your username" defaultValue="x" />
        <FieldError>This username is too short!</FieldError>
      </Field>
    </Container>
  );
}
