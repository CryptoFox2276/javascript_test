const TaskFactory = require('./tasks.js')

describe('String sort', () => {
  test('case 1', () => {
    const res = TaskFactory.sortString('g5et ski3lls on6 use1 your2 to4 7top');
    expect(res).toEqual("use1 your2 ski3lls to4 g5et on6 7top")
  })
  test('case 2', () => {
    const res = TaskFactory.sortString('');
    expect(res).toEqual("")
  })
  test('case 3', () => {
    const res = TaskFactory.sortString('practic3 h4rder yo1u 2hould');
    expect(res).toEqual("yo1u 2hould practic3 h4rder")
  })
})

describe('Supermarket Queue', () => {
  test('case 1', () => {
    const res = TaskFactory.queueSupermakert([], 1);
    expect(res).toEqual(0)
  })
  test('case 2', () => {
    const res = TaskFactory.queueSupermakert([1,2,3,4], 1);
    expect(res).toEqual(10)
  })
  test('case 3', () => {
    const res = TaskFactory.queueSupermakert([2,2,3,3,4,4], 2);
    expect(res).toEqual(9)
  })
  test('case 4', () => {
    const res = TaskFactory.queueSupermakert([1,2,3,4,5], 100);
    expect(res).toEqual(5)
  })
})

describe('Next bigger Number', () => {
  test('case 1', () => {
    const res = TaskFactory.nextBigger(23);
    expect(res).toEqual(32)
  })
  test('case 2', () => {
    const res = TaskFactory.nextBigger(624);
    expect(res).toEqual(642)
  })
  test('case 3', () => {
    const res = TaskFactory.nextBigger(2018);
    expect(res).toEqual(8210)
  })
  test('case 4', () => {
    const res = TaskFactory.nextBigger(9);
    expect(res).toEqual(-1)
  })
  test('case 5', () => {
    const res = TaskFactory.nextBigger(111);
    expect(res).toEqual(-1)
  })
  test('case 6', () => {
    const res = TaskFactory.nextBigger(531);
    expect(res).toEqual(-1)
  })
})
