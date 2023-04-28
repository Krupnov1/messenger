import { FormName } from "../FormName/FormName";
import { render, fireEvent } from "@testing-library/react";

describe("FormNameContainer", () => {
    it('return the value of the input field', () => {
    const component = render(<FormName />);
    const input = component.getByTestId('input');

    fireEvent.change(input, {target: {value: 'value'}})
    expect(input.value).toBe('value')
    });
});
