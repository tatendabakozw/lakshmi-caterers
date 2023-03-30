import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

type Props = {};

const VegMenuModal = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <div onClick={onOpen} className="flex bg-services-green p-3 my-8 text-lg text-slate-800 font-semibold text-center rounded-xl">
            Veg Items
          </div>

      <Modal size={'3xl'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Veg Menu Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Indian cuisine is known for its vibrant colors, bold flavors, and
            diverse vegetarian options. From the sweet and creamy dishes of the
            north to the spicy and tangy flavors of the south, there's something
            for everyone in Indian veg food. 
            <br />
            <br />
            One of the most popular vegetarian
            dishes in India is everything that has Paneer in it. Soft and creamy
            paneer marinated in a spicy blend of yogurt, ginger, and garlic,
            then roasted until golden brown. Simmered in a rich tomato and cream
            sauce until the flavors meld together into a satisfyingly decadent
            dish. 
            <br />
            <br />
            How can we leave Chana behind when we talk about Indian food!!
            A hearty and spicy chickpea stew that's perfect for cold winter
            nights. Simmered in a fragrant blend of onion, garlic, ginger, and a
            variety of spices, then served over fluffy basmati rice or with warm
            naan bread.
            <br />
            <br />
             For those who enjoy spicy food, South Indian cuisine has
            a range of options. South Indian food is a culinary delight that
            offers a range of delicious and unique dishes. The cuisine of South
            India is characterized by its use of coconut, curry leaves,
            tamarind, and spices, which give it a distinct flavor and aroma.
            <br />
            <br />
            South Indian cuisine, including sambar, a vegetable stew made with
            lentils and tamarind, and avial, a mix of vegetables cooked in a
            coconut and yogurt sauce. Masala dosa, a dosa stuffed with a spicy
            potato filling, is another popular vegetarian option. 
            <br />
            <br />
            Overall, South
            Indian food is a delicious and diverse cuisine that offers something
            for everyone. Whether you're a fan of spicy food or prefer milder
            flavors, there are plenty of dishes to explore and enjoy in South
            Indian cuisine. 
            <br />
            <br />
            With its bold flavors, fresh ingredients, and
            diverse range of dishes, it's no wonder that Indian cuisine has
            become a favorite cuisine around the world. 
            <br />
            <br />
            So why not add a touch
            of spice and flavor to your next event with some delicious Indian
            veg food?
          </ModalBody>

          <ModalFooter>
           
            <Button onClick={onClose} variant="ghost">Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VegMenuModal;
