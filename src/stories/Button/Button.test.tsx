import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button';

describe('Test a Button Component', () => {

  test('renders a button', () => {
    render(
        <Button size='medium' primary={false} label='test' onClick={() => {}}/>
    )

    const buttonElement = screen.getByRole('button', {
        name: /test/i
    })

    expect(buttonElement).toBeDefined()
  })

  test('test onClick event', async () => {
    const onClickFun = jest.fn();

    render(
        <Button size='small' primary label='test' onClick={onClickFun}/>
    )

    const buttonElement = screen.getByRole('button', {
      name: /test/i
    })

    await fireEvent.click(buttonElement);

    expect(onClickFun).toHaveBeenCalled();
  })

  test('button should be disabled', async () => {
    const onClickFun = jest.fn();

    const { container } = render(
        <Button id='test-button' size='large' primary={true} label='test' onClick={onClickFun} isDisabled={true} className='bg-slate-900'/>
    )

    const buttonElement = container.querySelector('#test-button');

    expect(buttonElement).toBeDefined()
  })
})