import { Icon, Flex, Text } from "@chakra-ui/react";
import { TbMicrophone, TbSend } from "react-icons/tb";
import { RxCross2, RxCheck } from "react-icons/rx"
import { IoClose } from "react-icons/io5"

import { formatMinutes, formatSeconds } from "../../utils/format-time";
import { RecorderControlsProps } from "../../types/recorder";
import styles from '../../../../styles/Control.module.css';


export default function RecorderControls({ recorderState, handlers }: RecorderControlsProps) {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
  const { startRecording, saveRecording, cancelRecording } = handlers;

  return (
    <div className={styles.controlsContainer}>
      <div className={styles.recorderDisplay}>
        <div className={styles.recordingTime}>
          {initRecording && <div className={styles.recordingIndicator}></div>}
          <span>{formatMinutes(recordingMinutes)}</span>
          <span>:</span>
          <span>{formatSeconds(recordingSeconds)}</span>
        </div>
        {initRecording && (
          <div className={styles.cancelButtonContainer}>
            <button className={styles.cancelButton} title="Cancel recording" onClick={cancelRecording}>
              <Icon as={IoClose} w='7' h='7 ' />
            </button>
          </div>
        )}
      </div>
      <div className={styles.startButtonContainer}>
        {initRecording ? (
          <button
            className={styles.startButton}
            title="Save recording"
            disabled={recordingSeconds === 0}
            onClick={saveRecording}
          >
            <Icon as={TbSend} w='6' h='6' />
          </button>
        ) : (
          <button className={styles.startButton} title="Start recording" onClick={startRecording}>
            <Icon as={TbMicrophone} w='6' h='6' />
          </button>
        )}
      </div>
    </div>
  );
}
