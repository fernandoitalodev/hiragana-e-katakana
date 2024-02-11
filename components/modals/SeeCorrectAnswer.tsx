"use client";
import { FaEllipsisV } from "react-icons/fa";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
  Tooltip,
} from "@nextui-org/react";

import ThemeToggle from "../ThemeToggle";

const SeeCorrectAnswer = ({
  word,
  wordTranslation,
}: {
  word: string[];
  wordTranslation: string;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Tooltip showArrow={true} content="Ver Resposta!!">
          <h1
            onClick={() => onOpen()}
            className=" text-center underline text-sm text-blue-500 font-bold"
          >
            Ver Resposta correta
          </h1>
        </Tooltip>
      </div>
      <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Configurações
              </ModalHeader>
              <ModalBody>
                <div className="dark:text-white dark:bg-transparent dark:border-none dark:shadow-none border shadow-sm shadow-green-100 border-green-100 bg-green-100 p-4">
                  <h1 className="">
                    <span className="text-2xl text-blue-400 font-bold">
                      {word}
                    </span>{" "}
                    significa{" "}
                    <span className="text-blue-500 font-bold text-2xl ">
                      {wordTranslation}
                    </span>{" "}
                    em português!!
                  </h1>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SeeCorrectAnswer;
