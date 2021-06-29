import renderer from "react-test-renderer";
import AppTitle from "./index";

describe('AppTitle', ()=> {
    test('should render with text', () => {
        const component = renderer.create(
            <AppTitle>React Issues</AppTitle>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('should render default props', () => {
        const component = renderer.create(
            <AppTitle />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})
