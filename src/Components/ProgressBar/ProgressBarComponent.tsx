import { ProgressBar, ProgressRoot } from "@/components/ui/progress"
import { ProgressValueText } from "@chakra-ui/react"

export default function ProgressBarComponent() {
  return (<>
      <ProgressRoot maxW="240px" striped animated colorPalette='cyan'>
      <ProgressBar />
      <ProgressValueText>21%</ProgressValueText>
    </ProgressRoot>
  </>)
}
