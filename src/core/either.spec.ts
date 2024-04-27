import { Either, left, right } from './either'

function doSomething(shouldSuccess: boolean): Either<string, number> {
  if (shouldSuccess) return right(10)
  else return left('error')
}

test('success result', () => {
  const success = right('success')

  expect(success.value).toEqual('success')
})

test('error result', () => {
  const error = left('error')

  expect(error.value).toEqual('error')
})

test('success result with function', () => {
  const result = doSomething(true)

  expect(result.isRight()).toBe(true)
  expect(result.isLeft()).toBe(false)
})

test('error result with function', () => {
  const result = doSomething(false)

  expect(result.isRight()).toBe(false)
  expect(result.isLeft()).toBe(true)
})
