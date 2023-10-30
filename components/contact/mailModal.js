import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  ModalFooter,
  Button,
  useToast,
} from "@chakra-ui/react";

const EmailModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();

  const handleSubmit = () => {
    // ここにメール送信の処理を書く
    console.log("Sending email", email, message);
    onClose();
    toast({
      title: "Email sent.",
      description: "We've sent your message.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Contact Me</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Message</FormLabel>
            <Textarea
              placeholder="Your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Send
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EmailModal;
