import { IoInformationCircleOutline, IoTrashOutline } from "react-icons/io5";
import { Icon, Flex, Text } from "@chakra-ui/react";
import useRecordingsList from "../../hooks/use-recordings-list";
import { RecordingsListProps } from "../../types/recorder";
import styles from '../../../../styles/List.module.css';


export default function RecordingsList({ audio }: RecordingsListProps) {
  const { recordings, deleteAudio } = useRecordingsList(audio);
  return (
    <div className={styles.recordingContainer}>
      {recordings.length > 0 ? (
        <>
          <h1>Your recordings</h1>
          <Flex direction="column">
              <div className={styles.recordingList}>
                {recordings.map((record) => (
                  <Flex direction="column" key={record.key} gap={2}>
                    <div className={styles.record} key={record.key}>
                      <audio controls src={record.audio} />
                      <div className={styles.deleteButtonContainer}>
                        <button
                          className={styles.deleteButton}
                          title="Delete this audio"
                          onClick={() => deleteAudio(record.key)}
                        >
                          <Icon as={IoTrashOutline} w='4' h='4' />
                        </button>
                      </div>
                    </div>
                  <Flex px={3} py={2} w="200px" align="center" borderRadius="full" bg="#C1C1C1">
                    <Text>Response from AI</Text>
                  </Flex>
                </Flex>
                ))}
              </div>
          </Flex>
        </>
      ) : (
        <div className={styles.noRecords}>
          <Icon as={IoInformationCircleOutline} w='6' h='6' />
          <span>You don&apos;t have any records history</span>
        </div>
      )}
    </div>
  );
}
