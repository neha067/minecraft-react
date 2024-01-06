import { PointerLockControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

export const FPV = () => {
	const { camera, gl } = useThree()

	// This component captures the mouse and uses it to control the camera
	return (<PointerLockControls args={[camera, gl.domElement]} />)
}