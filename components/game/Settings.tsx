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
import { GameType } from "./GameScreen";
import ThemeToggle from "../ThemeToggle";

const Settings = ({ selectedMode, setSelectedMode }: GameType) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Tooltip showArrow={true} content="Configurações">
          <h1 onClick={() => onOpen()} className="text-2xl font-bold">
            <FaEllipsisV />
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
                <RadioGroup
                  label="Selecione o modo desejado:"
                  value={selectedMode}
                  onChange={(e) => setSelectedMode(e.target.value)}
                >
                  <Radio value="Hiragana Romanizado">
                    Hiragana - Romanizado
                  </Radio>
                  {/* <Radio value="Romanizado Hiragana">Romanizado - Hiragana</Radio> */}
                  <Radio value="Katakana Romanizado">
                    Katakana - Romanizado
                  </Radio>
                  {/* <Radio value="Romanizado Katakana">Romanizado - Katakana</Radio> */}
                </RadioGroup>

                <div className="relative">
                  <ThemeToggle />
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

export default Settings;
