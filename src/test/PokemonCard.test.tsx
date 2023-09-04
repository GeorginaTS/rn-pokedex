import { render } from "@testing-library/react-native";
import { View } from "react-native";

test('component View mounts properly', () => {
    const wrapper = render(<View />)
    expect(wrapper).toBeTruthy()
})