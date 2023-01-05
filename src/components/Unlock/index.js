import {useState} from 'react'
import {
  MainContainer,
  ImageCard,
  Image,
  Button,
  DisplayText,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLock] = useState(true)

  const onUnlock = () => {
    setLock(prevState => !prevState)
  }

  const onLock = () => {
    setLock(prevState => !prevState)
  }

  return (
    <>
      {isLocked ? (
        <MainContainer>
          <ImageCard>
            <Image
              src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
              alt="lock"
            />
            <DisplayText>Your Device is Locked</DisplayText>
          </ImageCard>
          <Button onClick={onUnlock}>Unlock</Button>
        </MainContainer>
      ) : (
        <MainContainer>
          <ImageCard>
            <Image
              alt="unlock"
              src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            />
            <DisplayText>Your Device is Unlocked</DisplayText>
          </ImageCard>
          <Button onClick={onLock}>Lock</Button>
        </MainContainer>
      )}
    </>
  )
}

export default Unlock
