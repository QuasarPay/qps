import { IoInformationCircleOutline, IoTrashOutline } from "react-icons/io5";
import { Icon } from "@chakra-ui/react";
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
          <div className={styles.recordingList}>
            {recordings.map((record) => (
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
            ))}
          </div>
        </>
      ) : (
        <div className={styles.noRecords}>
          <Icon as={IoInformationCircleOutline} w='6' h='6' />
          <span>You don&apos;t have records</span>
        </div>
      )}
    </div>
  );
}
