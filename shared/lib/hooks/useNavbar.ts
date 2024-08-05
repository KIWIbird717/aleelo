import { useState } from "react";

export const useNavbar = () => {
  const [isDisabled, setIsDisabled] = useState(false)

  const handleDisable = () => setIsDisabled(true)
  const handleValid = () => setIsDisabled(false)


  return {
    isDisabled,
    handleDisable,
    handleValid
  }
}